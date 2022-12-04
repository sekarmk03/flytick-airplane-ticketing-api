const express = require('express');
const router = express.Router();
const c = require('../controllers/notification');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all notif
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get all notif sorted
// router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail notif
router.get('/:notificationId', authorize([roles.admin, roles.superadmin]), c.show);
// create notif
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update notif
router.put('/:notificationId', authorize([roles.admin, roles.superadmin]), c.update);
// delete notif
router.delete('/:notificationId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;