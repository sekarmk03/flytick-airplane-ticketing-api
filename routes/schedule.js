const express = require('express');
const router = express.Router();
const c = require('../controllers/schedule');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all schedules
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);

// get all schedules sorted
// router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail schedule
router.get('/:ticketId', authorize([roles.admin, roles.superadmin]), c.show);
// create schedule
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update schedule
router.put('/:ticketId', authorize([roles.admin, roles.superadmin]), c.update);
// scan schedule
// router.put('/:ticketId', authorize([roles.admin, roles.superadmin]), c.update);
router.put('/:ticketId', c.update_checked_in);
// delete schedule
router.delete('/:ticketId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;