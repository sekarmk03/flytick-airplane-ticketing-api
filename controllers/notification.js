const {
    Notification
} = require('../models');

const { Op } = require('sequelize')
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator

module.exports = {
    create: async (req, res, next) => {
        try {
            const {
                user_id,
                topic,
                message,
                is_read = false
            } = req.body;

            const body = req.body

            const validate = v.validate(body, schema.notification.createNotif)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const notification = await Notification.create({
                user_id: user_id,
                topic: topic,
                message: message,
                is_read: is_read
            })

            return res.status(201).json({
                status: true,
                message: 'notification created',
                data: notification
            });

        } catch (err) {
            next(err);
        }
    },
    index: async (req, res, next) => {
        try {
            let {
                sort = "createdAt", type = "DESC", search = "", read = "false", page = "1", limit = "10"
            } = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page - 1) * limit;
            let end = page * limit;
            const notifications = await Notification.findAndCountAll({
                order: [
                    [sort, type]
                ],
                where: {
                        is_read: read,
                    [Op.or]: [{
                            topic: {
                                [Op.iLike]: `%${search}%`
                            }
                        },
                        {
                            message: {
                                [Op.iLike]: `%${search}%`
                            }

                        }
                    ]
                },
                limit: limit,
                offset: start
            });

            let count = notifications.count;
            let pagination ={}
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = notifications.rows.length;
            if (end<count){
                pagination.next = {
                    page: page + 1
                }
            }
            if (start>0){
                pagination.prev = {
                    page: page - 1
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
                message: 'get all notifications success',
                pagination,
                data: notifications.rows
            });

        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;

            const notification = await Notification.findOne({
                where: {
                    id: id
                }
            });

            if (!notification) {
                return res.status(400).json({
                    status: false,
                    message: 'notification not found',
                    data: null
                });
            };

            return res.status(200).json({
                status: true,
                message: 'get detail of notification success',
                data: notification
            });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;

            let {
                user_id,
                topic,
                message,
                is_read
            } = req.body;

            const body = req.body

            const validate = v.validate(body, schema.notification.createNotif)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const notification = await Notification.findOne({
                where: {
                    id: id
                }
            });

            if (!notification) {
                return res.status(400).json({
                    status: false,
                    message: 'notification not found',
                    data: null
                });
            };

            if (!user_id) user_id = notification.user_id;
            if (!topic) topic = notification.topic;
            if (!message) message = notification.message;
            if (!is_read) is_read = notification.is_read;

            const updated = await notification.update({
                user_id: user_id,
                topic: topic,
                message: message,
                is_read: is_read
            }, {
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: true,
                message: 'update notification success',
                data: updated
            });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;

            const notification = await Notification.findOne({
                where: {
                    id: id
                }
            });
            if (!notification) {
                return res.status(400).json({
                    status: false,
                    message: 'notification not found',
                    data: null
                });
            }

            const deleted = await Notification.destroy({
                where: {
                    id: id
                }
            });

            return res.status(201).json({
                status: true,
                message: 'delete notification success',
                data: deleted
            });
        } catch (err) {
            next(err);
        }
    },
}