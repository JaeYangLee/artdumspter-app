const pool = require("../database/database");

const fetchAllTools = async () => {
  const res = await pool.query("SELECT * FROM tools ORDER BY tool_id ASC");
  return res.rows;
};

const fetchToolById = async (tool_id) => {
  const res = await pool.query("SELECT * FROM tools WHERE tool_id = $1", [
    tool_id,
  ]);
  return res.rows[0];
};

module.exports = {
  fetchAllTools,
  fetchToolById,
};
