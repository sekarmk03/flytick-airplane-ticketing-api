const express = require('express');
const router = express.Router();
const h = require('../handlers');
const restrict = require('../middleware/restrict');

router.post('/register', h.auth.register);
router.post('/login', h.auth.login);
router.get('/whoami', restrict, h.auth.whoami);

module.exports = router;