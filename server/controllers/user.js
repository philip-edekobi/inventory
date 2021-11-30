const Log = require("../models/Log");

const addLog = (req, res) => {
    Log.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch(err => res.status(500).json( {msg: err}));
}

const viewSpecificLog = (req, res) => {
    Log.find({name: req.params.name})
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(500).json({ error: err}));
}

module.exports = {
    addLog,
    viewSpecificLog
}