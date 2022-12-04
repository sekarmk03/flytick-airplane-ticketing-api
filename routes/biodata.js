const express = require('express');
const router = express.Router();
const c = require('../controllers/biodata');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all biodata
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get all biodata sorted
router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail biodata
router.get('/:biodataId', authorize([roles.admin, roles.superadmin]), c.show);
// create biodata
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update biodata
router.put('/:biodataId', authorize([roles.admin, roles.superadmin]), c.update);
// delete biodata
router.delete('/:biodataId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;