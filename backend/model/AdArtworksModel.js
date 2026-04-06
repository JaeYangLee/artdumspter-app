const pool = require("../database/database");

const fetchAllArtwork = async () => {
  //This database query is called JOIN method, it allows you to fetch data from other tables and "JOIN" the data literally for fetching
  const res = await pool.query(
    "SELECT a.artwork_id, a.title, a.description, a.image_url, a.created_at, u.username, t.tool_name, s.artstyle_name FROM artworks a LEFT JOIN users u ON a.user_id = u.user_id LEFT JOIN tools t ON a.tool_id = t.tool_id LEFT JOIN artstyles s ON a.artstyle_id = s.artstyle_id ORDER BY a.created_at DESC",
  );
  return res.rows;
};

const fetchArtworkById = async (artwork_id) => {
  const res = await pool.query(
    "SELECT a.artwork_id, a.title, a.description, a.image_url, a.created_at, u.username, t.tool_name, s.artstyle_name FROM artworks a LEFT JOIN users u ON a.user_id = u.user_id LEFT JOIN tools t ON a.tool_id = t.tool_id LEFT JOIN artstyles s ON s.artstyle_id = s.artstyle_id WHERE a.artwork_id = $1",
    [artwork_id],
  );
  return res.rows[0];
};

const fetchAllArtworkByUser = async (user_id) => {
  const res = await pool.query(
    "SELECT * FROM artworks WHERE user_id = $1 ORDER BY created_at DESC",
    [user_id],
  );
  return res.rows;
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
    "UPDATE artworks SET title = $1, description = $2, image_url = $3, tool_id = $4, artstyle_id = $5 WHERE artwork_id = $6 AND user_id = $7 RETURNING *",
    [title, description, image_url, tool_id, artstyle_id, artwork_id, user_id],
  );
  return res.rows[0];
};

const deleteArtwork = async (artwork_id, user_id) => {
  const res = await pool.query(
    "DELETE FROM artworks WHERE artwork_id = $1 AND user_id = $2 RETURNING *",
    [artwork_id, user_id],
  );
  return res.rows[0];
};

module.exports = {
  fetchAllArtwork,
  fetchArtworkById,
  fetchAllArtworkByUser,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
