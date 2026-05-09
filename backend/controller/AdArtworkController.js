const adArtworkModel = require("../model/AdArtworksModel");

const fetchAllArtwork = async (req, res) => {
  try {
    const allArtwork = await adArtworkModel.fetchAllArtwork();

    if (!allArtwork.length === 0) {
      return res
        .status(404)
        .json({ error: "[GET /controller]: All artwork not found!" });
    }

    res.status(200).json({
      message: "[GET /controller]: All artworks fetched!",
      data: allArtwork,
    });
  } catch (err) {
    console.error("[GET /controller]: Error fetching artworks!", err.message);
    res.status(500).json({ error: "[GET /controller]: Server error!" });
  }
};

const fetchArtworkById = async (req, res) => {
  try {
    const { artwork_id } = req.params;

    const artworkId = await adArtworkModel.fetchArtworkById(artwork_id);

    if (!artworkId) {
      return res
        .status(404)
        .json({ error: "[GET /controller]: Artwork Id not found!" });
    }

    res.status(200).json({
      message: "[GET /controller]: Artwork ID fetched!",
      data: artworkId,
    });
  } catch (err) {
    console.error(
      "[GET /controller]: Error fetching artwork by id!",
      err.message,
    );
    res.status(500).json({ error: "[GET /controller]: Server error!" });
  }
};

const fetchArtworkByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const userArtwork = await adArtworkModel.fetchAllArtworkByUser(user_id);

    if (!userArtwork === 0) {
      return res
        .status(404)
        .json({ error: "[GET /controller]: User artwork not found!" });
    }

    res.status(200).json({
      message: "[GET /controller]: User artwork fetched!",
      data: userArtwork,
    });
  } catch (err) {
    console.error(
      "[GET /controller]: Error fetching user artwork!",
      err.message,
    );
    res
      .status(500)
      .json({ error: "[GET/ controller]: Error fetching user artwork!" });
  }
};

const addArtwork = async (req, res) => {
  try {
  } catch (err) {}
};

const updateArtwork = async (req, res) => {
  try {
  } catch (err) {}
};

const deleteArtwork = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = {
  fetchAllArtwork,
  fetchArtworkById,
  fetchArtworkByUser,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
