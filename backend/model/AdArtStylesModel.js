const pool = require("../database/database");

const fetchAllArtStyles = async () => {
  const res = await pool.query(
    "SELECT * FROM artstyles ORDER VY artstyle_id ASC"
  );
  return res.rows;
};

const fetchArtStyleById = async (artstyle_id) => {
  const res = await pool.query(
    "SELECT * FROM artstyles WHERE artstyle_id = $1",
    [artstyle_id]
  );

  return res.rows[0];
};

module.exports = {
  fetchAllArtStyles,
  fetchArtStyleById,
};
