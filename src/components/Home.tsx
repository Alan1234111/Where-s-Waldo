import { StyledHome } from "../styles/Home.styled";
import { StyledGameChooseContainer } from "../styles/GameChooseContainer.styled";
import santawaldo from "../assets/santawaldo.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <StyledHome>
      <h2>Games</h2>

      <StyledGameChooseContainer>
        <div>
          <h3>Game Name</h3>
          <Link to="game/1">Start Game</Link>
          <img src={santawaldo} alt="" />
        </div>
      </StyledGameChooseContainer>
    </StyledHome>
  );
};
