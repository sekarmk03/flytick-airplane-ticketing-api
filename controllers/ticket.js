const {Ticket,sequelize} = require('../models');
const {Op, QueryTypes} = require('sequelize');
const user = require('./user');

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="createdAt", type="DESC", search="", page ="1", limit="10"} = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page -1) * limit;
            let end = page * limit;
            const tickets = await sequelize.query(`SELECT * FROM "Tickets" WHERE user_id IN (SELECT id FROM "Users" WHERE name LIKE '%${search}%') OR biodata_id IN (SELECT id FROM "Biodata" WHERE name LIKE '%${search}%') ORDER BY "${sort}" ${type} LIMIT ${limit} OFFSET ${start}`, {
                type: QueryTypes.SELECT
            })
            const countTickets = await sequelize.query(`SELECT * FROM "Tickets" WHERE user_id IN (SELECT id FROM "Users" WHERE name LIKE '%${search}%') OR biodata_id IN (SELECT id FROM "Biodata" WHERE name LIKE '%${search}%')`, {
                type: QueryTypes.SELECT
            })

            // const tickets = await Ticket.findAll({order:[[sort,type]],
            //     where: {
            //         [Op.or]: [
            //             {
            //             user_id: {
            //                 [Op.iLike]: `%${search}%`
            //             }
            //         },
            //         {
            //             biodata_id: {
            //                 [Op.iLike]: `%${search}%`
            //             }

            //         }
            //     ]
            //     }});
            let count = countTickets.length;
            let pagination ={}
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            if (end<count){
                pagination.next = {
                    page: page + 1,
                    limit
                }
            }
            if (start>0){
                pagination.prev = {
                    page: page - 1,
                    limit
                }
            }
            if (page>pagination.totalPages){
                return res.status(404).json({
                    status: false,
                    message: 'DATA NOT FOUND',
                })
            }
            return res.status(200).json({
                status: true,
                message: 'get all tickets success',
                data: tickets.rows
            })
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {ticketId} = req.params;
            const ticket = await Ticket.findOne({where: {id: ticketId}});
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

            const newTicket = await Ticket.create({
                type,
                schedule_id: ticket_schedule_id,
                user_id,
                biodata_id,
                transaction_id,
                checked_in: false,
                qr_code
            });

            /*return res.status(201).json({
                status: true,
                message: 'ticket created',
                data: newTicket
            });*/
            return newTicket;
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const {ticketId} = req.params;
            let {type, ticket_schedule_id, user_id, biodata_id, transaction_id, qr_code = null} = req.body;

            const ticket = await Ticket.findOne({where: {id: ticketId}});
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
                where: {id: ticketId}
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
            const {ticketId} = req.params;

            const ticket = await Ticket.findOne({where: {id: ticketId}});
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
                where: {id: ticketId}
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
            const {ticketId} = req.params;

            const ticket = await Ticket.findOne({where: {id: ticketId}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }

            const isDeleted = await Ticket.destroy({
                where: {id: ticketId}
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