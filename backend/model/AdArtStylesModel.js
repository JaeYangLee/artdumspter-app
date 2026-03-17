const pool = require("../database/database");

const fetchAllArtStyles = async () => {
  const res = await pool.query(
    "SELECT * FROM artstyles ORDER BY artstyle_id ASC",
  );
  return res.rows;
};

const fetchArtStyleById = async (artstyle_id) => {
  const res = await pool.query(
    "SELECT * FROM artstyles WHERE artstyle_id = $1",
    [artstyle_id, title, description, image_url, tool_id, artstyle_id],
  );

  return res.rows[0];
};

const addArtwork = async (
  title,
  description,
  image_url = null,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query(
    "INSERT INTO artworks (title, description, image_url, tool_id, artstyle_id)",
    [title, description, image_url, tool_id, artstyle_id],
  );
  return res.rows[0];
};

const updateArtwork = async (
  artwork_id,
  title,
  description,
  image_url,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query("", [
    artwork_id,
    title,
    description,
    image_url,
    tool_id,
    artstyle_id,
  ]);
  return res.rows[0];
};

const deleteArtwork = async () => {};

module.exports = {
  fetchAllArtStyles,
  fetchArtStyleById,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
