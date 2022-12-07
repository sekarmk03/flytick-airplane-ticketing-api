const express = require('express');
const router = express.Router();
const auth = require('./auth');
const oauth = require('./oauth');
const user = require('./user');
const flight = require('./flight');
const country = require('./country');
const biodata = require('./biodata');
const notif = require('./notification');
const city = require('./city');
const airport = require('./airport');
const image = require('./image');
const schedule = require('./schedule');
const ticket = require('./ticket');

router.use('/auth', auth);
router.use('/oauth', oauth);
router.use('/user', user);
router.use('/biodata', biodata);
router.use('/flight', flight);
router.use('/country', country);
router.use('/notification', notif);
router.use('/city', city);
router.use('/airport', airport);
router.use('/image', image);
router.use('/schedule', schedule);
router.use('/ticket', ticket);

module.exports = router;
