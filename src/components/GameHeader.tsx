import { StyledGameHeader } from "../styles/GameHeader.styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { formatedTime } from "../services/formatedTime";

type HeaderProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isClockRunning: boolean;
};

export const GameHeader = ({
  time,
  setTime,
  isClockRunning,
  characters,
}: HeaderProps) => {
  const { minutes, seconds, milliseconds } = formatedTime(time);

  useEffect(() => {
    let intervalId: number;
    if (isClockRunning) {
      intervalId = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        10
      );
    }
    return () => clearInterval(intervalId);
  }, [isClockRunning]);

  return (
    <StyledGameHeader>
      <Link to="/">Where's Waldo</Link>

      <p className="timer">
        {`${minutes}`}:{`${seconds}`}:{`${milliseconds}`}
      </p>

      <div>
        {characters.map((character) => (
          <img src={character.img} alt="" />
        ))}
      </div>
    </StyledGameHeader>
  );
};
