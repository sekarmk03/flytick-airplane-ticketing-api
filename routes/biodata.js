const express = require('express');
const router = express.Router();
const c = require('../controllers');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all user
router.get('/', authorize([roles.admin, roles.superadmin]), c.user.index);
// get detail user
router.get('/:biodataId', authorize([roles.admin, roles.superadmin]), c.user.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.user.create);
// update user
router.put('/:biodataId', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.user.update);
// delete user
router.delete('/:biodataId', authorize([roles.admin, roles.superadmin]), c.user.delete);

module.exports = router;