import { StyledGameHeader } from "../styles/GameHeader.styled";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { formatedTime } from "../services/formatedTime";


type HeaderProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isClockRunning: boolean;
};

export const GameHeader = ({ time,setTime, isClockRunning }: HeaderProps) => {
  const {minutes, seconds, milliseconds} = formatedTime(time);

  useEffect(() => {
    let intervalId: number;
    if (isClockRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isClockRunning]);


  return (
    <StyledGameHeader>
      <Link to="/">Where's Waldo</Link>

      <p className="timer">
        {`${minutes}`}:
        {`${seconds}`}:
        {`${milliseconds}`}
      </p>

      <div>
        <img src={character1} />
        <img src={character2} />
        <img src={character3} />
      </div>
    </StyledGameHeader>
  );
};
