import { StyledGameHeader } from "../styles/GameHeader.styled";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// To do

// type HeaderProps = {
//   time: number;
//   intevalId: React.Dispatch<React.SetStateAction<number>>;
//   isClockRunning: boolean;
// };

export const GameHeader = ({ time }) => {
  const minutes = Math.floor((time.current % 360000) / 6000);
  const seconds = Math.floor((time.current % 6000) / 100);
  const milliseconds = time.current % 100;

  return (
    <StyledGameHeader>
      <Link to="/">Where's Waldo</Link>

      <p className="timer">
        {`${minutes.toString().padStart(2, "0")}`}:
        {`${seconds.toString().padStart(2, "0")}`}:
        {`${milliseconds.toString().padStart(2, "0")}`}
      </p>

      <div>
        <img src={character1} />
        <img src={character2} />
        <img src={character3} />
      </div>
    </StyledGameHeader>
  );
};
