const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const timeSlotSchema = new Schema({

    code : {
        type : String,
        unique : true,
        required : true
    },

    slot : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema)

module.exports = TimeSlot