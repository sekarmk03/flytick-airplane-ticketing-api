const {
    Notification
} = require('../models');

const {
    Op
} = require('sequelize')

module.exports = {
    create: async (req, res, next) => {
        try {
            const {
                user_id,
                topic,
                message,
                is_read = false
            } = req.body;

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
                sort = "createdAt", type = "DESC", search = "", read = "false"
            } = req.query;
            const notifications = await Notification.findAll({
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
                }
            });

            if (!notifications) {
                return res.status(400).json({
                    status: false,
                    message: 'notification not found',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'get all notifications success',
                data: notifications
            });

        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {
                notificationId
            } = req.params;

            const notification = await Notification.findOne({
                where: {
                    id: notificationId
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
                notificationId
            } = req.params;

            let {
                user_id,
                topic,
                message,
                is_read
            } = req.body;

            const notification = await Notification.findOne({
                where: {
                    id: notificationId
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
                    id: notificationId
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
                notificationId
            } = req.params;

            const notification = await Notification.findOne({
                where: {
                    id: notificationId
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
                    id: notificationId
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