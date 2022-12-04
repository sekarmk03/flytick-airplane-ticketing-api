const { Airport } = require('../models')

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="code", type="ASC"} = req.query;
            const dataAirport = await Airport.findAll({order:[[sort,type]]})

            return res.status(200).json({
                status: true,
                message: 'get all airport success',
                data: dataAirport
            })
        } catch (err) {
            next(err)
        }
    },

    show: async (req, res, next) => {
        try {
            const {airportId} = req.params;

            const airport = await Airport.findOne({where: {id: airportId}});
            if(!airport) {
                return res.status(400).json({
                    status: false,
                    message: 'airport not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get airport success',
                data: airport.get()
            });
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const { code, name, city_id, country_id, maps_link, maps_embed } = req.body

            const airport = await Airport.findOne({ where: { code } })

            if (airport) {
                return res.status(409).json({
                    status: false,
                    message: 'airport already exist',
                    data: null
                })
            }

            const newAirport = await Airport.create({
                code,
                name,
                city_id,
                country_id,
                maps_link,
                maps_embed
            });
            
            return res.status(200).json({
                status: true,
                message: 'airport created',
                data: newAirport
            });
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { airportId } = req.params;
            let { code, name, city_id, country_id, maps_link, maps_embed } = req.body;

            const dataAirport = await Airport.findOne({ where: { id: airportId } });

            if (!dataAirport) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }

            if(!code) code = dataAirport.code;
            if(!name) name = dataAirport.name;
            if(!city_id) city_id = dataAirport.city_id;
            if(!country_id) country_id = dataAirport.country_id;
            if(!maps_link) maps_link = dataAirport.maps_link;
            if(!maps_embed) maps_embed = dataAirport.maps_embed;

            const updated = await Airport.update({
                code, name, city_id, country_id, maps_link, maps_embed
            }, {
                where: { id: airportId }
            })

            return res.status(200).json({
                status: true,
                message: 'update airport success',
                data: updated
            })
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { airportId } = req.params

            const dataAirport = await Airport.findOne({ where: { id: airportId } })

            if (!dataAirport) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found!',
                    data: null
                })
            }

            const deleted = await Airport.destroy({ where: { id: airportId } })

            return res.status(200).json({
                status: true,
                message: 'delete data success!',
                data: deleted
            })
        } catch (err) {
            next(err)
        }
    }
}