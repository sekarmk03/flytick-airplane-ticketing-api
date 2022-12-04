const express = require('express');
const router = express.Router();
const c = require('../controllers/country');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all country
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail country
router.get('/:countryId', authorize([roles.admin, roles.superadmin]), c.show);
// create country
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update country
router.put('/:countryId', authorize([roles.admin, roles.superadmin]), c.update);
// delete country
router.delete('/:countryId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;