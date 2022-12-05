const {
    Schedule
} = require('../models');
const {
    Op,
} = require('sequelize')


module.exports = {
    // show shedules by departure_time, from_airport, and to_airport, also the shcedules were sorted by departure_time with ASC type
    index: async (req, res, next) => {
        try {
            let {
                sort = "departure_time", type = "ASC", departure_time = "", from_airport = "", to_airport = ""
            } = req.query;

            const schedules = await Schedule.findAll({
                order: [
                    [sort, type]
                ],
                where: {
                    departure_time: {
                        [Op.between]: [`${departure_time} 00:00:00`, `${departure_time} 23:59:59`]
                    },
                    from_airport: from_airport,
                    to_airport: to_airport
                }
            });

            return res.status(200).json({
                status: true,
                message: "get all schedules success",
                data: schedules
            });
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {
                scheduleId
            } = req.params;
            const schedule = await Schedule.findOne({
                where: {
                    id: scheduleId
                }
            });
            if (!schedule) {
                return res.status(400).json({
                    status: false,
                    message: "schedule not found",
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get schedule success',
                data: schedule.get()
            });
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const {
                flight_id,
                cost,
                departure_time,
                arrival_time,
                from_airport,
                to_airport
            } = req.body;

            if (departure_time >= arrival_time) {
                return res.status(400).json({
                    status: false,
                    message: 'arrival time must be greater than departure time',
                    data: null
                });
            }

            
            const newSchedule = await Schedule.create({
                flight_id,
                cost,
                departure_time,
                arrival_time,
                from_airport,
                to_airport,
                passenger: 0
            });

            return res.status(201).json({
                status: true,
                message: 'create schedule success',
                data: newSchedule
            });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        const {
            scheduleId
        } = req.params;
        let {
            flight_id,
            cost,
            departure_time,
            arrival_time,
            from_airport,
            to_airport,
            passenger
        } = req.body;

        const scheduleData = await Schedule.findOne({
            where: {
                id: scheduleId
            }
        });
        if (!scheduleData) {
            return res.status(400).json({
                status: false,
                message: 'schedule not found',
                data: null
            });
        }

        if (!flight_id) flight_id = scheduleData.flight_id;
        if (!cost) cost = scheduleData.cost;
        if (!departure_time) departure_time = scheduleData.departure_time;
        if (!arrival_time) arrival_time = scheduleData.arrival_time;
        if (!from_airport) from_airport = scheduleData.from_airport;
        if (!to_airport) to_airport = scheduleData.to_airport;
        if (!passenger) passenger = scheduleData.passenger;

        const isUpdateSchedule = await Schedule.update({
            flight_id,
            cost,
            departure_time,
            arrival_time,
            from_airport,
            to_airport,
            passenger
        }, {
            where: {
                id: scheduleId
            }
        });

        return res.status(200).json({
            status: true,
            message: 'update schedule success',
            data: isUpdateSchedule
        });
    },
    delete: async (req, res, next) => {
        try {
            const {
                scheduleId
            } = req.params;

            const scheduleData = await Schedule.findOne({
                where: {
                    id: scheduleId
                }
            });
            if (!scheduleData) {
                return res.status(400).json({
                    status: false,
                    message: "schedule doesn't exist",
                    data: null
                });
            }

            const isDeleted = await Schedule.destroy({
                where: {
                    id: scheduleId
                }
            });

            return res.status(200).json({
                status: true,
                message: 'delete schedule success',
                data: isDeleted
            });
        } catch (err) {
            next(err);
        }
    }
}