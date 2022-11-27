const { User, Image } = require('../models');
const bcrypt = require('bcrypt');
const roles = require('../utils/roles');
const loginType = require('../utils/login_type');
const imagekit = require('../utils/imagekit');

module.exports = {
    index: async (req, res, next) => {
        try {
            const usersData = await User.findAll({raw: true});
            return res.status(200).json({
                status: true,
                message: 'get all user success',
                data: usersData
            })
        } catch (err) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const userData = await User.findOne({where: {id: userId}});
            if(!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }
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
            const { name, email, password, role = roles.user } = req.body;
            const image = req.file.buffer.toString('base64');
            
            const exist = await User.findOne({where: {email: email}});
            if(exist) {
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
                balance: 10000000,
                biodata_id: 0, // update biodata id when user complete their profile
                login_type: loginType.basic
            });

            res.status(201).json({
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
            const { userId } = req.params;
            let { name, email, role, balance } = req.body;
            let image = req.file.buffer.toString('base64');

            const userData = await User.findOne({where: {id: userId}});
            if(!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }

            const imageData = await Image.findOne({where: {id: userData.avatar_id}});

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
            });

            if(!name) name = userData.name;
            if(!email) email = userData.email;
            if(!role) role = userData.role;
            if(!balance) balance = userData.balance;

            const isUpdated = await User.update({
                name: name,
                email: email,
                avatar: image,
                role: role,
            }, {
                where: {id: userId}
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

    delete: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const userData = await User.findOne({where: {id: userId}});
            if(!userData) {
                return res.status(400).json({
                    status: false,
                    message: 'user not found',
                    data: null
                });
            }

            const imageData = await Image.findOne({where: {id: userData.avatar_id}});

            await imagekit.deleteFile(imageData.imagekit_id);

            await Image.destroy({where: {id: userData.avatar_id}});

            const isDeleted = await User.destroy({
                where: {id: userId}
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