const { model, Schema } = require("mongoose");

const Log = model("Log", 
    new Schema({
        name: String,
        date: String,
        email: String,
        product: Object
    })
);

module.exports = Log;