const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const titleSchema = new Schema({

    code : {
        type : String,
        unique : true
    },

    title : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Title = mongoose.model('Title', titleSchema)

module.exports = Title