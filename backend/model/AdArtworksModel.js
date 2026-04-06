const pool = require("../database/database");

const fetchAllArtwork = async () => {
  const res = await pool.query("SELECT * FROM artworks");
  return res.rows;
};

const getArtworkById = async (artwork_id) => {
  const res = await pool.query("SELECT * FROM artworks WHERE artwork_id = $1", [
    artwork_id,
  ]);
  return res.rows[0];
};

const addArtwork = async (
  user_id,
  title,
  description,
  image_url,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query(
    "INSERT INTO artworks(user_id, title, description, image_url, tool_id, artstyle_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [user_id, title, description, image_url, tool_id, artstyle_id],
  );
  return res.rows[0];
};

const updateArtwork = async (
  artwork_id,
  user_id,
  title,
  description,
  image_url,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query(
    "UPDATE artworks SET title = $1, description = $2, image_url = $3, tool_id = $4, artstyle_id = $5 WHERE artwork_id = $6 AND user_id = $7",
    [title, description, image_url, tool_id, artstyle_id, artwork_id, user_id],
  );
  return res.rows[0];
};
