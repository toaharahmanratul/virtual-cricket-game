import GameModel from "@/models/game.model";
import connect from "@/config/database";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      await handlePost(req, res);
      break;
    default:
      res.status(405).json({ error: "Inavlid request. Use POST method." });
  }
};

const handlePost = async (req, res) => {
  const { gameId } = req.query;
  const { gameStatistics } = req.body;

  try {
    await connect();
    await GameModel.findByIdAndUpdate(
      gameId,
      { $set: { gameStatistics } },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated Statistics",
      gameStatistics,
    });
  } catch (error) {
    console.error("Error saving game statistics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
