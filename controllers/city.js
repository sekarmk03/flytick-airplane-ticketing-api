const { City } = require('../models')

module.exports = {
    index: async (req, res, next) => {
        try {
            const dataCity = await City.findAll()

            return res.status(200).json(dataCity)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, country_id } = req.body
            const dataCity = await City.findOne({ where: { name } })

            if (dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data already exist!',
                    data: null
                })
            }

            const created = await City.create({ name, country_id })

            return res.status(200).json({
                status: true,
                message: 'data created!',
                data: { name, country_id }
            })
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { cityId } = req.params
            const { name, country_id } = req.body
            const dataCity = await City.findOne({ where: { id: cityId } })

            if (!dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found!',
                    data: null
                })
            }

            const updated = await City.update({
                name: name,
                country_id: country_id
            }, {
                where: { id: cityId }
            })

            return res.status(200).json({
                status: true,
                message: 'data updated successfully!',
                data: { name, country_id }
            })
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { cityId } = req.params

            const dataCity = await City.findOne({ where: { id: cityId } })

            if (!dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found!',
                    data: null
                })
            }

            const deleted = await City.destroy({ where: { id: cityId } })

            return res.status(200).json({
                status: true,
                message: 'success delete data!',
                data: dataCity
            })
        } catch (err) {
            next(err)
        }
    }
}