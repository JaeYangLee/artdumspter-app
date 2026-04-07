const pool = require("../database/database");
const bcrypt = require("bcrypt");

const getUserById = async (user_id) => {
  //This database query is called JOIN method, it allows you to fetch data from other tables and "JOIN" the data literally for fetching
  const result = await pool.query(
    "SELECT u.user_id, u.username, u.email, u.bio, u.location, t.tool_name, a.artstyle_name FROM users u LEFT JOIN tools t ON u.tool_id = t.tool_id LEFT JOIN artstyles a ON u.artstyle_id = a.artstyle_id WHERE u.user_id = $1",
    [user_id],
  );

  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT user_id, email, password, username, location, tool_id, artstyle_id FROM users WHERE email = $1",
    [email],
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
  artstyle_id,
) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const result = await pool.query(
    "INSERT INTO users(username, email, password, bio, location, tool_id, artstyle_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING username, email, bio, location, tool_id, artstyle_id",
    [username, email, hashedPassword, bio, location, tool_id, artstyle_id],
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
  artstyle_id,
) => {
  let query =
    "UPDATE users SET username = $1, email = $2, bio = $3, location = $4, tool_id = $5, artstyle_id = $6";

  const values = [username, email, bio, location, tool_id, artstyle_id];

  if (password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    query += ", password = $7 WHERE user_id = $8 RETURNING *";
    values.push(hashedPassword, user_id);
  } else {
    query += " WHERE user_id = $7 RETURNING *";
    values.push(user_id);
  }

  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteUser = async (user_id) => {
  const result = await pool.query(
    " DELETE FROM users WHERE user_id = $1 RETURNING *",
    [user_id],
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
