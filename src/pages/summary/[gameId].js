import React from "react";
import styles from "@/components/game/summary/styles/summary.module.css";

const Summary = ({ gameId, gameStatistics }) => {
  if (!gameStatistics) {
    return (
      <div>
        <h1>Match Hasn't Started yet!</h1>
        <p>Game ID: {gameId}</p>
      </div>
    );
  }
  const firstInningsStat = gameStatistics.firstInningsStat;
  const secondInningsStat = gameStatistics.secondInningsStat;

  console.log(gameStatistics);

  const renderInningsDiv = (InningsStat) => {
    return (
      <div className={`${styles.inningsDiv}`}>
        <div className={`${styles.battingSummary}`}>
          <h1>
            {`${InningsStat.battingTeamName} `}
            &nbsp;
            <span style={{ color: "aliceblue" }}>{`${InningsStat.score}-${
              InningsStat.wickets
            } (${
              InningsStat.totalOvers + parseInt(InningsStat.thisOverBalls / 6)
            }.${InningsStat.thisOverBalls % 6} Overs)`}</span>
          </h1>

          <table>
            <thead>
              <tr>
                <th>Batsman</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {InningsStat.battingTeamStat.map((player) => (
                <tr key={player.no}>
                  <td>
                    {player.isOnStrike ? (
                      <>{player.player} *</>
                    ) : (
                      <>{player.player}</>
                    )}
                  </td>
                  {player.ballsFaced > 0 ? (
                    <>
                      <td>{player.runs}</td>
                      <td>{player.ballsFaced}</td>
                      <td>{player.fours}</td>
                      <td>{player.sixes}</td>
                      <td>
                        {((player.runs / player.ballsFaced) * 100).toFixed(2)}
                      </td>
                    </>
                  ) : (
                    <>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`${styles.bowlingSummary}`}>
          <h1>{InningsStat.bowlingTeamName}</h1>
          <table>
            <thead>
              <tr>
                <th>Bowler</th>
                <th>Overs</th>
                <th>Runs Given</th>
                <th>Wickets</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              {InningsStat.bowlingTeamStat.map((player) => (
                <tr key={player.no}>
                  <td>{player.player}</td>
                  {player.totalBallsBowled > 0 ? (
                    <>
                      <td>{`${Math.floor(player.totalBallsBowled / 6)}.${
                        player.totalBallsBowled % 6
                      }`}</td>
                      <td>{player.runsGiven}</td>
                      <td>{player.wicketsTaken}</td>
                      <td>
                        {player.totalBallsBowled > 0
                          ? (
                              player.runsGiven /
                                (player.totalBallsBowled / 6) || 0
                            ).toFixed(2)
                          : "-"}
                      </td>
                    </>
                  ) : (
                    <>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.textDiv}`}>
        <h1>Score Board</h1>
        {gameStatistics.winningText && <h2>{gameStatistics.winningText}</h2>}
      </div>
      <div className={`${styles.parentDiv}`}>
        {!gameStatistics.isFirstInningsOver && <h1>First Innings</h1>}
        {renderInningsDiv(firstInningsStat)}
      </div>
      <div className={`${styles.parentDiv}`}>
        <h1>Second Innings</h1>
        {gameStatistics.isFirstInningsOver &&
          renderInningsDiv(secondInningsStat)}
      </div>
    </div>
  );
};

export default Summary;

export const getServerSideProps = async (context) => {
  const { gameId } = context.params;
  try {
    const response = await fetch(
      `https://virtual-cricket-game.vercel.app/api/match-summary/${gameId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    const { success, message, gameStatistics } = data;

    if (!success) {
      console.error("Error fetching match summary:", message);
      return {
        notFound: true,
      };
    }

    return {
      props: {
        gameId,
        gameStatistics,
      },
    };
  } catch (error) {
    console.error("Error fetching match summary:", error);
    return {
      props: {
        gameId,
        gameStatistics: null,
      },
    };
  }
};
