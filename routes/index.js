const express = require('express');
const router = express.Router();
const auth = require('./auth');
const oauth = require('./oauth');
const user = require('./user');
const flight = require('./flight');
const country = require('./country');
const city = require('./city');
const airport = require('./airport');

router.use('/auth', auth);
router.use('/oauth', oauth);
router.use('/users', user);
router.use('/flight', flight);
router.use('/country', country);
router.use('/city', city);
router.use('/airport', airport);

module.exports = router;
