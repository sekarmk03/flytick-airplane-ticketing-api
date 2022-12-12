const {
    Schedule,
    Flight,
    Transaction,
    sequelize
} = require('../models');
const {
    Op,
    QueryTypes
} = require('sequelize')
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator


module.exports = {
    // show shedules by departure_time, from_airport, and to_airport, also the shcedules were sorted by departure_time with ASC type
    index: async (req, res, next) => {
        try {
            let {
                sort = "departure_time", type = "ASC", departure_time = "", from_airport = "", to_airport = "", adult = "0", child = "0", page = "1", limit = "10"
            } = req.query;

            let buyer = parseInt(adult) + parseInt(child);
            page = parseInt(page);
            limit = parseInt(limit)
            let start = (page - 1) * limit;
            let end = page * limit;

            let schedules;
            let countSchedules;

            if(Object.keys(req.query).length !== 0) {
                if (adult <= 0) {
                    return res.status(400).json({
                        status: false,
                        message: `You can't take flight without adult person`,
                    })
                } // buat di transaction aja
    
                schedules = await sequelize.query(`SELECT * FROM "Schedules" WHERE departure_time BETWEEN '${departure_time} 00:00:00' AND '${departure_time} 23:59:59' AND from_airport = ${from_airport} AND to_airport = ${to_airport} AND flight_id IN (SELECT id FROM "Flights" WHERE is_ready = true AND capacity >= passenger + ${buyer}) ORDER BY "${sort}" ${type} LIMIT ${limit} OFFSET ${start}`, {
                    type: QueryTypes.SELECT
                })
    
                countSchedules = await sequelize.query(`SELECT * FROM "Schedules" WHERE departure_time BETWEEN '${departure_time} 00:00:00' AND '${departure_time} 23:59:59' AND from_airport = ${from_airport} AND to_airport = ${to_airport} AND flight_id IN (SELECT id FROM "Flights" WHERE is_ready = true AND capacity >= passenger + ${buyer})`, {
                    type: QueryTypes.SELECT
                })
            } else {
                schedules = await Schedule.findAll();
                countSchedules = await Schedule.findAll();
            }

            let count = countSchedules.length;
            let thisPageRows = schedules.length;

            let pagination = {}
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count / limit);
            pagination.thisPageRows = thisPageRows;
            if (end < count) {
                pagination.next = {
                    page: page + 1,
                }
            }
            if (start > 0) {
                pagination.prev = {
                    page: page - 1,
                }
            }
            if (page > pagination.totalPages) {
                return res.status(404).json({
                    status: false,
                    message: 'DATA NOT FOUND',
                })
            }

            return res.status(200).json({
                status: true,
                message: "get all schedules success",
                pagination,
                data: schedules
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
            const schedule = await Schedule.findOne({
                where: {
                    id: id
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

            const body = req.body

            const validate = v.validate(body, schema.schedule.createSchedule)

            if (validate.length) {
                return res.status(409).json(validate)
            }

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
            id
        } = req.params;
        let {
            flight_id,
            cost,
            departure_time,
            arrival_time,
            from_airport,
            to_airport
        } = req.body;

        const body = req.body

        const validate = v.validate(body, schema.schedule.updateSchedule)

        if (validate.length) {
            return res.status(409).json(validate)
        }

        const scheduleData = await Schedule.findOne({
            where: {
                id: id
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

        const isUpdateSchedule = await Schedule.update({
            flight_id,
            cost,
            departure_time,
            arrival_time,
            from_airport,
            to_airport
        }, {
            where: {
                id: id
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
                id
            } = req.params;

            const scheduleData = await Schedule.findOne({
                where: {
                    id: id
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
                    id: id
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