const express = require('express');
const router = express.Router();
const c = require('../controllers/transaction');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all transaction
router.get('/', authorize(), c.index);
// get all transaction sorted
// router.get('/?sort=&type=&search=', authorize(), c.index);
// get detail user
router.get('/:id', authorize(), c.show);
// create transaction
router.post('/', authorize(), c.create);

module.exports = router;