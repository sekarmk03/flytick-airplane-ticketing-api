const express = require('express');
const router = express.Router();
const c = require('../controllers/user');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const multer = require('multer');
const upload = multer();

// forgot password view
router.get('/forgot-password', c.forgotPasswordView);
// forgot password
router.post('/forgot-password', c.forgotPassword);
// reset password view
router.get('/reset-password', c.resetPasswordView);
// reset password
router.post('/reset-password', c.resetPassword)
// get all user
router.get('/', authorize(), c.index);
// get detail user
router.get('/:id', authorize(), c.show);
// create user
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.create);
// update user
router.put('/:id', authorize(), upload.single('image'), c.update);
// delete user
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;