const {
    User,
    Biodata,
    Image,
    Country,
    Notification
} = require('../models');
const { JWT_SECRET_KEY } = process.env
const bcrypt = require('bcrypt');
const roles = require('../utils/roles');
const loginType = require('../utils/login_type');
const imagekit = require('../utils/imagekit');
const { Op } = require('sequelize')
const c_biodata = require('./biodata');
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator
const jwt = require('jsonwebtoken')
const mail = require('../utils/mailer')

module.exports = {
    index: async (req, res, next) => {
        try {
            let {
                sort = "id", type = "ASC", search = "", page = "1", limit = "10"
            } = req.query;
            page = parseInt(page);
            limit = parseInt(limit)
            let start = 0 + (page - 1) * limit;
            let end = page * limit;
            let usersData;
            if (req.user.role == 'admin' || req.user.role == 'superadmin') {
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
                pagination.totalPages = Math.ceil(count / limit);
                pagination.thisPageRows = usersData.rows.length;
                if (end < count) {
                    pagination.next = {
                        page: page + 1
                    }
                }
                if (start > 0) {
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
                    where: { id: req.user.id }
                });

                return res.status(200).json({
                    status: true,
                    message: 'get user success',
                    data: usersData
                })
            }

        } catch (err) {
            next(err)
        }
    },

    show: async (req, res, next) => {
        try {
            let userId;
            if (req.user.role == 'admin' || req.user.role == 'superadmin') {
                const { id } = req.params;
                userId = id;
            } else if (req.user.role == 'user') {
                const { id } = req.user;
                if (!id) {
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
            const country = await Country.findOne({ where: { id: userData.biodata.nationality } })
            if (!country) userData.biodata.nationality = '';
            else userData.biodata.nationality = country.name;

            return res.status(200).json({
                status: true,
                message: 'get user success',
                data: userData.get()
            });
        } catch (err) {
            next(err)
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

            let image;
            if (!req.file) {
                image = 1;
            } else {
                image = req.file.buffer.toString('base64');
    
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

                image = newAvatar.id;
            }

            const hashed = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name: name,
                email: email,
                password: hashed,
                avatar_id: image,
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

            // create notification
            await Notification.create({
                user_id: req.user.id,
                topic: 'account',
                title: 'Account Created!',
                message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day.',
                is_read: false
            });

            return res.status(201).json({
                status: true,
                message: 'user created',
                data: newUser
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
                name,
                role,
                balance = null,
            } = req.body;

            const body = req.body
            if(balance != null) {
                req.body.balance = parseInt(balance);
                balance = req.body.balance;
            }

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

            req.body.email = userData.email;

            const biodata = await Biodata.findOne({ where: { email: userData.email } });
            if (!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }

            let image;
            if (!req.file) {
                image = userData.avatar_id;
            } else {
                image = req.file.buffer.toString('base64');
                const imageData = await Image.findOne({ where: { id: userData.avatar_id } });

                if (imageData.imagekit_id != 'oauth-image' && imageData.imagekit_id != 'default-image') {
                    await imagekit.deleteFile(imageData.imagekit_id);

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

                    image = userData.avatar_id;
                } else {
                    const uploadNewImage = await imagekit.upload({
                        file: image,
                        fileName: req.file.originalname
                    });

                    const newImage = await Image.create({
                        filename: uploadNewImage.name,
                        imagekit_id: uploadNewImage.fileId,
                        imagekit_url: uploadNewImage.url,
                        imagekit_path: uploadNewImage.filePath
                    });

                    await User.update({
                        avatar_id: newImage.id
                    }, {
                        where: {id: userData.id}
                    });

                    image = newImage.id;
                }
            }

            if (!name) name = userData.name;
            if (!role) role = userData.role;
            if (!balance) balance = userData.balance;

            const isUpdatedUser = await User.update({
                name: name,
                avatar_id: image,
                role: role,
                balance: balance
            }, {
                where: { id: id }
            });

            const isUpdatedBiodata = await c_biodata.update(req, res, next);

            // create notification
            await Notification.create({
                user_id: req.user.id,
                topic: 'account',
                title: 'Profile has been updated!',
                message: 'Your profile has been successfully updated. Keep your biodata always up-to-date.',
                is_read: false
            });

            return res.status(200).json({
                status: true,
                message: 'update user success',
                data: {
                    user: isUpdatedUser,
                    biodata: isUpdatedBiodata
                }
            });
        } catch (err) {
            next(err)
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
            next(err)
        }
    },

    // forgot password view
    forgotPasswordView: (req, res) => {
        return res.render('forgotPasswordView', { message: null })
    },

    // forgot password
    forgotPassword: async (req, res, next) => {
        try {
            const { email } = req.body

            const userData = await User.findOne({ where: { email } })

            if (!userData) {
                return res.status(401).json({
                    status: false,
                    message: 'user not found!',
                    data: null
                })
            }

            if (userData) {
                const payload = { user_id: userData.id }
                const token = jwt.sign(payload, JWT_SECRET_KEY)
                const link = `http://localhost:3000/api/user/reset-password?token=${token}`

                const htmlEmail = await mail.getHtml('forgot_password.ejs', { link: link, name: userData.name })
                const sendEmail = await mail.sendMail(userData.email, 'Reset Your Password', htmlEmail)
            }

            return res.render('forgotPasswordView', { message: 'check your email for reset link!' })
        } catch (err) {
            next(err)
        }
    },

    // reset password view
    resetPasswordView: (req, res) => {
        const { token } = req.query
        return res.render('resetPasswordView.ejs', { message: null, token })
    },

    // reset password
    resetPassword: async (req, res, next) => {
        try {
            const { token } = req.query;
            const { new_password, confirm_new_password } = req.body;

            if (!token) {
                return res.render('resetPasswordView.ejs', { message: 'invalid token', token })
            }
            if (new_password != confirm_new_password) {
                return res.render('auth/reset-password', { message: 'password doesn\'t match!', token });
            }

            const payload = jwt.verify(token, JWT_SECRET_KEY);

            const encryptedPassword = await bcrypt.hash(new_password, 10);

            const userUpdate = await User.update({
                password: encryptedPassword
            }, {
                where: { id: payload.user_id }
            })

            return res.status(200).json({
                status: true,
                message: 'reset password success!',
                data: null
            })
        } catch (err) {
            next(err)
        }
    }
}