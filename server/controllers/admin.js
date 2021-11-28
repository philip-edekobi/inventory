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
    Category.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(500).json( {msg: err}));
}

const getCategories = (req, res) => {
    Category.find({})
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(404).json({error: err}));
}

const updateCategory = (req, res) => {
    Category.findOneAndUpdate({ name: req.params.name },  req.body, {runValidators: true, new: true})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(404).json({error: err}));
}

const deleteCategory = (req, res) => {
    Category.findOneAndDelete({ name: req.params.name })
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(404).json({error: err}));
}

const getCustomers = (req, res) => {
    Customer.find({})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(404).json({error: err}));
}

module.exports = {
    login,
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getCustomers,
};