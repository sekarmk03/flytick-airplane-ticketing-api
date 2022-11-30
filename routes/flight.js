const express = require('express');
const router = express.Router();
const flight_c = require('../controllers/flight');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all flight
router.get('/', flight_c.getAll);
// get detail flight
router.get('/:id', flight_c.getDetail);
// create flight
router.post('/create', authorize([roles.admin, roles.superadmin]), flight_c.create);
// update flight
router.put('/:id', authorize([roles.admin, roles.superadmin]), flight_c.update);
// delete flight
router.delete('/:id', authorize([roles.admin, roles.superadmin]), flight_c.delete);

module.exports = router;