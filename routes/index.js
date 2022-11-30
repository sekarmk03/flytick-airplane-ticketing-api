const express = require('express');
const router = express.Router();
const auth = require('./auth');
const oauth = require('./oauth');
const user = require('./user');
const flight = require('./flight');
const country = require('./country');
const biodata = require('./biodata');
const notif = require('./notification')
const city = require('./city');
const airport = require('./airport');

router.use('/auth', auth);
router.use('/oauth', oauth);
router.use('/users', user);
router.use('/biodata', biodata);
router.use('/flight', flight);
router.use('/country', country);
router.use('/notification', notif);
router.use('/city', city);
router.use('/airport', airport);

module.exports = router;
