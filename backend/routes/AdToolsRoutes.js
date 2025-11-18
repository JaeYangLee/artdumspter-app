const AdToolsController = require("../controller/AdToolsController");
const express = require("express");
const router = express.Router();

router.get("/tools", AdToolsController.fetchAllTools);
router.get("/tools/:tool_id", AdToolsController.fetchToolById);

module.exports = router;
