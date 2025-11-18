const ADUserRoutes = require("./routes/ADUserRoutes");
const AdToolsRoutes = require("./routes/AdToolsRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/artDumpster", ADUserRoutes);
app.use("/artDumpster", AdToolsRoutes);

module.exports = app;
