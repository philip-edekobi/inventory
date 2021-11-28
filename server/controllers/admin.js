const Category = require("../models/Category.js");
const Customer = require("../models/Customer.js");

const login = (req, res) => {
    if(req.params.username === process.env.admin_username && req.params.password === process.env.admin_password ){
        res.status(200).json({ login: true });
    } else {
        res.status(401).json({ login: false});
    }
}

const addCategory = (req, res) => {

}

const getCategories = (req, res) => {
    res.status(200).send("HELLOOO");
}

const updateCategory = (req, res) => {
    
}

const deleteCategory = (req, res) => {
    
}

const getCustomers = (req, res) => {
    
}

module.exports = {
    login,
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getCustomers,
};