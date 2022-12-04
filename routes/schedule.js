const express = require('express');
const router = express.Router();
const c = require('../controllers/schedule');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all schedules
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail schedule
router.get('/:scheduleId', authorize([roles.admin, roles.superadmin]), c.show);
// create schedule
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update schedule
router.put('/:scheduleId', authorize([roles.admin, roles.superadmin]), c.update);
// delete schedule
router.delete('/:scheduleId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;