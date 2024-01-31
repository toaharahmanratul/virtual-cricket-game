import { createSlice } from "@reduxjs/toolkit";

const initialGame = {
  gameStates: {
    battingTeam: "",
    bowlingTeam: "",
    overs: null,
  },
  gameId: null,
  gameStatistics: {
    battingTeam: null,
    bowlingTeam: null,
    previousBowler: null,
    currentBowler: null,
    thisOver: [],
    thisOverBall: 0,
    totalOver: 0,
    totalScore: 0,
    totalWicketFallen: 0,
    isFirstInningsOver: false,
    target: 0,
    isGameOver: false,
    winningText: null,
    rand: null,
    firstInningsStat: null,
    secondInningsStat: null,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    setGameStates: (state, action) => {
      state.gameStates.battingTeam = action.payload.battingTeam;
      state.gameStates.bowlingTeam = action.payload.bowlingTeam;
      state.gameStates.overs = action.payload.overs;
    },
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
    setGameStatistics: (state, action) => {
      state.gameStatistics.battingTeam = action.payload.battingTeam;
      state.gameStatistics.bowlingTeam = action.payload.bowlingTeam;
      state.gameStatistics.previousBowler = action.payload.previousBowler;
      state.gameStatistics.currentBowler = action.payload.currentBowler;
      state.gameStatistics.thisOver = action.payload.thisOver;
      state.gameStatistics.thisOverBall = action.payload.thisOverBall;
      state.gameStatistics.totalOver = action.payload.totalOver;
      state.gameStatistics.totalScore = action.payload.totalScore;
      state.gameStatistics.totalWicketFallen = action.payload.totalWicketFallen;
      state.gameStatistics.isFirstInningsOver =
        action.payload.isFirstInningsOver;
      state.gameStatistics.target = action.payload.target;
      state.gameStatistics.isGameOver = action.payload.isGameOver;
      state.gameStatistics.winningText = action.payload.winningText;
      state.gameStatistics.rand = action.payload.rand;
      state.gameStatistics.firstInningsStat = action.payload.firstInningsStat;
      state.gameStatistics.secondInningsStat = action.payload.secondInningsStat;
    },
  },
});

export const resetGameStatistics = (state) => {
  state.gameStatistics = initialGame.gameStatistics;
};

export const { setGameStates, setGameId, setGameStatistics } = gameSlice.actions;

export default gameSlice.reducer;
