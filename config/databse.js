const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/interview',  {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('coonected to databse'))
        .catch(() => console.log(err))
}

module.exports =  setupDB