import React, { useEffect, useState } from "react";
import { teamsData } from "@/data/teams";
import styles from "./styles/select-teams.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setGameStates,
  resetGameStatistics,
  setGameStatistics,
} from "@/components/game/GameSlice";

const SelectTeams = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team1Options, setTeam1Options] = useState(Object.keys(teamsData));
  const [team2Options, setTeam2Options] = useState(Object.keys(teamsData));
  const [overs, setOvers] = useState(null);
  const [tossWinner, setTossWinner] = useState(null);
  const [battingTeam, setBattingTeam] = useState(null);
  const [bowlingTeam, setBowlingTeam] = useState(null);

  useEffect(() => {
    if (battingTeam !== null && bowlingTeam !== null) {
      saveToStore();
      navigateToSimulation();
    }
  }, [bowlingTeam]);

  const handleTeam1Change = (e) => {
    const selectedTeam = e.target.value;
    setTeam1(selectedTeam);
    setTeam2Options(
      Object.keys(teamsData).filter((team) => team !== selectedTeam)
    );
  };

  const handleTeam2Change = (e) => {
    const selectedTeam = e.target.value;
    setTeam2(selectedTeam);
    setTeam1Options(
      Object.keys(teamsData).filter((team) => team !== selectedTeam)
    );
  };

  const handleOversChange = (e) => {
    setOvers(e.target.value);
  };

  const handleToss = () => {
    setTossWinner(Math.round(Math.random()) + 1);
    console.log(tossWinner);
  };

  const handleBat = () => {
    dispatch(resetGameStatistics);
    saveToStore();
    setBattingTeam(tossWinner === 1 ? team1 : team2);
    setBowlingTeam(tossWinner === 1 ? team2 : team1);
  };

  const handleBowl = () => {
    dispatch(resetGameStatistics);
    saveToStore();
    setBattingTeam(tossWinner === 1 ? team2 : team1);
    setBowlingTeam(tossWinner === 1 ? team1 : team2);
  };

  const saveToStore = () => {
    dispatch(
      setGameStates({
        battingTeam,
        bowlingTeam,
        overs,
      })
    );
    dispatch(
      setGameStatistics({
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
      })
    );
  };

  const navigateToSimulation = () => {
    if (battingTeam && bowlingTeam) {
      console.log({ battingTeam, bowlingTeam });
      router.push("/simulate-match");
    }
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.textDiv}`}>
        <h1>Select Teams</h1>
      </div>

      <div className={`${styles.grid}`}>
        <div className={`${styles.childDIv}`}>
          <h1>Team 1</h1>
          <div className={`${styles.dropDown} `}>
            <label htmlFor="team1">Choose a team: </label>
            <select
              name="team1"
              id="team1"
              value={team1}
              onChange={handleTeam1Change}
              disabled={tossWinner !== null}
            >
              <option value="" disabled>
                Select Team 1
              </option>
              {team1Options.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          {team1 && (
            <div>
              <h2 className={`${styles.teamName}`}>{team1}</h2>
              <table className={`${styles.playersTable}`}>
                {teamsData[team1].map((player, index) => (
                  <tr key={index}>
                    <td>{player}</td>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
        <div className={`${styles.childDIv}`}>
          <h1>Select Overs</h1>
          <div className={`${styles.dropDown}`}>
            <label htmlFor="overs">Choose overs: </label>
            <select
              name="overs"
              id="overs"
              value={overs}
              onChange={handleOversChange}
              disabled={tossWinner !== null}
            >
              <option value="1">1 over</option>
              <option value="2">2 overs</option>
              <option value="3">3 overs</option>
              <option value="4">4 overs</option>
              <option value="5">5 overs</option>
              <option value="10">10 overs</option>
            </select>
          </div>
          {overs && <h2 className={`${styles.teamName}`}>{overs}</h2>}
          {team1 && team2 && overs && (
            <div className={`${styles.tossDiv}`}>
              <button
                className="btn blackBtn"
                onClick={handleToss}
                disabled={tossWinner !== null}
              >
                Toss
              </button>
              {tossWinner && (
                <div>
                  <br />
                  <p>
                    {tossWinner === 1
                      ? `${team1} has won the toss.`
                      : `${team2} has won the toss.`}
                  </p>{" "}
                  <br /> <br />
                  <button className="btn blackBtn" onClick={handleBat}>
                    Bat
                  </button>
                  <button className="btn blackBtn" onClick={handleBowl}>
                    Bowl
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={`${styles.childDIv}`}>
          <h1>Team 2</h1>
          <div className={`${styles.dropDown} `}>
            <label htmlFor="team2">Choose a team: </label>
            <select
              name="team2"
              id="team2"
              value={team2}
              onChange={handleTeam2Change}
              disabled={tossWinner !== null}
            >
              <option value="" disabled>
                Select Team 2
              </option>
              {team2Options.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          {team2 && (
            <div>
              <h2 className={`${styles.teamName}`}>{team2}</h2>
              <table className={`${styles.playersTable}`}>
                {teamsData[team2].map((player, index) => (
                  <tr key={index}>
                    <td>{player}</td>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectTeams;
