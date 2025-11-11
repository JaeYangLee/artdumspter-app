const ADModel = require("../model/ADModel");

const getAllArtworks = async (req, res) => {
  try {
    let allArtworks;

    allManga = await ADModel.getAllArtworks();
    res.status(200).json({
      message: "[GET /controller]: Fetching all artworks successful!",
      data: allArtworks,
    });
  } catch (err) {
    console.error(
      "[GET /controller]: Error fetching all artworks",
      err.message
    );
    res.status(500).json({ error: "[GET /controller]: Server error!" });
  }
};

const getArtworkById = async (req, res) => {
  try {
    const { artwork_id } = req.params;
    let artworkId;

    allManga = await ADModel.getArtworkById(artwork_id);
    res.status(200).json({
      message: "[GET /controller]: Fetching artwork by id successful!",
      data: artworkId,
    });
  } catch (err) {
    console.error(
      "[GET /controller]: Error fetching artwork by id!",
      err.message
    );
    res.status(500).json({
      error: "[GET /controller]: Server error!",
    });
  }
};

//need refactor for image upload
const addArtwork = async (req, res) => {
  try {
    const { title, description, image_url, tool_id, artstyle_id } = req.body;
    let newArtwork;

    newArtwork = await ADModel.addArtwork(
      title,
      description,
      image_url,
      tool_id
    );
    res.status(200).json({
      message: "[POST /controller]: Adding artwork successful!",
      data: newArtwork,
    });
  } catch (err) {
    console.error("[POST /controller]: Error adding new artwork!", err.message);
    res.status(500).json({ error: "[POST /controller]: Server error!" });
  }
};

// need refactor for image upload
const updateArtwork = async (req, res) => {
  try {
    const { artwork_id } = req.params;
    const { title, description, image_url, tool_id, artstyle_id } = req.body;
    let updatedArtwork;

    updateArtwork = await ADModel.updateArtwork(
      artwork_id,
      title,
      description,
      image_url,
      tool_id,
      artstyle_id
    );

    res.json(200).json({
      message: "[PUT /controller]: Updating artwork successful!",
      data: updateArtwork,
    });
  } catch (err) {
    console.error("[PUT /controller]: Error updating artwork!", err.nessage);
    res.status(500).json({
      error: "[PUT /controller]: Server error!",
    });
  }
};

const deleteArtwork = async (req, res) => {
  try {
    const { artwork_id } = req.params;
    await ADModel.deleteArtwork(artwork_id);

    res.status(200).json({
      message: "[DELETE /controller]: Delete artwork successful!",
    });
  } catch (err) {
    console.error("[DELETE /controller]: Error deleting artwork!");
    res.status(500).json({ error: "[DELETE /controller]: Server error!" });
  }
};

module.exports = {
  getAllArtworks,
  getArtworkById,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
