const pool = require("../database/database");

const getAllArtworks = async () => {
  const res = await pool.query("SELECT * FROM artworks");
  return res.rows;
};

const getArtworkByID = async (artwork_id) => {
  const res = await pool.query("SELECT * FROM artworks WHERE = $1", [
    artwork_id,
  ]);
  return res.rows[0];
};

const addManga = async (
  title,
  description,
  image_url,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query(
    "INSERT INTO artworks (title, description, image_url, tool_id, artstyle_id)",
    [title, description, image_url, tool_id, artstyle_id],
  );
  return res.rows[0];
};

const updateManga = async (
  artwork_id,
  title,
  description,
  image_url,
  tool_id,
  artstyle_id,
) => {
  const res = await pool.query("", []);
};
