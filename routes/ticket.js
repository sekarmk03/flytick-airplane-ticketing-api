const express = require('express');
const router = express.Router();
const c = require('../controllers/ticket');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all ticket
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get all ticket
router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail ticket
router.get('/:ticketId', authorize([roles.admin, roles.superadmin]), c.show);
// create ticket
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update ticket
router.put('/:ticketId', authorize([roles.admin, roles.superadmin]), c.update);
// scan ticket
// router.put('/:ticketId', authorize([roles.admin, roles.superadmin]), c.update);
router.put('/:ticketId', c.update_checked_in);
// delete ticket
router.delete('/:ticketId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;