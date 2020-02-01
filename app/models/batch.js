const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const batchSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    startedAt : {
        type : String,
        required : true
    },

    // interviewTitle : {
    //     type : [{"_id" : mongoose.Schema.Types.ObjectId}],
    //     ref : 'Title',
    //     required :true
    // },

    interviewTitle : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'Title', 
            required : true
        }
    ],

    interviewDay : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'InterviewDay', 
            required : true
        }
    ],

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Batch = mongoose.model('Batchh', batchSchema)

module.exports = Batch