const express = require('express');
const router = express.Router();
const c = require('../controllers');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all biodata
router.get('/', authorize([roles.admin, roles.superadmin]), c.biodata.index);
// get detail biodata
router.get('/:biodataId', authorize([roles.admin, roles.superadmin]), c.biodata.show);
// create biodata
router.post('/', authorize([roles.admin, roles.superadmin]), c.biodata.create);
// update biodata
router.put('/:biodataId', authorize([roles.admin, roles.superadmin]), c.biodata.update);
// delete biodata
router.delete('/:biodataId', authorize([roles.admin, roles.superadmin]), c.biodata.delete);

module.exports = router;