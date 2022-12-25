const express = require('express');
const router = express.Router();
const c = require('../controllers/ticket');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all ticket
router.get('/', authorize(), c.index);
// get detail ticket
router.get('/:id', authorize(), c.show);
// create ticket
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update ticket
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
// scan ticket
// router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
router.put('/verify/:id', authorize([roles.admin, roles.superadmin]), c.update_checked_in);
// delete ticket
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;