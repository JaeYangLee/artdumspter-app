const ADUserController = require("../controller/ADUserController");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router.post("/register", ADUserController.createUser);
router.post("/login", ADUserController.logInUser);
router.get("/profile", verifyToken, ADUserController.getUserById);
router.put("/profile/:user_id", ADUserController.updateUser);
router.delete("/profile/:user_id", ADUserController.deleteUser);

module.exports = router;
