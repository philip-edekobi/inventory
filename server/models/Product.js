const { model, Schema } = require("mongoose");

const Product = model("Product", 
    new Schema({
        name: String,
        price: Number,
        qty: Number
    })
);

module.exports = Product;