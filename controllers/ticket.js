const {Ticket,sequelize} = require('../models');
const {Op, QueryTypes} = require('sequelize');
const user = require('./user');

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
            const {type, ticket_schedule_id, user_id, biodata_id, transaction_id, qr_code = null} = req.body;
            console.log(req.body);

            const newTicket = await Ticket.create({
                type,
                schedule_id: ticket_schedule_id,
                user_id,
                biodata_id,
                transaction_id,
                checked_in: false,
                qr_code
            });

            return newTicket;
            // return res.status(201).json({
            //     data: newTicket
            // });
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
            if(!schedule_id) schedule_id = ticket.schedule_id;
            if(!user_id) user_id = ticket.user_id;
            if(!biodata_id) biodata_id = ticket.biodata_id;
            if(!transaction_id) transaction_id = ticket.transaction_id;
            if(!qr_code) qr_code = ticket.qr_code;

            const isUpdated = await Ticket.update({
                type,
                schedule_id,
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