const express = require('express')

const timeSlotController = require('../app/controllers/timeSlotController')
const titleController = require('../app/controllers/titleController')
const interviewDayController = require('../app/controllers/interviewDayController')
const batchController = require('../app/controllers/batchController')
const bookingController = require('../app/controllers/bookingController')
const studentController = require('../app/controllers/studentController')

const router = express.Router()

router.get('/time-slots', timeSlotController.list)
router.post('/time-slots', timeSlotController.create)
router.get('/time-slots/:id', timeSlotController.show)
router.put('/time-slots/:id', timeSlotController.update)
router.delete('/time-slots/:id', timeSlotController.destroy)


router.get('/titles', titleController.list)
router.post('/titles', titleController.create)
router.get('/titles/:id', titleController.show)
router.put('/titles/:id', titleController.update)
router.delete('/titles/:id', titleController.destroy)

router.get('/interview-days', interviewDayController.list)
router.post('/interview-days', interviewDayController.create)
router.get('/interview-days/:id', interviewDayController.show)
router.put('/interview-days/:id', interviewDayController.update)
router.delete('/interview-days/:id', interviewDayController.destroy)

router.get('/batches', batchController.list)
router.post('/batches', batchController.create)
router.get('/batches/:id', batchController.show)
router.put('/batches/:id', batchController.update)
router.delete('/batches/:id', batchController.destroy)

router.get('/bookings', bookingController.list)
router.post('/bookings', bookingController.create)
router.get('/bookings/:id', bookingController.show)
router.put('/bookings/:id', bookingController.update)
router.delete('/bookings/:id', bookingController.destroy)

router.get('/students', studentController.list)
router.post('/students', studentController.create)
router.get('/students/:id', studentController.show)
router.put('/students/:id', studentController.update)
router.delete('/students/:id', studentController.destroy)

module.exports = router