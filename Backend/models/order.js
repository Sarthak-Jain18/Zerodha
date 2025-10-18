const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: String,
    name: String,
    qty: Number,
    price: Number
});

module.exports = mongoose.model("order", orderSchema);



