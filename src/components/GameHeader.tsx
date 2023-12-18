import {StyledGameHeader} from "../styles/GameHeader.styled";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {formatTime} from "../services/formatTime";
import {character} from "../types";

type HeaderProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isClockRunning: boolean;
  characters: character[];
};

export const GameHeader = ({time, setTime, isClockRunning, characters}: HeaderProps) => {
  const formatedTime = formatTime(time);

  useEffect(() => {
    let intervalId: number | NodeJS.Timeout;
    if (isClockRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isClockRunning, setTime]);

  return (
    <StyledGameHeader>
      <Link to="/">Where's Waldo</Link>

      <p className="timer">{formatedTime}</p>

      <div>
        {characters.map((character) => (
          <img key={character._id} src={character.img} alt="" />
        ))}
      </div>
    </StyledGameHeader>
  );
};
