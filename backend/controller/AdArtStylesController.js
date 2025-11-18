const AdArtStylesModel = require("../model/AdArtStylesModel");

const fetchAllArtStyles = async (req, res) => {
  try {
    const allArtstyles = await AdArtStylesModel.fetchAllArtStyles();

    res.status(200).json({
      message: "[GET /ArtStylesController]: All art styles fetached!",
      data: allArtstyles,
    });
  } catch (err) {
    console.error(
      "[GET /ArtStyleController]: Error fetching all art styles!",
      err.message
    );
    res.status(500).json({ error: "[GET /ArtStylesController]" });
  }
};

const fetchArtStyleById = async (req, res) => {
  try {
    const { artstyle_id } = req.params;
    const artStyle = await AdArtStylesModel.fetchArtStyleById(artstyle_id);

    res.status(200).json({
      message: "[GET /ArtStylesController]: Art style fetched!",
      data: artStyle,
    });
  } catch (err) {
    console.error(
      "[GET /ArtStylesController]: Error fetching art style!",
      err.message
    );
    res
      .status(500)
      .json({ error: "[GET /ArtStylesController]: Server Error!" });
  }
};

module.exports = {
  fetchAllArtStyles,
  fetchArtStyleById,
};
