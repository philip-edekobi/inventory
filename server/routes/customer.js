const router = require("express").Router();

const {
    login,
    buyProduct,
    getAllProducts,
} = require("../controllers/user.js");

router.get("/:email/:password", login);
router.post("/:email/add", buyProduct);
router.get("/:email/purchase history", getAllProducts);

module.exports = router;