const {Ticket} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const tickets = await Ticket.findAll({raw: true});
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
            const {schedule_id, user_id, biodata_id, transaction_id, qr_code} = req.body;

            const newTicket = await Ticket.create({
                schedule_id,
                user_id,
                biodata_id,
                transaction_id,
                checked_in: false,
                qr_code
            });

            return res.status(201).json({
                status: true,
                message: 'ticket created',
                data: newTicket
            });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const {ticketId} = req.params;
            let {schedule_id, user_id, biodata_id, transaction_id, qr_code} = req.body;

            const ticket = await Ticket.findOne({where: {id: ticketId}});
            if(!ticket) {
                return res.status(400).json({
                    status: false,
                    message: 'ticket not found',
                    data: null
                });
            }

            if(!schedule_id) schedule_id = ticket.schedule_id;
            if(!user_id) user_id = ticket.user_id;
            if(!biodata_id) biodata_id = ticket.biodata_id;
            if(!transaction_id) transaction_id = ticket.transaction_id;
            if(!qr_code) qr_code = ticket.qr_code;

            const isUpdated = await Ticket.update({
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