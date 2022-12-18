const {Ticket, Flight, Schedule, Transaction, sequelize} = require('../models');
const {Op, QueryTypes} = require('sequelize');
const generate_qr = require('../utils/generate_qr');
const {FE_BASE_URL} = process.env;

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="createdAt", type="DESC", search="", page ="1", limit="10", checked_in = null} = req.query;
            page = parseInt(page);
            limit = parseInt(limit);
            let start = 0 + (page -1) * limit;
            let end = page * limit;
            let tickets;
            let countTickets;
            let querySelect = `SELECT * FROM "Tickets" WHERE user_id IN (SELECT id FROM "Users" WHERE name ILIKE '%${search}%') OR biodata_id IN (SELECT id FROM "Biodata" WHERE name LIKE '%${search}%')`;
            let queryOrder = `ORDER BY "${sort}" ${type} LIMIT ${limit} OFFSET ${start}`;
            if (checked_in !== null) {
                querySelect = `${querySelect} AND checked_in=${checked_in}` ;
            }
            if(req.user.role == 'admin' || req.user.role == 'superadmin') {
                tickets = await sequelize.query(`${querySelect} ${queryOrder}`, {
                    type: QueryTypes.SELECT
                });

                countTickets = await sequelize.query(`${querySelect}`, {
                    type: QueryTypes.SELECT
                });
            } else if(req.user.role == 'user') {
                tickets = await sequelize.query(`${querySelect} AND user_id=${req.user.id} ${queryOrder}`, {
                    type: QueryTypes.SELECT
                });

                countTickets = await sequelize.query(`${querySelect} AND user_id=${req.user.id}`, {
                    type: QueryTypes.SELECT
                });
            }

            let count = countTickets.length;
            let thisPageRows = tickets.length;
            let pagination = {};
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = thisPageRows;
            if (end<count){
                pagination.next = {
                    page: page + 1
                };
            }
            if (start>0){
                pagination.prev = {
                    page: page - 1
                };
            }
            
            return res.status(200).json({
                status: true,
                message: 'get all tickets success',
                data: tickets
            })
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {id} = req.params;
            const ticket = await Ticket.findOne({where: {id: id}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get ticket success',
                data: ticket.get()
            });
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            let {type, ticket_schedule_id, user_id, biodata_id, transaction_id, flight_id, qr_code = null} = req.body;

            // initialize ticket number
            let ticket_number = '';

            // generate seat
            const flightData = await Flight.findOne({where: {id: flight_id}});
            let fClass = flightData.fClass[0];
            const scheduleData = await Schedule.findOne({where: {id: ticket_schedule_id}});
            const seat_number = `${fClass}/${String(scheduleData.passenger+1).padStart(3, '0')}`;

            // generate pdf
            let ticket_pdf = '';
            // send pdf in transaction

            const newTicket = await Ticket.create({
                ticket_number,
                type,
                seat_number,
                schedule_id: ticket_schedule_id,
                user_id,
                biodata_id,
                transaction_id,
                flight_id,
                checked_in: false,
                qr_code,
                ticket_pdf
            });

            // generate ticket number
            const transactionData = await Transaction.findOne({where: {id: transaction_id}});
            ticket_number = `${newTicket.id}/${type[0]}/${flightData.code}/${transactionData.invoice_number}`;

            // generate qr
            qr_code = await generate_qr(`${FE_BASE_URL}/admin/verification/${newTicket.id}`);

            // update qr_code ticket
            await Ticket.update({
                ticket_number: ticket_number,
                qr_code: qr_code.url
            }, {
                where: {
                    id: newTicket.id
                }
            });

            return newTicket;
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const {id} = req.params;
            let {type, ticket_schedule_id, user_id, biodata_id, transaction_id, qr_code = null} = req.body;

            const ticket = await Ticket.findOne({where: {id: id}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }

            if(!type) type = ticket.type;
            if(!ticket_schedule_id) ticket_schedule_id = ticket.ticket_schedule_id;
            if(!user_id) user_id = ticket.user_id;
            if(!biodata_id) biodata_id = ticket.biodata_id;
            if(!transaction_id) transaction_id = ticket.transaction_id;
            if(!qr_code) qr_code = ticket.qr_code;

            const isUpdated = await Ticket.update({
                type,
                schedule_id: ticket_schedule_id,
                user_id,
                biodata_id,
                transaction_id,
                checked_in: true,
                qr_code
            }, {
                where: {id: id}
            });

            return res.status(200).json({
                status: true,
                message: 'update ticket success',
                data: isUpdated
            });
        } catch (err) {
            next(err);
        }
    },
    update_checked_in: async (req, res, next) => {
        try {
            const {id} = req.params;

            const ticket = await Ticket.findOne({where: {id: id}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }

            const isUpdated = await Ticket.update({
                checked_in: true
            }, {
                where: {id: id}
            });

            // kirim email berhasil check in

            return res.status(200).json({
                status: true,
                message: 'check in success',
                data: isUpdated
            });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const {id} = req.params;

            const ticket = await Ticket.findOne({where: {id: id}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }

            const isDeleted = await Ticket.destroy({
                where: {id: id}
            });

            return res.status(201).json({
                status: true,
                message: 'delete ticket success',
                data: isDeleted
            });
        } catch (err) {
            next(err);
        }
    }
}