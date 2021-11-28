const router = require("express").Router();

const {
    login,
    signup,
    buyProduct,
    getAllProducts,
} = require("../controllers/user.js");

router.get("/:email/:password", login);
router.post("/:email/add", buyProduct);
router.post("/", signup)
router.get("/:email/purchase history", getAllProducts);

module.exports = router;