const { Biodata } = require('../models');

module.exports = {
    // daftar semua penumpang
    index: async (req, res, next) => {
        try {
            try {
                const biodata = await Biodata.findAll({raw: true});
                return res.status(200).json({
                    status: true,
                    message: 'get all biodata success',
                    data: biodata
                })
            } catch (err) {
                next(err);
            }
        } catch (err) {
            next(err);
        }
    },

    // keknya ini dipake buat tiket
    show: async (req, res, next) => {
        try {
            const {biodataId} = req.params;
            const biodata = await Biodata.findOne({where: {id: biodataId}});
            if(!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get biodata success',
                data: biodata.get()
            });
        } catch (err) {
            next(err);
        }
    },

    // if user buy ticket for other people
    create: async (req, res, next) => {
        try {
            const { email, name, nik, birth_place, birth_date, telp, nationality, no_passport = null, issue_date = null, expire_date = null} = req.body;

            const exist = await Biodata.findOne({where: {email: email}});
            if(exist) {
                return res.status(409).json({
                    status: false,
                    message: 'biodata already exist',
                    data: null
                });
            }

            const newBiodata = await Biodata.create({
                email: email,
                name: name,
                nik: nik,
                birth_place: birth_place,
                birth_date: birth_date,
                telp: telp,
                nationality: nationality,
                no_passport: no_passport,
                issue_date: issue_date,
                expire_date: expire_date
            });

            res.status(201).json({
                status: true,
                message: 'biodata created',
                data: newBiodata
            });
        } catch (err) {
            next(err);
        }
    },

    // update data penumpang via ticket
    update: async (req, res, next) => {
        try {
            const {biodataId} = req.params;
            let { email, name, nik, birth_place, birth_date, telp, nationality, no_passport = null, issue_date = null, expire_date = null } = req.body;

            // const userData = await User.findOne({where: {email: email}});
            // const biodata = await Biodata.findOne({where: {id: userData.biodata_id}});
            const biodata = await Biodata.findOne({where: {id: biodataId}});
            if(!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }

            if(!email) email = biodata.email;
            if(!name) name = biodata.name;
            if(!nik) nik = biodata.nik;
            if(!birth_place) birth_place = biodata.birth_place;
            if(!birth_date) birth_date = biodata.birth_date;
            if(!telp) telp = biodata.telp;
            if(!nationality) nationality = biodata.nationality;
            if(!no_passport) no_passport = biodata.no_passport;
            if(!issue_date) issue_date = biodata.issue_date;
            if(!expire_date) expire_date = biodata.expire_date;

            const isUpdated = await Biodata.update({
                email: email,
                name: name,
                nik: nik,
                birth_place: birth_place,
                birth_date: birth_date,
                telp: telp,
                nationality: nationality,
                no_passport: no_passport,
                issue_date: issue_date,
                expire_date: expire_date,
            }, {
                where: {id: biodataId}
                // where: {id: userData.biodata_id}
            });

            return res.status(200).json({
                status: true,
                message: 'update user success',
                data: isUpdated
            });
        } catch (err) {
            next(err);
        }
    },

    // ini juga keknya ga dipake
    delete: async (req, res, next) => {
        try {
            const {biodataId} = req.params;

            const biodata = await Biodata.findOne({where: {id: biodataId}});
            if(!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }

            const isDeleted = await Biodata.destroy({
                where: {id: biodataId}
            });

            return res.status(201).json({
                status: true,
                message: 'delete biodata success',
                data: isDeleted
            });
        } catch (err) {
            next(err);
        }
    }

}