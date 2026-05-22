const adArtworkModel = require("../model/AdArtworksModel");

const fetchAllArtwork = async (req, res) => {
  try {
    const allArtwork = await adArtworkModel.fetchAllArtwork();

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
    const { user_id } = req.user;
    const { title, description, tool_id, artstyle_id } = req.body;

    if (
      !title.trim() ||
      !description.trim() ||
      !tool_id ||
      !artstyle_id ||
      !req.file
    ) {
      return res
        .status(400)
        .json({ error: "[POST /Controller]: Missing required fields!" });
    }

    const image_url = `uploads/${req.file.filename}`;

    const newArtwork = await adArtworkModel.addArtwork(
      user_id,
      title,
      description,
      image_url,
      tool_id,
      artstyle_id,
    );

    res.status(200).json({
      message: "[POST /Controller]: Uploading artwork successful!",
      data: newArtwork,
    });
  } catch (err) {
    console.error("[POST /Controller]: Error adding new artwork!", err.message);
    res.status(500).json({ error: "[POST /Controller]: Server error!" });
  }
};

const updateArtwork = async (req, res) => {
  try {
    const { user_id } = req.user;

    const { artwork_id } = req.params;

    const { title, description, tool_id, artstyle_id } = req.body;

    const updatedArtwork = await adArtworkModel.updateArtwork(
      artwork_id,
      user_id,
      title,
      description,
      tool_id,
      artstyle_id,
    );

    if (!updatedArtwork) {
      return res
        .status(404)
        .json({ error: "[PUT /Controller]: Artwork does not exist!" });
    }

    res.status(200).json({
      message: "[PUT /Controller]: Artwork updated successfully!",
      data: updatedArtwork,
    });
  } catch (err) {
    console.error("[PUT /Controller]: Error updating artwork!", err.message);
    res.status(500).json({ error: "[PUT /Controller]: Server Error!" });
  }
};

const deleteArtwork = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { artwork_id } = req.params;

    const deletedArtwork = await adArtworkModel.deleteArtwork(
      artwork_id,
      user_id,
    );

    if (!deletedArtwork) {
      return res
        .status(404)
        .json({ error: "[DELETE /Controller]: Artwork not found!" });
    }

    res.status(200).json({
      message: "[DELETE /Controller]: Artwork deleted successfully!",
      data: deletedArtwork,
    });
  } catch (err) {
    console.error("[DELETE /Controller]: Error deleting artwork!", err.message);
    res.status(500).json({ error: "[DELETE /Controller]: Server error!" });
  }
};

module.exports = {
  fetchAllArtwork,
  fetchArtworkById,
  fetchArtworkByUser,
  addArtwork,
  updateArtwork,
  deleteArtwork,
};
