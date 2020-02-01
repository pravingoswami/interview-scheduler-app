const TimeSlot  =  require('../models/time-slot')

module.exports.list = (req, res) => {
    TimeSlot.find()
        .then(timeSlot => res.json(timeSlot))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const timeSlot = new TimeSlot(body)
    timeSlot.save()
        .then(timeSlot => res.json(timeSlot))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    TimeSlot.findById(id)
        .then(timeSlot => timeSlot ? res.json(timeSlot) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    TimeSlot.findByIdAndUpdate(id, body, {runValidators : true, new : true})
        .then(timeSlot => timeSlot ? res.json(timeSlot) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    TimeSlot.findByIdAndDelete(id)
        .then(timeSlot => timeSlot ? res.json(timeSlot) : res.json({}))
        .catch(err => res.json(err))
}