const router = require("express").Router();

const {
    addLog,
    viewSpecificLog
} = require("../controllers/user.js");

router.post("/", addLog);

router.get("/:name", viewSpecificLog);

module.exports = router;