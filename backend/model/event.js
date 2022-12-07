const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    eventName : {
        type : String,
        required: true
    },
    eventDescription : {
        type : String,
        required: true
    },
    coordinatorName : {
        type: String,
        required: true,
    },
    coordinatorEmail : {
        type: String,
        required: true,
    },
    coordinatorNumber : {
        type: Number,
        required: true,
    },
    venue:{
        type:String,
        required:true
    },
    noOfPeopleEstimated:{
        type:Number,
        required:true
    },
    fromDateTime:{
        type:Date,
        required:true
    },
    toDateTime:{
        type:Date,
        required:true
    },
    guestName:{
        type:String,
        requires:true
    },
    organizerName:{
        type:String,
        requires:true
    },
    organizerEmail:{
        type:String,
        requires:true
    },
    eventType:{
        type:String,
        requires:true
    },
    image:{
        type:String,
        requires:true
    },

})

const event = mongoose.model('event', schema);

module.exports = event;