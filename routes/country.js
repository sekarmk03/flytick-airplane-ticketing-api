const express = require('express');
const router = express.Router();
const c = require('../controllers/country');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all country
router.get('/', authorize(), c.index);
// get detail country
router.get('/:id', authorize(), c.show);
// create country
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update country
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
// delete country
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;