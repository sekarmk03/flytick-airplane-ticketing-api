const {
    Flight
} = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const {
                code,
                capacity,
                current_airport,
                is_ready,
                is_maintain
            } = req.body;

            const plane = await Flight.create({
                code: code,
                capacity: capacity,
                current_airport: current_airport,
                is_ready: is_ready,
                is_maintain: is_maintain
            })

            return res.status(201).json({
                status: true,
                message: 'flight created',
                data: plane
            });

        } catch (err) {
            next(err);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const allFlight = await Flight.findAll();

            if (!allFlight) {
                return res.status(400).json({
                    status: false,
                    message: 'flight not found',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'get all flight success',
                data: allFlight
            });

        } catch (err) {
            next(err);
        }
    },
    getDetail: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;

            const flight = await Flight.findOne({
                where: {
                    id: id
                }
            });

            if(!flight) {
                return res.status(400).json({
                    status: false,
                    message: 'flight not found',
                    data: null
                });
            };

            return res.status(200).json({
                status: true,
                message: 'get detail of flight success',
                data: flight
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
                code,
                capacity,
                current_airport,
                is_ready,
                is_maintain
            } = req.body;

            let flight = await Flight.findOne({
                where: {
                    id: id
                }
            });

            if(!flight) {
                return res.status(400).json({
                    status: false,
                    message: 'flight not found',
                    data: null
                });
            };

            if(!code) code = flight.code;
            if(!capacity) capacity = flight.capacity;
            if(!current_airport) current_airport = flight.current_airport;
            if(!is_ready) is_ready = flight.is_ready;
            if(!is_maintain) is_maintain = flight.is_maintain;

            const updated = await flight.update({
                code: code,
                capacity: capacity,
                current_airport: current_airport,
                is_ready: is_ready,
                is_maintain: is_maintain
            });

            return res.status(200).json({
                status: true,
                message: 'update success',
                data: updated
            });
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const {id} = req.params;

            const flight = await Flight.findOne({where: {id: id}});
            if(!flight) {
                return res.status(400).json({
                    status: false,
                    message: 'flight not found',
                    data: null
                });
            }

            const deleted = await Flight.destroy({where: {id: flight.id}});
            
            return res.status(201).json({
                status: true,
                message: 'delete flight success',
                data: deleted
            });
        } catch (err) {
            next(err);
        }
    },
}