const express = require('express');
const router = express.Router();
const c = require('../controllers/biodata');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all biodata
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail biodata
router.get('/:id', authorize([roles.admin, roles.superadmin]), c.show);
// create biodata
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update biodata
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
// delete biodata
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;