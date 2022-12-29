const express = require('express');
const router = express.Router();
const c = require('../controllers/summary');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

router.get('/country', authorize([roles.admin, roles.superadmin]), c.country);


module.exports = router;