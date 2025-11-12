const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "superSecret123";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "[VERIFY TOKEN]: No token provided." });
    }

    const token = authHeader.split("")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("[VERIFY TOKEN]: Invalid token!");
    res
      .status(403)
      .json({ message: "[VERIFY TOKEN]: Invalid or expired token." });
  }
};
