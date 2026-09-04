const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "[UPLOAD /middleware]: Invalid file type. Only images are allowed!",
      ),
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
