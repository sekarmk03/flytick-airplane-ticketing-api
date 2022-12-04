const express = require('express');
const router = express.Router();
const c = require('../controllers/user');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const multer = require('multer');
const upload = multer();

// get all user
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get all sorted
router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.index);
// get detail user
router.get('/:userId', authorize([roles.admin, roles.superadmin]), c.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.create);
// update user
router.put('/:userId', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.update);
// delete user
router.delete('/:userId', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;