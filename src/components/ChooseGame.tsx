import {StyledChooseGame} from "../styles/ChooseGame.styled";
import santawaldo from "../assets/santawaldo.png";
import {Link} from "react-router-dom";

export const ChooseGame = () => {
  return (
    <StyledChooseGame>
      <h2>Games</h2>

      <section>
        <div>
          <h3>Game Name</h3>
          <Link to="game/1">Start Game</Link>
          <img src={santawaldo} alt="" />
        </div>
      </section>
    </StyledChooseGame>
  );
};