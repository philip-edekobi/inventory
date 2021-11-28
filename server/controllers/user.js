const Customer = require("../models/Customer.js");

const login = (req, res) => {
    Customer.find({ email: req.params.email, password: req.params.password})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(401).json({error: err}));
}

const buyProduct = (req, res) => {
    Customer.findOneAndUpdate({ email: req.params.email}, req.body, {runValidators: true, new: true})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(500).json({ msg: err }));
}

const getAllProducts = (req, res) => {
    Customer.find({ email: req.params.email})
        .then(result => result.boughtItems)
        .then(items => res.status(200).json({ boughtItems: items}))
        .catch(err => res.status(500).json({ error: err}));
}

module.exports = {
    login,
    buyProduct,
    getAllProducts,
}