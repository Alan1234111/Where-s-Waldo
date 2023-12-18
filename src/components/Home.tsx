import {StyledHome} from "../styles/Home.styled";
import {StyledGameChooseContainer} from "../styles/GameChooseContainer.styled";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {gameRef} from "../services/firebase";
import {getDocs} from "firebase/firestore";
import {character, leaderboard} from "../types";

type Game = {
  id: string;
  name: string;
  img: string;
  thumbnailImg: string;
  characters: character[];
  leaderboard: leaderboard[];
};

export const Home = () => {
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
