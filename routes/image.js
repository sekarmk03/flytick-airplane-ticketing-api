const express = require('express');
const router = express.Router();
const c = require('../controllers/image');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');
const multer = require('multer');
const upload = multer();

// get all images
router.get('/', authorize([roles.admin, roles.superadmin]), c.index);
// get detail image
router.get('/:id', authorize([roles.admin, roles.superadmin]), c.show);
// create image
router.post('/', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.create);
// update image
router.put('/:id', authorize([roles.admin, roles.superadmin]), upload.single('image'), c.update);
// delete image
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.delete);

module.exports = router;