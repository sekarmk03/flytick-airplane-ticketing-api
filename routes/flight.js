const express = require('express');
const router = express.Router();
const c = require('../controllers/flight');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all flight
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail flight
router.get('/:flightId', authorize([roles.admin, roles.superadmin]), c.show);
// create flight
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update flight
router.put('/:flightId', authorize([roles.admin, roles.superadmin]), c.update);
// delete flight
router.delete('/:flightId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;