const AdArtworkController = require("../controller/AdArtworkController");
const express = require("express");
const router = express.Router();
const uploadConfig = require("../middleware/uploadConfig");
const verifyToken = require("../middleware/verifyToken");

router.get("/artWork", verifyToken, AdArtworkController.fetchAllArtwork);
router.get(
  "/artWork/:artwork_id",
  verifyToken,
  AdArtworkController.fetchArtworkById,
);
router.get(
  "/artWork/user/:user_id",
  verifyToken,
  AdArtworkController.fetchArtworkByUser,
);
router.post(
  "/artWork/upload",
  verifyToken,
  uploadConfig.single("image_url"),
  AdArtworkController.addArtwork,
);
router.put(
  "/artWork/edit/:artwork_id",
  verifyToken,
  AdArtworkController.updateArtwork,
);
router.delete(
  "/artWork/:artwork_id",
  verifyToken,
  AdArtworkController.deleteArtwork,
);

module.exports = router;
