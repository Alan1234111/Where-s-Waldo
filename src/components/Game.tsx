import { StyledGame } from "../styles/Game.styled";
import { GameHeader } from "./GameHeader";
import { Footer } from "./Footer";
import { StartModal } from "./StartModal";
import { WinModal } from "./WinModal";
import { useEffect, useState, useRef } from "react";
import santawadlo from "../assets/santawaldo.png";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import toast from "react-hot-toast";
import { GameMapContainer } from "./GameMapContainer";
import { Coords } from "../types";

const temporaryDB = [
  {
    _id: "1",
    name: "Black elf",
    xCord: 0.41,
    yCord: 0.76,
    img: character1,
    found: false,
  },
  {
    _id: "2",
    name: "Blond elf",
    xCord: 0.34,
    yCord: 0.4,
    img: character2,
    found: false,
  },

  {
    _id: "3",
    name: "Ladder elf",
    xCord: 0.95,
    yCord: 0.62,
    img: character3,
    found: false,
  },
];

export const Game = () => {
  const [characters, setCharacters] = useState(temporaryDB);
  const [isWin, setIsWin] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [settingDropdown, setSettingDropdown] = useState({
    isShown: false,
    xCord: 0,
    yCord: 0,
  });
  const [clickPosition, setClickPosition] = useState({
    xCord: 0,
    yCord: 0,
  });

  const time = useRef(0);
  const isClockRunning = useRef(false);
  const intervalId = useRef<number | null>(null);

  // const [time, setTime] = useState(0);
  // const [isClockRunning, setIsClockRunning] = useState(false);

  const startTimer = () => {
    isClockRunning.current = true;
    intervalId.current = setInterval(() => {
      time.current += 1;
    }, 10);
  };

  console.log(time.current);

  const stopTimer = () => {
    isClockRunning.current = false;
    clearInterval(intervalId.current!);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId.current!);
    };
  }, []);

  useEffect(() => {
    checkWin();
  }, [characters]);

  const checkWin = () => {
    const characterLeftLength = characters.filter(
      (character) => character.found !== true
    ).length;

    if (characterLeftLength <= 0) {
      setIsWin(true);
      isClockRunning.current = false;
    }
  };

  const handleGuess = (
    characterName: string,
    characterId: string,
    characterCoords: Coords
  ) => {
    const tolerance = 0.03;

    const toleranceX =
      Math.abs(clickPosition.xCord - characterCoords.xCord) <=
      tolerance;
    const toleranceY =
      Math.abs(clickPosition.yCord - characterCoords.yCord) <=
      tolerance;

    setSettingDropdown((prev) => ({
      ...prev,
      isShown: !prev.isShown,
    }));

    if (toleranceX && toleranceY) {
      toast.success(`You Found ${characterName} `);
      updateCharacterFoundStatus(characterId);
    } else {
      toast.error("Try Again!");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    const screenWidth = target.width;
    const screenHeight = target.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const coords = normalizeCoordinates(
      mouseX,
      mouseY,
      screenWidth,
      screenHeight
    );

    setClickPosition(coords);
    showDropdown(coords);
  };

  const showDropdown = (coords: Coords) => {
    let xCordDropdown = coords.xCord * 100;
    let yCordDropdown = coords.yCord * 100;

    if (xCordDropdown >= 85) {
      xCordDropdown = 75;
    }

    if (yCordDropdown >= 90) {
      yCordDropdown = 90;
    }

    if (yCordDropdown <= 5) {
      yCordDropdown = 7;
    }

    setSettingDropdown((prev) => ({
      isShown: !prev.isShown,
      xCord: xCordDropdown,
      yCord: yCordDropdown,
    }));
  };

  const normalizeCoordinates = (
    xCord: number,
    yCord: number,
    screenWidth: number,
    screenHeight: number
  ) => {
    const normalizedX = xCord / screenWidth;
    const normalizedY = yCord / screenHeight;

    const roundedX = Math.round(normalizedX * 100) / 100;
    const roundedY = Math.round(normalizedY * 100) / 100;

    return { xCord: roundedX, yCord: roundedY };
  };

  const updateCharacterFoundStatus = (characterId: string) => {
    setCharacters((prev) => {
      const indexToChange = prev.findIndex(
        (character) => character._id === characterId
      );

      if (indexToChange !== -1) {
        const updatedCharacters = [...prev];

        updatedCharacters[indexToChange] = {
          ...updatedCharacters[indexToChange],
          found: true,
        };

        return updatedCharacters;
      }

      return prev;
    });
  };

  return (
    <StyledGame>
      <GameHeader
        time={time}
        intevalId={intervalId}
        isClockRunning={isClockRunning}
      />

      <GameMapContainer
        mapImage={santawadlo}
        characters={characters}
        settingDropdown={settingDropdown}
        handleClick={handleClick}
        handleGuess={handleGuess}
        clickPositionX={clickPosition.xCord}
        clickPositionY={clickPosition.yCord}
      />

      {showStartModal && (
        <StartModal
          startTimer={startTimer}
          setIsClockRunning={isClockRunning}
          setShowStartModal={setShowStartModal}
        />
      )}

      {isWin && <WinModal time={time} />}

      <Footer />
    </StyledGame>
  );
};
