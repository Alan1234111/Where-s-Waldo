import {StyledGameHeader} from "../styles/GameHeader.styled";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import {Link} from "react-router-dom";

export const GameHeader = () => {
  return (
    <StyledGameHeader>
      <Link to="/">Where's Waldo</Link>

      <p className="timer">00:00:00</p>

      <div>
        <img src={character1} />
        <img src={character2} />
        <img src={character3} />
      </div>
    </StyledGameHeader>
  );
};
