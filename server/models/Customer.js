const { model, Schema } = require("mongoose");

const Customer = model("Customer", 
    new Schema({
        name: String,
        id: String,
        email: String,
        password: String
    })
);

module.exports = Customer;