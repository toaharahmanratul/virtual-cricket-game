import React from "react";
import styles from "./styles/simulate-match.module.css";

const BattingSide = ({
  battingTeam,
  isFirstInningsOver,
  firstInningsStat,
  secondInningsStat,
}) => {
  return (
    <div className={`${styles.childDIv}`}>
      <h1>Batting Team</h1>
      <h2>{battingTeam}</h2> <br />
      <div>
        <table className={`${styles.playersTable}`}>
          {!isFirstInningsOver &&
            firstInningsStat.battingTeamStat.map((playerStat, index) => (
              <tr key={index}>
                <td
                  className={playerStat.isOnPitch ? `${styles.isOnPitch}` : ""}
                >
                  {playerStat.player}
                  {playerStat.isOnStrike && (
                    <span className={styles.star}>*</span>
                  )}
                  {(playerStat.ballsFaced > 0 ||
                    playerStat.isOnPitch ||
                    playerStat.isOut === true) && (
                    <span className={styles.runsBalls}>
                      {`${playerStat.runs} (${playerStat.ballsFaced})`}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          {isFirstInningsOver &&
            secondInningsStat &&
            secondInningsStat.battingTeamStat.map((playerStat, index) => (
              <tr key={index}>
                <td
                  className={playerStat.isOnPitch ? `${styles.isOnPitch}` : ""}
                >
                  {playerStat.player}
                  {playerStat.isOnStrike && (
                    <span className={styles.star}>*</span>
                  )}
                  {(playerStat.ballsFaced > 0 || playerStat.isOnPitch) && (
                    <span className={styles.runsBalls}>
                      {`${playerStat.runs} (${playerStat.ballsFaced})`}
                    </span>
                  )}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default BattingSide;
