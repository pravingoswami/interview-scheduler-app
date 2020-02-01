const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const studentSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    mobile : {
        type : String,
        required : true
    },

    batch : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    bookingId : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'Booking', 
            // required : true
        }
    ],

    createdAt : {
        type : Date,
        default : Date.now()
    }
})


const Student = mongoose.model('Student' , studentSchema)

module.exports = Student