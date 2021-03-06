const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String,required:true},
    date:{type: Date,required:true},
    time: {type: String, required:true},
    price: {type: Number,required:true},
    place: {type: String,required:true}
},{
    timestamps: true,
});

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;