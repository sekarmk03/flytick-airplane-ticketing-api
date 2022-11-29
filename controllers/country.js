const {
    Country
} = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const {
                code,
                name
            } = req.body;

            const country = await Country.create({
                code: code,
                name: name
            })

            return res.status(201).json({
                status: true,
                message: 'country created',
                data: country
            });

        } catch (err) {
            next(err);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const countries = await Country.findAll();

            if (!countries) {
                return res.status(400).json({
                    status: false,
                    message: 'country not found',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'get all countries success',
                data: countries
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

            const country = await Country.findOne({
                where: {
                    id: id
                }
            });

            if(!country) {
                return res.status(400).json({
                    status: false,
                    message: 'country not found',
                    data: null
                });
            };

            return res.status(200).json({
                status: true,
                message: 'get detail of country success',
                data: country
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
                name
            } = req.body;

            const country = await Country.findOne({
                where: {
                    id: id
                }
            });

            if(!country) {
                return res.status(400).json({
                    status: false,
                    message: 'country not found',
                    data: null
                });
            };

            if(!code) code = country.code;
            if(!name) name = country.name;

            const updated = await country.update({
                code: code,
                name: name
            });

            const codeExist = await Country.findOne({
                where: {code: updated.code}
            })

            const nameExist = await Country.findOne({
                where: {name: updated.name}
            })

            if(codeExist || nameExist){
                return res.status(400).json({
                    status: true,
                    message: 'code or name is already exist',
                    data: null
                });
            }

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

            const country = await Country.findOne({where: {id: id}});
            if(!country) {
                return res.status(400).json({
                    status: false,
                    message: 'country not found',
                    data: null
                });
            }

            const deleted = await Country.destroy({where: {id: country.id}});
            
            return res.status(201).json({
                status: true,
                message: 'delete country success',
                data: deleted
            });
        } catch (err) {
            next(err);
        }
    },
}