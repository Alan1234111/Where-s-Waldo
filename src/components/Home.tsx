import { StyledHome } from "../styles/Home.styled";
import { StyledGameChooseContainer } from "../styles/GameChooseContainer.styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { gameRef } from "../services/firebase";
import { getDocs } from "firebase/firestore";

export const Home = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    getDocs(gameRef)
      .then((snapshot) => {
        let games = [];
        snapshot.docs.forEach((doc) => {
          games.push({ ...doc.data(), id: doc.id });
        });

        setGames(games);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(games);

  return (
    <StyledHome>
      <h2>Games</h2>

      <StyledGameChooseContainer>
        {games &&
          games.map((game) => (
            <div key={game.id}>
              <h3>{game.name}</h3>
              <Link to={`game/${game.id}`}>Start Game</Link>
              <img src={game.thumbnailImg} alt="" />
            </div>
          ))}
      </StyledGameChooseContainer>
    </StyledHome>
  );
};
