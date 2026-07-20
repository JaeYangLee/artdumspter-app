const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "superSecret123";

const verifyToken = (req, res, next) => {
  try {
    console.log('VERIFY TOKEN START');

    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "[VERIFY TOKEN]: No token provided." });
    }

    const token = authHeader.split(" ")[1];

    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, SECRET_KEY);

    console.log("DECODED:", decoded);

    req.user = decoded;

    next();
  } catch (err) {
    console.error("[VERIFY TOKEN]: Invalid token!", err.message);
    res
      .status(403)
      .json({ message: "[VERIFY TOKEN]: Invalid or expired token." });
  }
};

module.exports = verifyToken;
