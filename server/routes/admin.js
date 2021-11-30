const router = require("express").Router();
const Log = require("../models/Log")

const {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getLogs
} = require("../controllers/admin.js");

router.get('/', getProducts);

router.post('/', addProduct);

router.put('/:name', updateProduct);

router.delete('/:name', deleteProduct);

router.get('/logs', getLogs)

module.exports = router;