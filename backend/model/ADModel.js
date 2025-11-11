const pool = require("../database/database");

const getAllArtworks = async () => {
  const result = await pool.query("SELECT * FROM artworks");
  return result.rows;
};

const getArtworkById = async (artwork_id) => {
  const result = await pool.query(
    "SELECT * FROM artworks WHERE artwork_id = $1",
    [artwork_id]
  );
  return result.rows[0];
};

const addArtwork = async (
  title,
  description,
  image_url,
  tool_id,
  artstyle_id
) => {
  const result = await pool.query(
    "INSERT INTO artworks(title, description, image_url, tool_id, artstyle_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [title, description, image_url, tool_id, artstyle_id]
  );
  return result.rows[0];
};

const updateArtwork = async (
  artwork_id,
  title,
  description,
  image_url,
  tool_id,
  artstyle_id
) => {
  let query, value;

  if (image_url) {
    query = `UPDATE artworks SET title = $1, description = $2, image_url = $3, tool_id = $4, artstyle_id = $5 WHERE artwork_id = $6 RETURNING *`;
    value = [title, description, image_url, tool_id, artstyle_id, artwork_id];
  } else {
    query = `UPDATE artworks SET title = $1, description = $2, tool_id = $4, artstyle_id = $5 WHERE artwork_id = $6 RETURNING *`;
    value = [title, description, image_url, tool_id, artstyle_id, artwork_id];
  }

  const result = await pool.query(query, value);
  return result.rows[0];
};

const deleteArtwork = async (artwork_id) => {
  const result = await pool.query(
    "DELETE FROM artworks WHERE artwork_id = $1 RETURNING *",
    [artwork_id]
  );
  return result.rows[0] || null;
};

module.exports = {
  getAllArtworks,
  getArtworkById,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
