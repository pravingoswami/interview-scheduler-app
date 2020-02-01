const Batch = require('../models/batch')

module.exports.list = (req, res) => {
    Batch.find().populate('interviewTitle').populate('interviewDay')
        .then(batch => res.json(batch))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const batch  = new Batch(body)
    batch.save()
        .then(batch => res.json(batch))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Batch.findById(id).populate('interviewTitle')
        .then(batch => batch ? res.json(batch) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Batch.findByIdAndUpdate(id, body, {runValidators: true, new : true})
        .then(batch => batch ? res.json(batch) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Batch.findByIdAndDelete(id)
        .then(batch => batch ? res.json(batch) : res.json({}))
        .catch(err => res.json(err))
}