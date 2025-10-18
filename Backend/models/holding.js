const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holdingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});

module.exports = mongoose.model("holding", holdingSchema);
