const Booking = require('../models/booking')
const Student = require('../models/student')

module.exports.list = (req, res) => {
    Booking.find()
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const booking = new Booking(body)

    // const studentId = req.body.bookingBy._id
    // const studentBody = {bookingId}

    booking.save()
        .then(booking => {
            console.log(booking)
            // for student update
            const studentId = booking.bookingBy
            const studentBody = {
                "bookingId" : [{"_id" : "5e33c6c0d77adb76805cea14"}]
            }

            Student.findByIdAndUpdate(studentId, studentBody, {runValidators : true, new : true})
                .then(student => res.json({booking, student}) )

                .catch(err => console.log(err))

            
        })
        .catch(err => res.json(err))
    
}

module.exports.show = (req, res) => {
    const id = req. params.id
    Booking.findById(id)
        .then(booking => booking ? res.json(booking) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Booking.findByIdAndUpdate(id, body, {runValidators : true, new : true})
        .then(booking => booking ? res.json(booking) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Booking.findByIdAndDelete(id)
        .then(booking => booking ? res.json(booking) : res.json({}))
        .catch(err => res.json(err))
}