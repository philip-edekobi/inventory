const { model, Schema } = require( "mongoose");

const Category = model("Category", 
    new Schema({
        name: String,
        products: Array
    })
);

module.exports = Category;