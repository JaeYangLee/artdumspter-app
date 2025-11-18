const AdToolsModel = require("../model/AdToolsModel");

const fetchAllTools = async (req, res) => {
  try {
    const allTools = await AdToolsModel.fetchAllTools();
    res.status(200).json({
      message: "[GET /ToolsController]: All tools fetched!",
      data: allTools,
    });
  } catch (err) {
    console.error("[GET /ToolsController]: Error fetching tools!", err.message);
    res.status(500).json({ error: "[GET /ToolsController]: Server error!" });
  }
};

const fetchToolById = async (req, res) => {
  try {
    const { tool_id } = req.params;

    const tool = await AdToolsModel.fetchToolById(tool_id);

    res
      .status(200)
      .json({ message: "[GET /ToolsController]: Tool fetched!", data: tool });
  } catch (err) {
    console.error("[GET /ToolsController]: Error fetching tool!", err.message);
    res.status(500).json({ error: "[GET /ToolsController]: Server error!" });
  }
};

module.exports = {
  fetchAllTools,
  fetchToolById,
};
