const { model, Schema } = require("mongoose");
const Product = require("./Product")

const Log = model("Log", 
    new Schema({
        name: String,
        email: String,
        product: Object
    })
);

module.exports = Log;