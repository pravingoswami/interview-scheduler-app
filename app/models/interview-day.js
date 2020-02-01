const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const interviewDaySchema = new Schema({

    code : {
        type : String,
        unique : true,
        required : true
    },

    day : {
        type :String,
        required : true
    },

    // slots : {
        // type : [{"_id" : mongoose.Schema.Types.ObjectId}],
        // ref : 'TimeSlot',
        // required :true
    // },

    // slots : [ "_id" : {type : mongoose.Schema.Types.ObjectId, ref : 'TimeSlot', required : true},"confirm" : {type : Boolean, default : false}],

    slots : [
               {
                   "_id" : {type : mongoose.Schema.Types.ObjectId, ref : 'TimeSlot', required : true},
                   "confirm" : {type : Boolean, default : false}
               }
            ],
    
    // // {
    // //     type : [{"_id" : mongoose.Schema.Types.ObjectId}],
    // //     ref : 'TimeSlot',
    // //     required :true
    // // },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const InterviewDay = mongoose.model('InterviewDay', interviewDaySchema)

module.exports = InterviewDay