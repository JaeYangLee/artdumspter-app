const pool = require("../database/database");
const bcrypt = require("bcrypt");

const getUserById = async (user_id) => {
  const result = await pool.query(
    "SELECT u.user_id, u.username, u.email, u.bio, u.location, t.tool_name, a.artstyle_name FROM users u LEFT JOIN tools t ON u.tool_id = t.tool_id LEFT JOIN artstyles a ON u.artstyle_id = a.artstyle_id WHERE u.user_id = $1",
    [user_id]
  );

  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT user_id, email, password, username, location, tool_id, artstyle_id FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
};

const createUser = async (
  username,
  email,
  password,
  bio,
  location,
  tool_id,
  artstyle_id
) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const result = await pool.query(
    "INSERT INTO users(username, email, password, bio, location, tool_id, artstyle_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING username, email, bio, location, tool_id, artstyle_id",
    [username, email, hashedPassword, bio, location, tool_id, artstyle_id]
  );

  return result.rows[0];
};

const updateUser = async (
  user_id,
  username,
  email,
  password,
  bio,
  location,
  tool_id,
  artstyle_id
) => {
  let hashedPassword = password;

  if (password) {
    const saltRounds = 10;
    hashedPassword = await bcrypt.hash(password, saltRounds);
  }

  const result = await pool.query(
    "UPDATE users SET username = $1, email = $2, password = $3, bio = $4, location = $5, tool_id = $6, artstyle_id = $7 WHERE user_id = $8 RETURNING *",
    [
      username,
      email,
      hashedPassword,
      bio,
      location,
      tool_id,
      artstyle_id,
      user_id,
    ]
  );

  return result.rows[0];
};

const deleteUser = async (user_id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE user_id = $1 RETURNING *",
    [user_id]
  );
  return result.rows[0];
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
