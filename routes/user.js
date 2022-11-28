const express = require('express');
const router = express.Router();
const c = require('../controllers');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const multer = require('multer');
const upload = multer();

// get all user
router.get('/', authorize([roles.admin, roles.superadmin]), c.user.index);
// get detail user
router.get('/:userId', authorize([roles.admin, roles.superadmin]), c.user.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.user.create);
// update user
router.put('/:userId', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.user.update);
// delete user
router.delete('/:userId', authorize([roles.admin, roles.superadmin]), c.user.delete);

module.exports = router;