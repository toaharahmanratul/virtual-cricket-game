import React from "react";
import styles from "./styles/simulate-match.module.css";

const BowlingSide = ({
  bowlingTeam,
  isFirstInningsOver,
  firstInningsStat,
  secondInningsStat,
  handleBowlerChange,
  currentBowler,
}) => {
  return (
    <div className={`${styles.childDIv}`}>
      <h1>Bowling Team</h1>
      <h2>{bowlingTeam}</h2> <br />
      <div>
        <table className={`${styles.playersTable}`}>
          {!isFirstInningsOver &&
            firstInningsStat.bowlingTeamStat.map((playerStat, index) => (
              <tr key={index}>
                <td
                  className={
                    playerStat.isCurrentBowler
                      ? `${styles.isCurrentBowler}`
                      : ""
                  }
                >
                  {playerStat.player}
                </td>
              </tr>
            ))}
          {isFirstInningsOver &&
            secondInningsStat &&
            secondInningsStat.bowlingTeamStat.map((playerStat, index) => (
              <tr key={index}>
                <td
                  className={
                    playerStat.isCurrentBowler
                      ? `${styles.isCurrentBowler}`
                      : ""
                  }
                >
                  {playerStat.player}
                </td>
              </tr>
            ))}
        </table>
      </div>
      <br />
      <div className={styles.selecBowlerDropdown}>
        <label htmlFor="bowlers">Select a bowler </label>
        <select
          name="bowlers"
          id="bowlers"
          onChange={handleBowlerChange}
          disabled={currentBowler}
        >
          <option value="" disabled>
            You Can't Select Previous Bowler
          </option>
          {!isFirstInningsOver &&
            firstInningsStat.bowlingTeamStat.map(
              (bowler) =>
                !bowler.isPreviousBowler && (
                  <option key={bowler.player} value={bowler.player}>
                    {bowler.player}
                  </option>
                )
            )}
          {isFirstInningsOver &&
            secondInningsStat &&
            secondInningsStat.bowlingTeamStat.map(
              (bowler) =>
                !bowler.isPreviousBowler && (
                  <option key={bowler.player} value={bowler.player}>
                    {bowler.player}
                  </option>
                )
            )}
        </select>
      </div>
    </div>
  );
};

export default BowlingSide;
