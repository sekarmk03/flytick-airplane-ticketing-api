const jwt = require('jsonwebtoken');
const googleOauth2 = require('../utils/google');
const { google } = require('../utils/google-config');
const facebookOauth2 = require('../utils/facebook');
const loginType = require('../utils/login_type');
const { User, Image, Biodata } = require('../models');
const { JWT_SECRET_KEY } = process.env;
const roles = require('../utils/roles');
const mail = require('../utils/mailer');

module.exports = {
    google: async (req, res, next) => {
        try {
            const {access_token} = req.body;

            if(!access_token) {
                return res.status(400).json({
                    status: 'true',
                    message: 'access token required',
                    data: null
                });
            }

            const ticket = await google.verifyIdToken({
                idToken: access_token,
                audience: process.env.GOOGLE_CLIENT_ID
            });

            const userInfo = ticket.getPayload();
            const user = await User.findOne({where: {email: userInfo.email}});

            // await googleOauth2.setCredentials(access_token);

            // const userInfo = await googleOauth2.getUserData();

            // let user = await User.findOne({where: {email: userInfo.data.email}});

            if(!user) {
                const newAvatar = await Image.create({
                    filename: userInfo.email,
                    imagekit_id: 'oauth-image',
                    imagekit_url: userInfo.picture,
                    imagekit_path: ''
                });

                user = await User.create({
                    name: userInfo.name,
                    email: userInfo.email,
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
                    where: { id: user.id }
                });

                const htmlEmail = await mail.getHtml('welcome.ejs', { name })

                const sendEmail = await mail.sendMail(email, 'Welcome to flytick!', htmlEmail)

                // create notification
                await Notification.create({
                    user_id: newUser.id,
                    topic: 'account',
                    title: 'Account Created!',
                    message: 'Welcome to FlyTick App! Here you can book ticket for your travel plan easily. Fly The Best Part Of The Day.',
                    is_read: false
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