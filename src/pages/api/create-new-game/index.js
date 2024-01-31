import GameModel from "@/models/game.model";
import connect from "@/config/database";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }
  try {
    const { gameStatistics } = await req.body;
    await connect();
    const newGame = await GameModel.create({
      gameStatistics,
    });
    res.status(200).json({
      success: true,
      message: "Game created successfully",
      _id: newGame._id,
      gameStatistics: newGame.gameStatistics,
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error From create-new-user." });
  }
};
