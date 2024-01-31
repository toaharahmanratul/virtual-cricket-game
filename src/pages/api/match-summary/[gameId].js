import GameModel from "@/models/game.model";
import connect from "@/config/database";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await handleGet(req, res);
      break;
    default:
      res.status(405).json({ error: "Inavlid request. Use GET method." });
  }
};

const handleGet = async (req, res) => {
  const { gameId } = req.query;

  try {
    await connect();
    const { _id, gameStatistics } = await GameModel.findById(gameId);
    if (!gameStatistics) {
      res.status(200).json({
        success: true,
        message: "Match hasn't started yet!",
        gameStatistics: null,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data fetching Successful!",
        gameStatistics,
      });
    }
  } catch (error) {
    console.error("Error fetching game statistics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
