const { model, Schema } = require( "mongoose");

const Product = model("Product", 
    new Schema({
        name: String,
    })
);

module.exports = Product;