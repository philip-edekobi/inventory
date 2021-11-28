const router = require("express").Router();

const {
    login,
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    getCustomers,
} = require("../controllers/admin.js").default;

router.get('/:username/:password', login);

router.get('/', getCategories, getCustomers);

router.post('/', addCategory);

router.put('/:catId', updateCategory );

router.delete("/:catId", deleteCategory);

module.exports = router;