const express = require('express');
const app = express();
const cors = require('cors');
const adminRoutes = require("./routes/admin.js");
const userRoutes = require("./routes/customer.js")

const mongoose = require('mongoose');
require("dotenv").config();

const port = process.env.PORT || 80

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN_URL,
}));
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

mongoose.connect(process.env.MONGO_URI)
    .then(res => app.listen(port, () => console.log(`server is running on port: ${port}/`)))
    .catch(err => console.log(err));