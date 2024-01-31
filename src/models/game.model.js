import mongoose from "mongoose";

const { Schema } = mongoose;

const gameSchema = new mongoose.Schema(
  {
    gameStatistics: Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

const GameModel =
  mongoose.models.GameModel || mongoose.model("GameModel", gameSchema);

export default GameModel;
