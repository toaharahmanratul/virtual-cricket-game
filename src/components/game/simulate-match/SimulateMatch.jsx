import React, { useEffect, useState } from "react";
import { teamAbbreviations } from "@/data/teams";
import styles from "./styles/simulate-match.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { initializeInningsStat } from "@/utils/inningsUtils";
import { setGameStatistics } from "../GameSlice";
import BannerTop from "./BannerTop";
import BattingSide from "./BattingSide";
import BowlingSide from "./BowlingSide";

let randomBallValue;
const ballPossibilities = [0, 1, 2, 3, 4, 6, "wk"];

const SimulateMatch = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const gameStates = useSelector((state) => state.game.gameStates);
  const gameStatistics = useSelector((state) => state.game.gameStatistics);
  const gameId = useSelector((state) => state.game.gameId);

  const overs = gameStates.overs;
  const [battingTeam, setBattingTeam] = useState(
    gameStatistics.battingTeam || gameStates.battingTeam
  );
  const [bowlingTeam, setBowlingTeam] = useState(
    gameStatistics.bowlingTeam || gameStates.bowlingTeam
  );
  const [previousBowler, setPreviousBowler] = useState(
    gameStatistics.previousBowler || null
  );
  const [currentBowler, setCurrentBowler] = useState(
    gameStatistics.currentBowler || null
  );
  const [thisOver, setThisOver] = useState(gameStatistics.thisOver || []);
  const [thisOverBall, setThisOverBall] = useState(
    gameStatistics.thisOverBall || 0
  );
  const [totalOver, setTotalOver] = useState(gameStatistics.totalOver || 0);
  const [totalScore, setTotalScore] = useState(gameStatistics.totalScore || 0);
  const [totalWicketFallen, setTotalWicketFallen] = useState(
    gameStatistics.totalWicketFallen || 0
  );
  const [isFirstInningsOver, setIsFirstInningsOver] = useState(
    gameStatistics.isFirstInningsOver || false
  );
  const [target, setTarget] = useState(gameStatistics.target || 0);
  const [isGameOver, setIsGameOver] = useState(
    gameStatistics.isGameOver || false
  );
  const [winningText, setTwinningText] = useState(
    gameStatistics.winningText || null
  );
  const [rand, setRand] = useState(gameStatistics.rand || null);

  const [firstInningsStat, setFirstInningsStat] = useState(
    gameStatistics.firstInningsStat ||
      initializeInningsStat(battingTeam, bowlingTeam)
  );
  const [secondInningsStat, setSecondInningsStat] = useState(
    gameStatistics.secondInningsStat || null
  );
  const [mounted, setMounted] = useState(false);

  console.log(gameStatistics);
  console.log(gameId);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (thisOverBall === 6) {
      setThisOverBall(0);
      setTotalOver((over) => over + 1);
      setThisOver([]);
    }
    if (
      parseInt(totalOver) === parseInt(overs) ||
      totalWicketFallen === 10 ||
      (isFirstInningsOver && parseInt(totalScore) >= parseInt(target))
    ) {
      if (!isFirstInningsOver) {
        setTarget(totalScore + 1);
        setIsFirstInningsOver(true);
        setTotalScore(0);
        setTotalWicketFallen(0);
        setThisOverBall(0);
        setTotalOver(0);
        setThisOver([]);
        swapTeams();
      } else if (isFirstInningsOver) {
        setIsGameOver(true);
      }
    }
    if (isGameOver) {
      if (parseInt(totalScore) >= parseInt(target)) {
        setTwinningText(
          `${battingTeam} won by ${10 - totalWicketFallen} wickets!`
        );
      } else if (parseInt(totalScore) === parseInt(target) - 1) {
        setTwinningText(`Match Tied!`);
      } else {
        setTwinningText(
          `${bowlingTeam} won by ${target - 1 - totalScore} runs!`
        );
      }
    }
  }, [
    thisOverBall,
    totalOver,
    totalWicketFallen,
    isFirstInningsOver,
    isGameOver,
    mounted,
  ]);

  // For batting Stat
  useEffect(() => {
    if (!mounted) return;
    if (!isGameOver) {
      if (!isFirstInningsOver) {
        if (!(thisOver.length === 0 && totalOver > 0)) {
          setFirstInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnStrike) {
                  if (rand === 0 || (rand && rand !== "wk")) {
                    return {
                      ...playerStat,
                      runs: playerStat.runs + parseInt(rand),
                      ballsFaced: playerStat.ballsFaced + 1,
                      fours:
                        parseInt(rand) === 4
                          ? playerStat.fours + 1
                          : playerStat.fours,
                      sixes:
                        parseInt(rand) === 6
                          ? playerStat.sixes + 1
                          : playerStat.sixes,
                    };
                  } else if (rand && rand === "wk") {
                    return {
                      ...playerStat,
                      ballsFaced: playerStat.ballsFaced + 1,
                      isOut: true,
                      isOnStrike: false,
                      isOnPitch: false,
                    };
                  }
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              score: totalScore,
              wickets: totalWicketFallen,
              totalOvers: totalOver,
              thisOverBalls: thisOverBall,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
          if (rand && rand === "wk" && totalWicketFallen !== 10) {
            setFirstInningsStat((prevStat) => {
              const updatedBattingTeamStat = prevStat.battingTeamStat.map(
                (playerStat) => {
                  if (playerStat.no === totalWicketFallen + 2) {
                    return {
                      ...playerStat,
                      isOnPitch: true,
                      isOnStrike: true,
                    };
                  }
                  return playerStat;
                }
              );
              return {
                ...prevStat,
                battingTeamStat: updatedBattingTeamStat,
              };
            });
          }
        }
        if (thisOver.length === 0 && totalOver > 0) {
          setFirstInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnPitch) {
                  return {
                    ...playerStat,
                    isOnStrike: !playerStat.isOnStrike,
                  };
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
          if (rand === 1 || rand === 3) {
            setFirstInningsStat((prevStat) => {
              const updatedBattingTeamStat = prevStat.battingTeamStat.map(
                (playerStat) => {
                  if (playerStat.isOnPitch) {
                    return {
                      ...playerStat,
                      isOnStrike: !playerStat.isOnStrike,
                    };
                  }
                  return playerStat;
                }
              );
              return {
                ...prevStat,
                battingTeamStat: updatedBattingTeamStat,
              };
            });
          }
        }
        if (rand === 1 || rand === 3) {
          setFirstInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnPitch) {
                  return {
                    ...playerStat,
                    isOnStrike: !playerStat.isOnStrike,
                  };
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
        }
      } else if (isFirstInningsOver && secondInningsStat !== null) {
        if (!(thisOver.length === 0 && totalOver > 0)) {
          setSecondInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnStrike) {
                  if (rand === 0 || (rand && rand !== "wk")) {
                    return {
                      ...playerStat,
                      runs: playerStat.runs + parseInt(rand),
                      ballsFaced: playerStat.ballsFaced + 1,
                      fours:
                        parseInt(rand) === 4
                          ? playerStat.fours + 1
                          : playerStat.fours,
                      sixes:
                        parseInt(rand) === 6
                          ? playerStat.sixes + 1
                          : playerStat.sixes,
                    };
                  } else if (rand && rand === "wk") {
                    return {
                      ...playerStat,
                      ballsFaced: playerStat.ballsFaced + 1,
                      isOut: true,
                      isOnStrike: false,
                      isOnPitch: false,
                    };
                  }
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              score: totalScore,
              wickets: totalWicketFallen,
              totalOvers: totalOver,
              thisOverBalls: thisOverBall,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
          if (rand && rand === "wk" && totalWicketFallen !== 10) {
            setSecondInningsStat((prevStat) => {
              const updatedBattingTeamStat = prevStat.battingTeamStat.map(
                (playerStat) => {
                  if (playerStat.no === totalWicketFallen + 2) {
                    return {
                      ...playerStat,
                      isOnPitch: true,
                      isOnStrike: true,
                    };
                  }
                  return playerStat;
                }
              );
              return {
                ...prevStat,
                battingTeamStat: updatedBattingTeamStat,
              };
            });
          }
        }
        if (thisOver.length === 0 && totalOver > 0) {
          setSecondInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnPitch) {
                  return {
                    ...playerStat,
                    isOnStrike: !playerStat.isOnStrike,
                  };
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
          if (rand === 1 || rand === 3) {
            setSecondInningsStat((prevStat) => {
              const updatedBattingTeamStat = prevStat.battingTeamStat.map(
                (playerStat) => {
                  if (playerStat.isOnPitch) {
                    return {
                      ...playerStat,
                      isOnStrike: !playerStat.isOnStrike,
                    };
                  }
                  return playerStat;
                }
              );
              return {
                ...prevStat,
                battingTeamStat: updatedBattingTeamStat,
              };
            });
          }
        }
        if (rand === 1 || rand === 3) {
          setSecondInningsStat((prevStat) => {
            const updatedBattingTeamStat = prevStat.battingTeamStat.map(
              (playerStat) => {
                if (playerStat.isOnPitch) {
                  return {
                    ...playerStat,
                    isOnStrike: !playerStat.isOnStrike,
                  };
                }
                return playerStat;
              }
            );
            return {
              ...prevStat,
              battingTeamStat: updatedBattingTeamStat,
            };
          });
        }
      } else if (isFirstInningsOver && secondInningsStat === null) {
        setSecondInningsStat(initializeInningsStat(battingTeam, bowlingTeam));
      }
    }
  }, [thisOver, mounted]);

  // For bowling Stat
  useEffect(() => {
    if (!mounted) return;
    if (!isFirstInningsOver) {
      if ((rand || rand === 0) && !(thisOver.length === 0 && totalOver > 0)) {
        setFirstInningsStat((prevStat) => {
          const updatedBowlingTeamStat = prevStat.bowlingTeamStat.map(
            (playerStat) => {
              if (playerStat.isCurrentBowler) {
                if (rand !== "wk") {
                  return {
                    ...playerStat,
                    totalBallsBowled: playerStat.totalBallsBowled + 1,
                    runsGiven: playerStat.runsGiven + parseInt(rand),
                  };
                } else if (rand === "wk") {
                  return {
                    ...playerStat,
                    totalBallsBowled: playerStat.totalBallsBowled + 1,
                    wicketsTaken: playerStat.wicketsTaken + 1,
                  };
                }
              }
              return playerStat;
            }
          );

          return {
            ...prevStat,
            bowlingTeamStat: updatedBowlingTeamStat,
          };
        });
      }
      if (thisOver.length === 0 && totalOver > 0) {
        setPreviousBowler(currentBowler);
        setCurrentBowler(null);
        setRand(null);
      }
    } else if (isFirstInningsOver) {
      if ((rand || rand === 0) && !(thisOver.length === 0 && totalOver > 0)) {
        setSecondInningsStat((prevStat) => {
          const updatedBowlingTeamStat = prevStat.bowlingTeamStat.map(
            (playerStat) => {
              if (playerStat.isCurrentBowler) {
                if (rand !== "wk") {
                  return {
                    ...playerStat,
                    totalBallsBowled: playerStat.totalBallsBowled + 1,
                    runsGiven: playerStat.runsGiven + parseInt(rand),
                  };
                } else if (rand === "wk") {
                  return {
                    ...playerStat,
                    totalBallsBowled: playerStat.totalBallsBowled + 1,
                    wicketsTaken: playerStat.wicketsTaken + 1,
                  };
                }
              }
              return playerStat;
            }
          );

          return {
            ...prevStat,
            bowlingTeamStat: updatedBowlingTeamStat,
          };
        });
      }
      if (thisOver.length === 0 && totalOver > 0) {
        setPreviousBowler(currentBowler);
        setCurrentBowler(null);
        setRand(null);
      }
    }

    // To store
    saveStatToStore();
  }, [thisOver, mounted]);

  // For handling bowler change
  useEffect(() => {
    if (!mounted) return;
    if (!isFirstInningsOver) {
      setFirstInningsStat((prevStat) => {
        const updatedBowlingTeamStat = prevStat.bowlingTeamStat.map(
          (playerStat) => {
            if (
              playerStat.isPreviousBowler &&
              playerStat.player !== previousBowler
            ) {
              return {
                ...playerStat,
                isPreviousBowler: false,
              };
            }
            if (playerStat.player === previousBowler) {
              return {
                ...playerStat,
                isCurrentBowler: false,
                isPreviousBowler: true,
              };
            }
            if (playerStat.player === currentBowler) {
              return {
                ...playerStat,
                isPreviousBowler: false,
                isCurrentBowler: true,
              };
            }
            return {
              ...playerStat,
            };
          }
        );
        return {
          ...prevStat,
          bowlingTeamStat: updatedBowlingTeamStat,
        };
      });
    } else {
      setSecondInningsStat((prevStat) => {
        const updatedBowlingTeamStat = prevStat.bowlingTeamStat.map(
          (playerStat) => {
            if (
              playerStat.isPreviousBowler &&
              playerStat.player !== previousBowler
            ) {
              return {
                ...playerStat,
                isPreviousBowler: false,
              };
            }
            if (playerStat.player === previousBowler) {
              return {
                ...playerStat,
                isCurrentBowler: false,
                isPreviousBowler: true,
              };
            }
            if (playerStat.player === currentBowler) {
              return {
                ...playerStat,
                isPreviousBowler: false,
                isCurrentBowler: true,
              };
            }
            return {
              ...playerStat,
            };
          }
        );
        return {
          ...prevStat,
          bowlingTeamStat: updatedBowlingTeamStat,
        };
      });
    }
  }, [currentBowler, mounted]);

  // For real time DB update
  useEffect(() => {
    updateGameStat();
  }, [
    battingTeam,
    bowlingTeam,
    previousBowler,
    currentBowler,
    thisOver,
    thisOverBall,
    totalOver,
    totalScore,
    totalWicketFallen,
    isFirstInningsOver,
    target,
    isGameOver,
    winningText,
    rand,
    firstInningsStat,
    secondInningsStat,
  ]);

  const updateGameStat = async () => {
    try {
      const res = await fetch(`/api/save-game/${gameId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameStatistics: {
            battingTeam,
            bowlingTeam,
            previousBowler,
            currentBowler,
            thisOver,
            thisOverBall,
            totalOver,
            totalScore,
            totalWicketFallen,
            isFirstInningsOver,
            target,
            isGameOver,
            winningText,
            rand,
            firstInningsStat,
            secondInningsStat,
          },
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        const { gameStat } = data;
        // console.log("Update Function: ", gameStat);
      }
    } catch (error) {
      console.error("Error Updating Statistics", error);
    }
  };

  const handleBowlerChange = (e) => {
    setCurrentBowler(e.target.value);
  };

  const handleSimulateBall = () => {
    const randomIndex = Math.floor(Math.random() * ballPossibilities.length);
    randomBallValue = ballPossibilities[randomIndex];
    const updatedOver = [...thisOver, randomBallValue];
    setThisOver(updatedOver);
    setRand(randomBallValue);
    setThisOverBall((balls) => balls + 1);
    if (randomBallValue === "wk") {
      setTotalWicketFallen((wickets) => wickets + 1);
    } else {
      setTotalScore((score) => score + parseInt(randomBallValue));
    }
  };

  const swapTeams = () => {
    const currentBattingTeam = battingTeam;
    const currentBowlingTeam = bowlingTeam;

    setBattingTeam(currentBowlingTeam);
    setBowlingTeam(currentBattingTeam);
    setCurrentBowler(null);
    setPreviousBowler(null);
  };

  const saveStatToStore = () => {
    dispatch(
      setGameStatistics({
        battingTeam,
        bowlingTeam,
        previousBowler,
        currentBowler,
        thisOver,
        thisOverBall,
        totalOver,
        totalScore,
        totalWicketFallen,
        isFirstInningsOver,
        target,
        isGameOver,
        winningText,
        rand,
        firstInningsStat,
        secondInningsStat,
      })
    );
  };

  const handleMatchSummary = () => {
    updateGameStat();
    router.push(`/summary/${gameId}`);
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <BannerTop
        battingTeam={battingTeam}
        bowlingTeam={bowlingTeam}
        isFirstInningsOver={isFirstInningsOver}
        target={target}
      />

      <div className={`${styles.grid}`}>
        <BattingSide
          battingTeam={battingTeam}
          isFirstInningsOver={isFirstInningsOver}
          firstInningsStat={firstInningsStat}
          secondInningsStat={secondInningsStat}
        />

        <div className={`${styles.middleDiv}`}>
          <div className={`${styles.scoreDiv}`}>
            <h1
              className={`${styles.bowlTeam}`}
            >{`${teamAbbreviations[bowlingTeam]}`}</h1>
            <h4 className={`${styles.vs}`}>vs</h4>
            <h1 className={`${styles.scoreTeam}`}>
              {teamAbbreviations[battingTeam]}
            </h1>
            <h1
              className={`${styles.runWicketCount}`}
            >{`${totalScore}-${totalWicketFallen}`}</h1>
            <h1
              className={`${styles.oversCount}`}
            >{`${totalOver}.${thisOverBall} overs (${overs})`}</h1>
          </div>
          <div className={`${styles.thisOverDiv}`}>
            <h3>{`THIS OVER: ${thisOver.map((element) => ` ${element}`)}`}</h3>
          </div>

          <div className={`${styles.needRunsDiv}`}>
            {isFirstInningsOver && !isGameOver && (
              <h1>{`Need ${target - totalScore} more from ${
                overs * 6 - (totalOver * 6 + thisOverBall)
              } balls`}</h1>
            )}
            {isGameOver && <h1>{winningText}</h1>}
          </div>

          <div className={`${styles.simulationDiv}`}>
            <button
              className={`btn blackBtn`}
              onClick={handleSimulateBall}
              disabled={isGameOver || !currentBowler}
            >
              Simulate Ball
            </button>
          </div>
          <div className={`${styles.summaryDiv}`}>
            <button className={`btn`} onClick={handleMatchSummary}>
              Match Summary
            </button>
          </div>
        </div>

        <BowlingSide
          bowlingTeam={bowlingTeam}
          isFirstInningsOver={isFirstInningsOver}
          firstInningsStat={firstInningsStat}
          secondInningsStat={secondInningsStat}
          handleBowlerChange={handleBowlerChange}
          currentBowler={currentBowler}
        />
      </div>
    </div>
  );
};

export default SimulateMatch;
