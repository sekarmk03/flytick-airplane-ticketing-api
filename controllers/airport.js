const { Airport } = require('../models')

module.exports = {
    index: async (req, res, next) => {
        try {
            const dataAirport = await Airport.findAll()

            return res.status(200).json({ dataAirport })
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const { code, name, city_id, country_id, maps_link, maps_embed } = req.body

            const dataExist = await Airport.findOne({ where: { code } })

            if (dataExist) {
                return res.status(409).json({
                    status: false,
                    message: 'data already exist!',
                    data: null
                })
            }

            const created = await Airport.create({ code, name, city_id, country_id, maps_link, maps_embed })
            console.log('tes coba coba')
            return res.status(200).json({
                status: true,
                message: 'data created successfully!',
                data: { code, name, city_id, country_id, maps_link, maps_embed }
            })
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { airportId } = req.params
            const { code, name, city_id, country_id, maps_link, maps_embed } = req.body

            const dataAirport = await Airport.findOne({ where: { id: airportId } })

            if (!dataAirport) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found!',
                    data: null
                })
            }

            const updated = await Airport.update({
                code, name, city_id, country_id, maps_link, maps_embed
            }, {
                where: { id: airportId }
            })

            return res.status(200).json({
                status: true,
                message: 'data updated successfully!',
                data: { code, name, city_id, country_id, maps_link, maps_embed }
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
                data: dataAirport
            })
        } catch (err) {
            next(err)
        }
    }
}