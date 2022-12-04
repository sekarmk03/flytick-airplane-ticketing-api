const express = require('express');
const router = express.Router();
const c = require('../controllers/transaction');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all transaction
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get all transaction sorted
router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail user
router.get('/:transactionId', authorize([roles.admin, roles.superadmin]), c.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);

module.exports = router;