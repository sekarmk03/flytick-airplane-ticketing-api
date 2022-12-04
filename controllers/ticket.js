const {Ticket} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="createdAt", type="DESC", search=""} = req.query;
            const tickets = await Ticket.findAll({order:[[sort,type]],
                where: {
                    code: {
                        [Op.iLike]: `%${search}%`
                    }
                }});
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