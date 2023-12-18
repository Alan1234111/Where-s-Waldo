import {StyledLeaderboard} from "../styles/Leaderboard.styled";
import {StyledGameChooseContainer} from "../styles/GameChooseContainer.styled";
import {LeadeboardRowContainer} from "./LeadeboardRowContainer";
import {useEffect, useState} from "react";
import {getDocs} from "firebase/firestore";
import {gameRef} from "../services/firebase";
import {formatTime} from "../services/formatTime";
import {formatDate} from "../services/formatDate";
import {Game, leaderboard} from "../types";

export const Leaderboard = () => {
  const [games, setGames] = useState<Game[]>([
    {
      id: "",
      name: "",
      img: "",
      thumbnailImg: "",
      characters: [{_id: "", img: "", found: false, name: "", xCord: 0, yCord: 0}],
      leaderboard: [{date: 0, time: 0, username: ""}],
    },
  ]);
  const [leaderboard, setLeaderboard] = useState<leaderboard[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(gameRef);
        const games = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id} as Game));

        setGames(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (name: string) => {
    const choosedGame = games.find((game) => game.name == name);
    const choosedGameLeaderboard = choosedGame?.leaderboard;

    const sortedLeaderboard = choosedGameLeaderboard?.sort((a, b) => a.time - b.time);

    setLeaderboard(sortedLeaderboard);
  };
  return (
    <StyledLeaderboard>
      <h2>Leaderboard</h2>

      <StyledGameChooseContainer>
        {games &&
          games.map((game) => (
            <button key={game.id} onClick={() => handleClick(game.name)}>
              <h3>{game.name}</h3>
              <img src={game.thumbnailImg} alt="" />
            </button>
          ))}
      </StyledGameChooseContainer>
      {leaderboard && (
        <table>
          <thead>
            <tr>
              <td>Place</td>
              <td>Username</td>
              <td>Time</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((score, index) => (
              <LeadeboardRowContainer key={index} place={index + 1} username={score?.username} time={formatTime(score?.time)} date={formatDate(score?.date)} />
            ))}
          </tbody>
        </table>
      )}
    </StyledLeaderboard>
  );
};
