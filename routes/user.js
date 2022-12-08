const express = require('express');
const router = express.Router();
const c = require('../controllers/user');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const multer = require('multer');
const upload = multer();

// get all user
router.get('/', authorize(), c.index);
// get detail user
router.get('/:id', authorize(), c.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.create);
// update user
router.put('/:id', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.update);
// delete user
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;