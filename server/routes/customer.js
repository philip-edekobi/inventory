const router = require("express").Router();

const {
    addLog
} = require("../controllers/user.js");

router.post("/", addLog);

module.exports = router;