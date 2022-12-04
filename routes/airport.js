const express = require('express')
const router = express.Router()
const c = require('../controllers')
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

// get all data airport
router.get('/', authorize([roles.admin, roles.superadmin]), c.airport.index)

// gett all data airport sored
// router.get('/?sort=&type=&search=', authorize([roles.admin, roles.superadmin]), c.airport.index)

// get detail data airport
router.get('/:airportId', authorize([roles.admin, roles.superadmin]), c.airport.show)

// create data airport
router.post('/', authorize([roles.admin, roles.superadmin]), c.airport.create)

// update data airport
router.put('/:airportId', authorize([roles.admin, roles.superadmin]), c.airport.update)

// delete data airport
router.delete('/:airportId', authorize([roles.admin, roles.superadmin]), c.airport.delete)

module.exports = router