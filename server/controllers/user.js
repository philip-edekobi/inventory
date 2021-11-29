const Log = require("../models/Log");

const addLog = (req, res) => {
    Log.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(500).json( {msg: err}));
}

module.exports = {
    addLog
}