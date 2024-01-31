import React from "react";
import styles from "./styles/simulate-match.module.css";

const BannerTop = ({
  battingTeam,
  bowlingTeam,
  isFirstInningsOver,
  target,
}) => {
  const t1 = String(battingTeam);
  const t2 = String(bowlingTeam);
  return (
    <div className={`${styles.textDiv}`}>
      <div className={styles.inLineBLock}>
        <h1>{t1}</h1>
        <h1>VS</h1>
        <h1>{t2}</h1>
      </div>
      <h2>
        {isFirstInningsOver === true ? `Second Innings` : `First Innings`}
      </h2>
      <h2>{isFirstInningsOver === true && `Target: ${target}`}</h2>
    </div>
  );
};

export default BannerTop;
