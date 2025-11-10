const ADRoutes = require("./routes/ADRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("artDumpster", ADRoutes);

module.exports = app;
