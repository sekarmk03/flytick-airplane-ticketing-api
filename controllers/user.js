const {
    User,
    Biodata,
    Image,
    Country
} = require('../models');
const bcrypt = require('bcrypt');
const roles = require('../utils/roles');
const loginType = require('../utils/login_type');
const imagekit = require('../utils/imagekit');
const { Op } = require('sequelize')
const c_biodata = require('./biodata');
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator

module.exports = {
    index: async (req, res, next) => {
        try {
            let {
                sort = "id", type = "ASC", search = "", page = "1", limit = "10"
            } = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page -1) * limit;
            let end = page * limit;
            let usersData;
            if(req.user.role == 'admin' || req.user.role == 'superadmin') {
                usersData = await User.findAndCountAll({
                    order: [
                        [sort, type]
                    ],
                    where: {
                        [Op.or]: [{
                                name: {
                                    [Op.iLike]: `%${search}%`
                                }
                            },
                            {
                                email: {
                                    [Op.iLike]: `%${search}%`
                                }
    
                            }
                        ]
                    },
                    include: [
                        {
                            model: Biodata,
                            as: 'biodata'
                        },
                        {
                            model: Image,
                            as: 'avatar',
                            attributes: ['filename', 'imagekit_url']
                        }
                    ],
                    limit: limit,
                    offset: start
                });
                
                let count = usersData.count;
                let pagination = {}
                pagination.totalRows = count;
                pagination.totalPages = Math.ceil(count/limit);
                pagination.thisPageRows = usersData.rows.length;
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
                    message: 'get all user success',
                    pagination,
                    data: usersData.rows
                })
            } else if (req.user.role == 'user') {
                usersData = await User.findOne({
                    where: {id: req.user.id}
                });

                return res.status(200).json({
                    status: true,
                    message: 'get user success',
                    data: usersData
                })
            }
            
        } catch (err) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            let userId;
            if(req.user.role == 'admin' || req.user.role == 'superadmin') {
                const { id } = req.params;
                userId = id;
            } else if (req.user.role == 'user') {
                const { id } = req.user;
                if(!id) {
                    return res.status(404).json({
                        status: false,
                        message: 'login first',
                        data: null
                    });
                }
                userId = id;
            }

            const userData = await User.findOne({
                where: { id: userId },
                include: [
                    {
                        model: Biodata,
                        as: 'biodata'
                    },
                    {
                        model: Image,
                        as: 'avatar',
                        attributes: ['filename', 'imagekit_url']
                    }
                ]
            });
            if (!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }

            // let data = userData.get();
            const country = await Country.findOne({where: {id: userData.biodata.nationality}})
            if(!country) userData.biodata.nationality = '';
            else userData.biodata.nationality = country.name;
            
            return res.status(200).json({
                status: true,
                message: 'get user success',
                data: userData.get()
            });
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const {
                name,
                email,
                password,
                role = roles.user,
                balance = 50000000
            } = req.body;
            const image = req.file.buffer.toString('base64');

            const body = req.body
            req.body.balance = parseInt(balance);

            const validate = v.validate(body, schema.user.createUser)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const exist = await User.findOne({ where: { email: email } });
            if (exist) {
                return res.status(409).json({
                    status: false,
                    message: 'user already exist',
                    data: null
                });
            }

            const uploadImage = await imagekit.upload({
                file: image,
                fileName: req.file.originalname
            });

            const newAvatar = await Image.create({
                filename: uploadImage.name,
                imagekit_id: uploadImage.fileId,
                imagekit_url: uploadImage.url,
                imagekit_path: uploadImage.filePath
            });

            const hashed = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name: name,
                email: email,
                password: hashed,
                avatar_id: newAvatar.id,
                role: role,
                balance: balance,
                biodata_id: 0, // update biodata id when user complete their profile
                login_type: loginType.basic
            });

            const newBiodata = await Biodata.create({
                email: newUser.email,
                name: newUser.name,
                nik: '',
                birth_place: '',
                birth_date: new Date(),
                telp: '',
                nationality: 0,
                no_passport: '',
                issue_date: null,
                expire_date: null
            });

            await User.update({
                biodata_id: newBiodata.id
            }, {
                where: { id: newUser.id }
            });

            return res.status(201).json({
                status: true,
                message: 'user created',
                data: newUser
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
                name,
                email,
                role,
                balance
            } = req.body;
            let image = req.file.buffer.toString('base64');

            const body = req.body
            req.body.balance = parseInt(balance);

            const validate = v.validate(body, schema.user.updateUser)

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const userData = await User.findOne({ where: { id: id } });
            if (!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }

            const biodata = await Biodata.findOne({ where: { email: userData.email } });
            if (!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }

            const imageData = await Image.findOne({ where: { id: userData.avatar_id } });

            if (imageData.imagekit_id != 'oauth-image' && imageData.imagekit_id != 'default-image') {
                await imagekit.deleteFile(imageData.imagekit_id);
            }

            const uploadNewImage = await imagekit.upload({
                file: image,
                fileName: req.file.originalname
            });

            await Image.update({
                imagekit_id: uploadNewImage.fileId,
                imagekit_url: uploadNewImage.url,
                imagekit_path: uploadNewImage.filePath
            }, {
                where: { id: imageData.id }
            });

            if (!name) name = userData.name;
            if (!email) email = userData.email;
            if (!role) role = userData.role;
            if (!balance) balance = userData.balance;

            const isUpdatedUser = await User.update({
                name: name,
                email: email,
                avatar: image,
                role: role,
            }, {
                where: { id: id }
            });

            const isUpdatedBiodata = await c_biodata.update(req, res, next);

            return res.status(200).json({
                status: true,
                message: 'update user success',
                data: {
                    user: isUpdatedUser,
                    biodata: isUpdatedBiodata
                }
            });
        } catch (err) {
            next(err);
        }
    },

    // admin
    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            const userData = await User.findOne({ where: { id: id } });
            if (!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }

            const imageData = await Image.findOne({ where: { id: userData.avatar_id } });

            if (imageData.imagekit_id != 'oauth-image' && imageData.imagekit_id != 'default-image') {
                await imagekit.deleteFile(imageData.imagekit_id);
            }

            if (userData.avatar_id != 1) {
                await Image.destroy({ where: { id: userData.avatar_id } });
            }

            if (userData.biodata_id != 0) {
                await Biodata.destroy({ where: { id: userData.biodata_id } });
            }

            const isDeleted = await User.destroy({
                where: { id: id }
            });

            return res.status(201).json({
                status: true,
                message: 'delete user success',
                data: isDeleted
            });
        } catch (err) {
            next(err);
        }
    },

    // changePassword: 
}