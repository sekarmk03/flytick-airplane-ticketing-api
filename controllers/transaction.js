const {
    Transaction,
    Schedule,
    Ticket,
    User,
    Airport,
    Flight,
    Notification,
    Biodata
} = require('../models');
const c_ticket = require('./ticket');
const c_biodata = require('./biodata');
const {
    Op
} = require('sequelize');
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
                            as: 'tickets',
                            include: { model: Schedule, as: 'schedule', include: [
                                {model: Flight, as: 'flight'},
                                {model: Airport, as: 'fromAirport'},
                                {model: Airport, as: 'toAirport'}
                            ] }
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
                        as: 'tickets',
                        include: { model: Schedule, as: 'schedule', include: [
                            {model: Flight, as: 'flight'},
                            {model: Airport, as: 'fromAirport'},
                            {model: Airport, as: 'toAirport'}
                        ] }
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
                        as: 'tickets',
                        include: [
                            {model: Biodata, as: 'passenger'},
                            {
                                model: Schedule, as: 'schedule', include: [
                                    {model: Flight, as: 'flight'},
                                    {model: Airport, as: 'fromAirport'},
                                    {model: Airport, as: 'toAirport'}
                            ] }
                        ]
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
            let {
                user_id,
                schedule_id,
                adult,
                child,
                round_trip,
                biodataList
            } = req.body;

            let userData = await User.findOne({
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

            let data = [];
            let final_cost = 0;

            // create transactions
            for (let i = 0; i < schedule_id.length; i++) {
                let t_data = {};
                let passenger = 0;

                // generate invoice number
                let invoice_number = (Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)).toUpperCase();
                // set paid_status auto true
                let paid_status = true;
                // search cost of the schedule
                let schedule = await Schedule.findOne({
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

                passenger += schedule.passenger;

                let total_cost = (adult * schedule.cost) + (child * (schedule.cost * 0.2)); // child 80%

                if(userData.balance - total_cost < 0) {
                    return res.status(400).json({
                        status: false,
                        message: "user's balance not enough for buy this schedule",
                        data: {
                            user_balance: userData.balance,
                            cost: total_cost
                        }
                    })
                }

                let newTransaction = await Transaction.create({
                    transaction_time: new Date(),
                    invoice_number: invoice_number,
                    user_id: user_id,
                    paid_time: new Date(),
                    paid_status: paid_status,
                    adult: adult,
                    child: child,
                    round_trip: round_trip,
                    total_cost: total_cost
                });

                // console.log(newTransaction);

                final_cost += total_cost;
                t_data.transaction = newTransaction;
                t_data.tickets = [];
                req.body.ticket_schedule_id = schedule_id[i];
                req.body.transaction_id = newTransaction.id;
                req.body.flight_id = schedule.flight_id;

                // generate ticket
                for (let j = 0; j < biodataList.length; j++) {
                    let ticket = {};

                    // new biodata
                    let newBiodata = await c_biodata.create(biodataList[j], res, next);
                    ticket.passenger_data = newBiodata;

                    if (j < adult) req.body.type = 'Adult';
                    else req.body.type = 'Children';

                    req.body.biodata_id = newBiodata.id;

                    // new ticket
                    let newTicket = await c_ticket.create(req, res, next);

                    let fixTicket = await Ticket.findOne({
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
                    
                    // update passenger
                    await Schedule.update({
                        passenger
                    }, {
                        where: {
                            id: schedule_id[i]
                        }
                    });
                }

                data.push(t_data);

                // update is_ready
                let schedulePass = await Schedule.findOne({
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

                let flight = await Flight.findOne({
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

                // create notification
                await Notification.create({
                    user_id: req.user.id,
                    topic: 'payment',
                    title: 'Payment successful!',
                    message: `Thank you. Payment of IDR ${total_cost} for transaction ${newTransaction.invoice_number} via BNI has been successful.`,
                    is_read: false
                });

                let htmlEmail = await mail.getHtml('ticket.ejs', { data: null })

                let attachments = []
                t_data.tickets.forEach((ticket) => {
                    attachments.push({
                        fileName: ticket.ticket_data.ticket_number,
                        path: ticket.ticket_data.ticket_pdf,
                        contentType: 'application/pdf'
                    })
                });
                
                let sendEmail = await mail.sendMail(userData.email, 'E-Ticket', htmlEmail, attachments);
            }

            // update user balance
            await User.update({
                balance: userData.balance - final_cost
            }, {
                where: {
                    id: user_id
                }
            });

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