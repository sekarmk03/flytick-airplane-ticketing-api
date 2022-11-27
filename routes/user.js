const express = require('express');
const router = express.Router();
const c = require('../controllers');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const storage = require('../utils/storage');

// get all user
router.get('/', authorize(), c.user.index);
// get detail user
router.get('/:userId', authorize(), c.user.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), storage.image.single('avatar'), c.user.create);
// update user
router.put('/:userId', authorize([roles.admin, roles.superadmin]), c.user.update);
// delete user
router.delete('/:userId', authorize([roles.admin, roles.superadmin]), c.user.delete);

module.exports = router;