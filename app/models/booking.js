const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)

const bookingSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    slot : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

   

    bookingBy :             {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'Student', 
        required : true
    },

    confirmation : {
        type : Boolean,
        default : false
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }

})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
