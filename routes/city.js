const express = require('express')
const router = express.Router()
const c = require('../controllers')

// get all data city
router.get('/', c.city.index)

// create data city
router.post('/create', c.city.create)

// update data city
router.put('/update/:cityId', c.city.update)

// delete data city
router.delete('/delete/:cityId', c.city.delete)

module.exports = router