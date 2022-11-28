const express = require('express');
const router = express.Router();
const auth = require('./auth');
const oauth = require('./oauth');
const user = require('./user');

router.use('/auth', auth);
router.use('/oauth', oauth);
router.use('/users', user);

module.exports = router;
