const express = require('express');
const router = express.Router();
const c = require('../controllers/notification');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all notif
router.get('/', authorize(), c.index);
// get detail notif
router.get('/:id', authorize(), c.show);
// create notif
router.post('/', authorize([roles.admin, roles.superadmin]), c.create);
// update notif
router.put('/read-all', authorize(), c.read_all_notifications);
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.update);
router.put('/:id/read', authorize(), c.read_notification);
// delete notif
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;