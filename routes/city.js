const express = require('express')
const router = express.Router()
const c = require('../controllers')
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all data city
router.get('/', authorize(), c.city.index)

// get detail data city
router.get('/:id', authorize(), c.city.show)

// create data city
router.post('/', authorize([roles.admin, roles.superadmin]), c.city.create)

// update data city
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.city.update)

// delete data city
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.city.delete)

module.exports = router