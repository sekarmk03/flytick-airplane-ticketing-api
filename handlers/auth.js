const bcrypt = require('bcrypt');
const roles = require('../utils/roles');
const { User, Biodata } = require('../models');
const loginType = require('../utils/login_type');
const schema = require('../schema')
const validator = require('fastest-validator')
const v = new validator
const mail = require('../utils/mailer')

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password, role = roles.user } = req.body;

            const exist = await User.findOne({ where: { email: email } });
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'user already exist',
                    data: null
                });
            }

            const body = req.body

            const validate = v.validate(body, schema.auth.register) //password min:8

            if (validate.length) {
                return res.status(409).json(validate)
            }

            const hashed = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name: name,
                email: email,
                password: hashed,
                avatar_id: 1, // default avatar
                role: role,
                balance: 50000000,
                biodata_id: 0, // update biodata id when user complete their profile
                login_type: loginType.basic
            });

            const newBiodata = await Biodata.create({
                email: newUser.email,
                name: newUser.name,
                nik: '',
                birth_place: '',
                birth_date: '',
                telp: '',
                nationality: '',
                no_passport: '',
                issue_date: '',
                expire_date: ''
            });

            await User.update({
                biodata_id: newBiodata.id
            }, {
                where: { id: newUser.id }
            });

            // const htmlEmail = await mail.getHtml('welcome.ejs', { name })

            // const sendEmail = await mail.sendMail(email, 'Welcome to flytick!', htmlEmail)

            res.status(201).json({
                status: true,
                message: 'user registered',
                data: newUser
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const user = await User.authenticate(req.body);
            const accessToken = user.generateToken();

            res.status(200).json({
                status: true,
                message: 'success login',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar_id: user.avatar_id,
                    role: user.role,
                    balance: user.balance,
                    biodata_id: user.biodata_id,
                    login_type: user.login_type,
                    token: accessToken
                }
            });
        } catch (err) {
            next(err);
        }
    },

    whoami: (req, res, next) => {
        try {
            const currentUser = req.user;

            return res.status(200).json({
                status: true,
                message: 'user found',
                data: {
                    id: currentUser.id,
                    name: currentUser.name,
                    email: currentUser.email,
                    avatar_id: currentUser.avatar_id,
                    role: currentUser.role,
                    balance: currentUser.balance,
                    biodata_id: currentUser.biodata_id,
                    login_type: currentUser.login_type
                }
            });
        } catch (err) {
            next(err);
        }
    },

}