const express = require('express');
const app = express();
const cors = require('cors');
const adminRoutes = require("./routes/admin.js");

const mongoose = require('mongoose');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true,
}));

app.use("/admin", adminRoutes);


require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
    .then(res => app.listen(8081, () => console.log("server is running on http://localhost:8081/")))
    .catch(err => console.log(err));