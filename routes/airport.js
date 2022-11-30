const express = require('express')
const router = express.Router()
const c = require('../controllers')

// get all data airport
router.get('/', c.airport.index)

// create data airport
router.post('/create', c.airport.create)

// update data airport
router.put('/update/:airportId', c.airport.update)

// delete data airport
router.delete('/delete/:airportId', c.airport.delete)

module.exports = router