const {
    Transaction,
    Schedule,
    Ticket,
    User,
    Flight
} = require('../models');
const c_ticket = require('./ticket');
const c_biodata = require('./biodata');
const {
    Op
} = require('sequelize');
const generate_qr = require('../utils/generate_qr');
const BASE_URL = process.env.BASE_URL;
const mail = require('../utils/mailer')

module.exports = {
    index: async (req, res, next) => {
        try {
            let {
                sort = "createdAt", type = "DESC", search = "", page = "1", limit = "10"
            } = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page - 1) * limit;
            let end = page * limit;
            let transactions;
            if (req.user.role == 'admin' || req.user.role == 'superadmin') {
                transactions = await Transaction.findAndCountAll({
                    order: [
                        [sort, type]
                    ],
                    where: {
                        invoice_number: {
                            [Op.iLike]: `%${search}%`
                        }
                    },
                    include: [
                        {
                            model: User,
                            as: 'user'
                        },
                        {
                            model: Ticket,
                            as: 'tickets'
                        }
                    ],
                    limit: limit,
                    offset: start
                });
            } else if (req.user.role == 'user') {
                transactions = await Transaction.findAndCountAll({
                    order: [
                        [sort, type]
                    ],
                    where: {
                        user_id: req.user.id,
                        invoice_number: {
                            [Op.iLike]: `%${search}%`
                        }
                    },
                    include: {
                        model: Ticket,
                        as: 'tickets'
                    },
                    limit: limit,
                    offset: start
                });
            }
            let count = transactions.count;
            let pagination = {}
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count / limit);
            pagination.thisPageRows = transactions.rows.length;
            if (end < count) {
                pagination.next = {
                    page: page + 1
                }
            }
            if (start > 0) {
                pagination.prev = {
                    page: page - 1
                }
            }

            return res.status(200).json({
                status: true,
                message: 'get all transaction success',
                pagination,
                data: transactions.rows
            });
        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;
            const transaction = await Transaction.findOne({
                where: {
                    id: id
                },
                include: [
                    {
                        model: User,
                        as: 'user'
                    },
                    {
                        model: Ticket,
                        as: 'tickets'
                    }
                ]
            });
            if (!transaction) {
                return res.status(400).json({
                    status: false,
                    message: 'transaction not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get transaction success',
                data: transaction.get()
            });
        } catch (err) {
            next(err)
        }
    },
    create: async (req, res, next) => {
        try {
            const {
                user_id,
                schedule_id,
                adult,
                child,
                round_trip,
                biodataList
            } = req.body;
            if (!adult) adult = req.query.adult;
            if (!child) child = req.query.child;

            // console.log(biodataList);

            let data = [];
            let final_cost = 0;

            for (let i = 0; i < schedule_id.length; i++) {
                let t_data = {};
                let passenger = 0;

                // generate invoice number
                let invoice_number = (Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)).toUpperCase();
                // set paid_status auto true
                const paid_status = true;
                // search cost of the schedule
                const schedule = await Schedule.findOne({
                    where: {
                        id: schedule_id[i]
                    }
                });

                if(!schedule) {
                    return res.status(404).json({
                        status: false,
                        message: 'schedule data not found',
                        data: null
                    })
                }

                const total_cost = (adult * schedule.cost) + (child * (schedule.cost * 0.2)); // child 80%

                const newTransaction = await Transaction.create({
                    transaction_time: new Date(),
                    invoice_number,
                    user_id,
                    // schedule_id,
                    paid_time: new Date(),
                    paid_status,
                    adult,
                    child,
                    round_trip,
                    total_cost
                });

                final_cost += total_cost;
                t_data.transaction = newTransaction;
                t_data.tickets = [];
                req.body.ticket_schedule_id = schedule_id[i];
                req.body.transaction_id = newTransaction.id;
                req.body.flight_id = schedule.flight_id;

                // generate ticket adult
                for (let j = 0; j < adult + child; j++) {
                    let ticket = {};

                    // new biodata
                    const newBiodata = await c_biodata.create(biodataList[j], res, next);
                    ticket.passenger_data = newBiodata;

                    if (j < adult) req.body.type = 'Adult';
                    else req.body.type = 'Children';

                    req.body.biodata_id = newBiodata.id;

                    // new ticket
                    const newTicket = await c_ticket.create(req, res, next);

                    const fixTicket = await Ticket.findOne({
                        where: {
                            id: newTicket.id
                        }
                    });

                    if(!fixTicket) {
                        return res.status(404).json({
                            status: false,
                            message: 'fixTicket data not found',
                            data: null
                        })
                    }

                    if (fixTicket) {
                        ticket.ticket_data = fixTicket;
                    }

                    t_data.tickets.push(ticket);
                    passenger++;
                }

                data.push(t_data);

                // update passenger
                await Schedule.update({
                    passenger
                }, {
                    where: {
                        id: schedule_id[i]
                    }
                });

                // update is_ready
                const schedulePass = await Schedule.findOne({
                    where: {
                        id: schedule_id[i]
                    }
                });

                if(!schedulePass) {
                    return res.status(404).json({
                        status: false,
                        message: 'schedulePass data not found',
                        data: null
                    })
                }

                const flight = await Flight.findOne({
                    where: {
                        id: schedule.flight_id
                    }
                });

                if(!flight) {
                    return res.status(404).json({
                        status: false,
                        message: 'flight data not found',
                        data: null
                    })
                }

                if (flight.capacity == schedulePass.passenger) {
                    await Flight.update({
                        is_ready: false
                    }, {
                        where: {
                            id: flight.id
                        }
                    });
                }
            }

            // update user balance
            const userData = await User.findOne({
                where: {
                    id: user_id
                }
            });

            if(!userData) {
                return res.status(404).json({
                    status: false,
                    message: 'userData data not found',
                    data: null
                })
            }

            await User.update({
                balance: userData.balance - final_cost
            }, {
                where: {
                    id: user_id
                }
            });

            // const htmlEmail = await mail.getHtml('ticket.ejs', { data: null })

            // const sendEmail = await mail.sendMail(userData.email, 'E-Ticket', htmlEmail)

            return res.status(201).json({
                status: true,
                message: 'transaction created',
                data: data
            });
        } catch (err) {
            next(err)
        }
    }
}