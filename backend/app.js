const ADUserRoutes = require("./routes/ADUserRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/artDumpster", ADUserRoutes);

module.exports = app;
