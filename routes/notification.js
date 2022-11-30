const express = require('express');
const router = express.Router();
const notification_c = require('../controllers/notification');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all notif
router.get('/', notification_c.getAll);
// get detail notif
router.get('/:id', notification_c.getDetail);
// create notif
router.post('/create', /*authorize([roles.admin, roles.superadmin]),*/ notification_c.create);
// update notif
router.put('/:id', /*authorize([roles.admin, roles.superadmin]),*/ notification_c.update);
// delete notif
router.delete('/:id', /*authorize([roles.admin, roles.superadmin]),*/ notification_c.delete);

module.exports = router;