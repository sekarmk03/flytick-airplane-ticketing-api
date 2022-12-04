const {Transaction, Schedule, Ticket} = require('../models');
const c_ticket = require('./ticket');
const c_biodata = require('./biodata');
const generate_qr = require('../utils/generate_qr');
const BASE_URL = process.env.BASE_URL;

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="createdAt", type="DESC", search=""} = req.query;
            const transactions = await Transaction.findAll({order:[[sort,type]],
                where: {
                    code: {
                        [Op.iLike]: `%${search}%`
                    }
                }});
            return res.status(200).json({
                status: true,
                message: 'get all transaction success',
                data: transactions
            });
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {transactionId} = req.params;
            const transaction = await Transaction.findOne({where: {id: transactionId}});
            if(!transaction) {
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
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const {user_id, schedule_id, adult, child, round_trip} = req.body;
            let data = [];

            for (let i = 0; i < schedule_id.length; i++) {
                let t_data = {};

                // generate invoice number
                let invoice_number = (Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)).toUpperCase();
                // set paid_status auto true
                const paid_status = true;
                // search cost of the schedule
                const cost = await Schedule.findOne({where: {id: schedule_id[i]}});
                const total_cost = (adult * cost) + (child * (cost * 0.2)); // child 80%

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

                t_data.transaction = newTransaction;
                t_data.tickets = [];
                req.ticket_schedule_id = schedule_id[0];
                req.transaction_id = newTransaction.id;

                // generate ticket adult
                for(let i = 0; i < adult.length + child.length; i++) {
                    let ticket = {};

                    // new biodata
                    const newBiodata = await c_biodata.create(req, res, next);
                    if(newBiodata != null) {
                        ticket.passenger_data = newBiodata;
                    }

                    if(i < adult.length) req.type = 'Adult';
                    else req.type = 'Children';

                    req.biodata_id = newBiodata.id;
                    
                    // new ticket
                    const newTicket = await c_ticket.create(req, res, next);

                    // generate qr
                    const qr_code = await generate_qr(`${BASE_URL}/api/ticket/${newTicket.id}`);

                    // update qr_code ticket
                    await Ticket.update({qr_code: qr_code.url}, {where: {id: newTicket.id}});

                    const fixTicket = await Ticket.findOne({where: {id: newTicket.id}});

                    if(fixTicket) {
                        ticket.ticket_data = fixTicket;
                    }

                    t_data.tickets.push(ticket);
                }

                data.push(t_data);
            }

            return res.status(201).json({
                status: true,
                message: 'transaction created',
                data: data
            });
        } catch (err) {
            next(err);
        }
    }
}