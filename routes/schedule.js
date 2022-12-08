const express = require('express');
const router = express.Router();
const c = require('../controllers/schedule');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all schedule
router.get('/', authorize(), c.index);
// get detail schedule
router.get('/:id', authorize(), c.show);
// create schedule
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update schedule
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
// delete schedule
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;