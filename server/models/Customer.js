const { model, Schema } = require("mongoose");

const Customer = model("Customer", 
    new Schema({
        name: String,
        email: String,
        password: String,
        boughtItems: Array
    })
);

module.exports = Customer;