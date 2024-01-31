import { teamsData } from "@/data/teams";
export const initializeInningsStat = (battingTeam, bowlingTeam) => {
  return {
    battingTeamName: battingTeam,
    bowlingTeamName: bowlingTeam,
    score: 0,
    wickets: 0,
    totalOvers: 0,
    thisOverBalls: 0,
    battingTeamStat: teamsData[battingTeam].map((player, index) => ({
      no: index + 1,
      player,
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      isOnPitch: index < 2 || false,
      isOnStrike: index === 0,
      isOut: false,
    })),
    bowlingTeamStat: teamsData[bowlingTeam].map((player, index) => ({
      no: index + 1,
      player,
      runsGiven: 0,
      wicketsTaken: 0,
      totalBallsBowled: 0,
      isCurrentBowler: false,
      isPreviousBowler: false,
    })),
  };
};
