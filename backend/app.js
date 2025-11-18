const ADUserRoutes = require("./routes/ADUserRoutes");
const AdToolsRoutes = require("./routes/AdToolsRoutes");
const AdArtStylesRoutes = require("./routes/AdArtStylesRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/artDumpster", ADUserRoutes);
app.use("/artDumpster", AdToolsRoutes);
app.use("/artDumpster", AdArtStylesRoutes);

module.exports = app;
