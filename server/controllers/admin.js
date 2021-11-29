const Product = require("../models/Product");
const Log = require("../models/Log");

const addProduct = (req, res) => {
    Product.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(500).json( {msg: err}));
}

const getProducts = (req, res) => {
    Product.find({})
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(404).json({error: err}));
}

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ name: req.params.name },  req.body, {runValidators: true, new: true})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(404).json({error: err}));
}

const deleteProduct = (req, res) => {
    Product.findOneAndDelete({ name: req.params.name })
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(404).json({error: err}));
}

const getLogs = (req, res) => {
    Log.find({})
        .then(result => res.status(200).json({ result }))
        .carch(err => res.status(500).json({ msg: err }););
}


module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getLogs
};