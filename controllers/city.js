const { City } = require('../models')
const { Op } = require('sequelize')
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator

module.exports = {
    index: async (req, res, next) => {
        try {
            let {
                sort = "name", type = "ASC", search = "", page = "0", limit = "10"
            } = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page - 1) * limit;
            let end = page * limit;
            if(page == 0) {
                limit = await City.count();
                start = 0;
                end = 1 * limit;
            }
            const dataCity = await City.findAndCountAll({
                order: [
                    [sort, type]
                ],
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                },
                limit: limit,
                offset: start
            });
            let count = dataCity.count;
            let pagination ={}
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = dataCity.rows.length;
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

            return res.status(200).json({
                status: true,
                message: 'get all cities success',
                pagination,
                data: dataCity.rows
            });
        } catch (err) {
            next(err)
        }
    },

    show: async (req, res, next) => {
        try {
            const { id } = req.params;
            const city = await City.findOne({ where: { id: id } });
            if (!city) {
                return res.status(400).json({
                    status: false,
                    message: 'city not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get city success',
                data: city.get()
            });
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, country_id } = req.body

            const body = req.body

            const validate = v.validate(body, schema.city.createCity)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const dataCity = await City.findOne({ where: { name } })

            if (dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data already exist',
                    data: null
                })
            }

            const created = await City.create({
                name,
                country_id
            })

            return res.status(200).json({
                status: true,
                message: 'city created',
                data: created
            })
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params
            let { name, country_id } = req.body

            const body = req.body

            const validate = v.validate(body, schema.city.createCity)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const dataCity = await City.findOne({ where: { id: id } })
            if (!dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }

            if (!name) name = dataCity.name;
            if (!country_id) country_id = dataCity.country_id;

            const updated = await City.update({
                name: name,
                country_id: country_id
            }, {
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'update city success',
                data: updated
            })
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const {
                id
            } = req.params

            const dataCity = await City.findOne({
                where: {
                    id: id
                }
            })

            if (!dataCity) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }

            const deleted = await City.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: true,
                message: 'delete city success',
                data: deleted
            })
        } catch (err) {
            next(err)
        }
    }
}