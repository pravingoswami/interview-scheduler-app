const Title  =  require('../models/title')

module.exports.list = (req, res) => {
    Title.find()
        .then(title => res.json(title))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const title = new Title(body)
    title.save()
        .then(title => res.json(title))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Title.findById(id)
        .then(title => title ? res.json(title) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Title.findByIdAndUpdate(id, body, {runValidators : true, new : true})
        .then(title => title ? res.json(title) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Title.findByIdAndDelete(id)
        .then(title => title ? res.json(title) : res.json({}))
        .catch(err => res.json(err))
}