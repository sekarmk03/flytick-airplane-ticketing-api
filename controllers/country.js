const {
    Country
} = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { code, name } = req.body;

            const exist = await Country.findOne({where: {code: code}});
            if(exist) {
                return res.status(409).json({
                    status: false,
                    message: 'country already exist',
                    data: null
                });
            }

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
    index: async (req, res, next) => {
        try {
            const countries = await Country.findAll({raw: true});

            return res.status(200).json({
                status: true,
                message: 'get all countries success',
                data: countries
            });

        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const { countryId } = req.params;

            const country = await Country.findOne({ where: { id: countryId } });
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
                countryId
            } = req.params;

            let {
                code,
                name
            } = req.body;

            const country = await Country.findOne({
                where: {
                    id: countryId
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

            const updated = await country.update({
                code: code,
                name: name
            }, {
                where: {id: countryId}
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
            const {countryId} = req.params;

            const country = await Country.findOne({where: {id: countryId}});
            if(!country) {
                return res.status(400).json({
                    status: false,
                    message: 'country not found',
                    data: null
                });
            }

            const deleted = await Country.destroy({where: {id: countryId}});
            
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