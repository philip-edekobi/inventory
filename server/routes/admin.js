const router = require("express").Router();

const {
    login,
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getCustomers,
} = require("../controllers/admin.js");

router.get('/:username/:password', login);

router.get('/', getCategories);

router.get("/users", getCustomers);

router.post('/', addCategory);

router.put('/:name', updateCategory );

router.delete("/:name", deleteCategory);

module.exports = router;