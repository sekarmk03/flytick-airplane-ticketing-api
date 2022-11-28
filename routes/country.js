const express = require('express');
const router = express.Router();
const country_c = require('../controllers/country');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all country
router.get('/', country_c.getAll);
// get detail country
router.get('/:id', country_c.getDetail);
// create country
router.post('/create', /*authorize([roles.admin, roles.superadmin]),*/ country_c.create);
// update country
router.put('/:id', /*authorize([roles.admin, roles.superadmin]),*/ country_c.update);
// delete country
router.delete('/:id', /*authorize([roles.admin, roles.superadmin]),*/ country_c.delete);

module.exports = router;