const jwt = require('jsonwebtoken');
const googleOauth2 = require('../utils/google');
const facebookOauth2 = require('../utils/facebook');
const loginType = require('../utils/login_type');
const { User, Image, Biodata } = require('../models');
const { JWT_SECRET_KEY } = process.env;
const roles = require('../utils/roles');

module.exports = {
    google: async (req, res, next) => {
        try {
            const access_token = req.body.access_token;
            console.log(req.body);
            console.log(access_token);

            await googleOauth2.setCredentials(access_token);

            const userInfo = await googleOauth2.getUserData();

            let user = await User.findOne({where: {email: userInfo.data.email}});

            if(!user) {
                const newAvatar = await Image.create({
                    filename: userInfo.data.email,
                    imagekit_id: 'oauth-image',
                    imagekit_url: userInfo.data.picture,
                    imagekit_path: ''
                });

                user = await User.create({
                    name: userInfo.data.name,
                    email: userInfo.data.email,
                    password: '',
                    avatar_id: newAvatar.id,
                    role: roles.user,
                    balance: 50000000,
                    biodata_id: 0,
                    login_type: loginType.google
                });

                const newBiodata = await Biodata.create({
                    email: user.email,
                    name: user.name,
                    nik: null,
                    birth_place: null,
                    birth_date: null,
                    telp: null,
                    nationality: null,
                    no_passport: null,
                    issue_date: null,
                    expire_date: null
                });
    
                await User.update({
                    biodata_id: newBiodata.id
                }, {
                    where: { id: user.id }
                });
            }

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                avatar_id: user.avatar_id,
                role: user.role,
                balance: user.balance,
                biodata_id: user.biodata_id,
                login_type: user.login_type
            };

            const token = jwt.sign(payload, JWT_SECRET_KEY);
            
            req.user = jwt.verify(token, JWT_SECRET_KEY);

            return res.status(201).json({
                status: true,
                message: 'google login success',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar_id: user.avatar_id,
                    role: user.role,
                    balance: user.balance,
                    biodata_id: user.biodata_id,
                    login_type: user.login_type,
                    token: token
                }
            });
        } catch (err) {
            next(err);
        }
    },

    facebook: async (req, res, next) => {
        try {
            const code = req.query.code;
    
            if(!code) {
                const url = facebookOauth2.generateAuthURL();
                return res.redirect(url);
            }
    
            const access_token = await facebookOauth2.getAccessToken(code);
    
            const userInfo = await facebookOauth2.getUserInfo(access_token);
    
            let user = await User.findOne({where: {email: userInfo.email}});
    
            if(!user) {
                const newAvatar = await Image.create({
                    filename: userInfo.email,
                    imagekit_id: 'oauth-image',
                    imagekit_url: userInfo.picture.data.url,
                    imagekit_path: ''
                });

                user = await User.create({
                    name: [userInfo.first_name, userInfo.last_name].join(' '),
                    email: userInfo.email,
                    avatar_id: newAvatar.id,
                    role: roles.user,
                    balance: 10000000,
                    biodata_id: 0,
                    login_type: loginType.facebook
                });
            }
    
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                avatar_id: user.avatar_id,
                role: user.role,
                balance: user.balance,
                biodata_id: user.biodata_id,
                login_type: user.login_type
            };
    
            const token = jwt.sign(payload, JWT_SECRET_KEY);
    
            req.user = jwt.verify(token, JWT_SECRET_KEY);
    
            return res.status(201).json({
                status: true,
                message: 'facebook login success',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar_id: user.avatar_id,
                    role: user.role,
                    balance: user.balance,
                    biodata_id: user.biodata_id,
                    login_type: user.login_type,
                    token: token
                }
            });
        } catch (err) {
            next(err);
        }
    },
}