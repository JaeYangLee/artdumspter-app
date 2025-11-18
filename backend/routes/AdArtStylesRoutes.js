const AdArtStylesController = require("../controller/AdArtStylesController");
const express = require("express");
const router = express.Router();

router.get("/artStyles", AdArtStylesController.fetchAllArtStyles);
router.get("/artStyles/:artstyle_id", AdArtStylesController.fetchArtStyleById);

module.exports = router;
