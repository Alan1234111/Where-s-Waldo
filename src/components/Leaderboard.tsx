import { StyledLeaderboard } from "../styles/Leaderboard.styled";
import { StyledGameChooseContainer } from "../styles/GameChooseContainer.styled";
import { LeadeboardRowContainer } from "./LeadeboardRowContainer";
import { useEffect, useMemo, useState } from "react";
import {
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { gameRef } from "../services/firebase";
import { Link, useLocation } from "react-router-dom";

const temporaryScores = [
  {
    id: "1",
    username: "Alan",
    time: "0:00:21",
    date: "2023-01-12",
  },
  {
    id: "2",
    username: "Alan",
    time: "0:00:21",
    date: "2023-01-12",
  },
];

export const Leaderboard = () => {
  const [games, setGames] = useState();
  const [scores, setScores] = useState();
  const { search } = useLocation();
  const gameId = new URLSearchParams(search).get("game");

  const q = query(gameRef, where("id", "==", "1");

  useEffect(() => {
    getDocs(q).then((snapshot) => {
      const scores = [];

      snapshot.docs.forEach((doc) => {
        scores.push({ ...doc.data(), id: doc.id });
      });

      setScores(scores);
    });

    getDocs(gameRef)
      .then((snapshot) => {
        const games = [];

        snapshot.docs.forEach((doc) => {
          games.push({ ...doc.data(), id: doc.id });
        });

        setGames(games);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(scores);

  return (
    <StyledLeaderboard>
      <h2>Leaderboard</h2>

      <StyledGameChooseContainer>
        {games &&
          games.map((game) => (
            <Link to={`?game=${game.id}`}>
              <h3>{game.name}</h3>
              <img src={game.thumbnailImg} alt="" />
            </Link>
          ))}
      </StyledGameChooseContainer>

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
          {scores &&
            scores.map((score, index) => (
              <LeadeboardRowContainer
                key={score.id}
                place={index + 1}
                username={score.username}
                time={score.time}
                date={score.date}
              />
            ))}
        </tbody>
      </table>
    </StyledLeaderboard>
  );
};
