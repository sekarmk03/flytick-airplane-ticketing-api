const express = require('express');
const router = express.Router();
const c = require('../controllers/flight');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all flight
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail flight
router.get('/:id', authorize([roles.admin, roles.superadmin]), c.show);
// create flight
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update flight
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
// delete flight
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;