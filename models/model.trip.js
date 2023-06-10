const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    name: String,
    email : String,
    destination :String,
    members : Number,
    budget : Number,
}, {versionKey: false})

const TripModel = mongoose.model("trip", tripSchema)

module.exports = { TripModel };