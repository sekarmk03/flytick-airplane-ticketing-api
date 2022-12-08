const express = require('express')
const router = express.Router()
const c = require('../controllers')
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all data airport
router.get('/', c.airport.index)

// get detail data airport
router.get('/:id', authorize([roles.admin, roles.superadmin]), c.airport.show)

// create data airport
router.post('/', authorize([roles.admin, roles.superadmin]), c.airport.create)

// update data airport
router.put('/:id', authorize([roles.admin, roles.superadmin]), c.airport.update)

// delete data airport
router.delete('/:id', authorize([roles.admin, roles.superadmin]), c.airport.delete)

module.exports = router