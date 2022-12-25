const express = require('express');
const router = express.Router();
const c = require('../controllers/biodata');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all biodata
router.get('/', authorize(), c.index);
// get detail biodata
router.get('/:id', authorize(), c.show);
// create biodata
router.post('/', authorize(), c.create);
// update biodata
router.put('/:id', authorize(), c.update);
// delete biodata
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;