const InterviewDay = require('../models/interview-day')

module.exports.list = (req, res) => {
    InterviewDay.find().populate({path : "slots._id"})
    // InterviewDay.find()
        .then(interviewDay => res.json(interviewDay))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const interviewDay = InterviewDay(body)
    interviewDay.save()
    .then(interviewDay => res.json(interviewDay))
    .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    InterviewDay.findById(id).populate({path : "slots._id"})
    // InterviewDay.findById(id)
        .then(interviewDay => interviewDay ? res.json(interviewDay) : res.json(interviewDay))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    InterviewDay.findByIdAndUpdate(id, body, {runValidators : true, new : true})
    .then(interviewDay => interviewDay ? res.json(interviewDay) : res.json(interviewDay))
    .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    InterviewDay.findByIdAndDelete(id)
    .then(interviewDay => interviewDay ? res.json(interviewDay) : res.json(interviewDay))
    .catch(err => res.json(err))
}