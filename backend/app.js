const AdUserRoutes = require("./routes/ADUserRoutes");
const AdToolsRoutes = require("./routes/AdToolsRoutes");
const AdArtStylesRoutes = require("./routes/AdArtStylesRoutes");
const AdArtworksRoutes = require("./routes/AdArtworksRoutes");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
console.log("App.js version updated");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/artDumpster", AdUserRoutes);
app.use("/artDumpster", AdArtworksRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/artDumpster", AdToolsRoutes);
app.use("/artDumpster", AdArtStylesRoutes);

module.exports = app;
