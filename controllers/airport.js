const {
    Airport,
    City,
    Country
} = require('../models')
const {
    Op
} = require('sequelize');
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator

module.exports = {
    index: async (req, res, next) => {
        try {
            if(!req.user || req.user.role == 'admin') {
                const dataAirport = await Airport.findAll({
                    include: [
                        {
                            model: City,
                            as: 'city',
                            attributes: ['name']
                        },
                        {
                            model: Country,
                            as: 'country',
                            attributes: ['name']
                        }
                    ],
                    raw: true
                });

                return res.status(200).json({
                    status: true,
                    message: 'get all airport success',
                    data: dataAirport
                });
            } else {
                let {
                    sort = "code", type = "ASC", search = "", page ="1", limit="10"
                } = req.query;
                page = parseInt(page);
                limit = parseInt(limit)
                let start = 0 + (page -1) * limit;
                let end = page * limit;
                const dataAirport = await Airport.findAndCountAll({
                    where: {
                        [Op.or]: [{
                            code: {
                                [Op.iLike]: `%${search}%`
                            }
                        },
                        {
                            name: {
                                [Op.iLike]: `%${search}%`
                            }
                        }
                        ]
                    },
                    include: [
                        {
                            model: City,
                            as: 'city',
                            attributes: ['name']
                        },
                        {
                            model: Country,
                            as: 'country',
                            attributes: ['name']
                        }
                    ],
                    order: [
                        [sort, type]
                    ],
                    limit: limit,
                    offset: start
                })
                let count = dataAirport.count;
                let pagination ={}
                pagination.totalRows = count;
                pagination.totalPages = Math.ceil(count/limit);
                pagination.thisPageRows = dataAirport.rows.length;
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
                    message: 'get all airport success',
                    pagination,
                    data: dataAirport.rows
                });
            }
        } catch (err) {
            next(err)
        }
    },

    show: async (req, res, next) => {
        try {
            const {
                id
            } = req.params;

            const airport = await Airport.findOne({
                where: {
                    id: id
                }
            });
            if (!airport) {
                return res.status(400).json({
                    status: false,
                    message: 'airport not found',
                    data: null
                });
            }
            const city = await City.findOne({where: {id: airport.city_id}});
            const country = await Country.findOne({where: {id: airport.country_id}});
            return res.status(200).json({
                status: true,
                message: 'get airport success',
                data: {
                    id: airport.id,
                    code: airport.code,
                    name: airport.name,
                    city_id: airport.city_id,
                    city_name: city.name,
                    country_id: airport.country_id,
                    country_name: country.name,
                    maps_link: airport.maps_link,
                    maps_embed: airport.maps_embed,
                }
            });
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const {
                code,
                name,
                city_id,
                country_id,
                maps_link,
                maps_embed
            } = req.body

            const body = req.body

            const validate = v.validate(body, schema.airport.createAirport)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const airport = await Airport.findOne({
                where: {
                    code
                }
            })

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
            const {
                id
            } = req.params;
            let {
                code,
                name,
                city_id,
                country_id,
                maps_link,
                maps_embed
            } = req.body;

            const body = req.body

            const validate = v.validate(body, schema.airport.createAirport)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const dataAirport = await Airport.findOne({
                where: {
                    id: id
                }
            });

            if (!dataAirport) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found',
                    data: null
                })
            }

            if (!code) code = dataAirport.code;
            if (!name) name = dataAirport.name;
            if (!city_id) city_id = dataAirport.city_id;
            if (!country_id) country_id = dataAirport.country_id;
            if (!maps_link) maps_link = dataAirport.maps_link;
            if (!maps_embed) maps_embed = dataAirport.maps_embed;

            const updated = await Airport.update({
                code,
                name,
                city_id,
                country_id,
                maps_link,
                maps_embed
            }, {
                where: {
                    id: id
                }
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
            const {
                id
            } = req.params

            const dataAirport = await Airport.findOne({
                where: {
                    id: id
                }
            })

            if (!dataAirport) {
                return res.status(409).json({
                    status: false,
                    message: 'data not found!',
                    data: null
                })
            }

            const deleted = await Airport.destroy({
                where: {
                    id: id
                }
            })

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