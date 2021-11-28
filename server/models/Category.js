import { model, Schema } from "mongoose"

const Category = model("Category", 
    new Schema({
        name: String,
        products: Array
    })
);

module.exports = Category;