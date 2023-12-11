import { StyledGame } from "../styles/Game.styled";
import { StyledDropdown } from "../styles/Dropdown.styled";
import { GameHeader } from "./GameHeader";
import { StyledCursorClicked } from "../styles/CursorClicked.styled";
import { Footer } from "./Footer";
import { WinModal } from "./WinModal";
import { useEffect, useState } from "react";
import santawadlo from "../assets/santawaldo.png";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import toast, { Toaster } from "react-hot-toast";

type Coords = { x: number; y: number };

const temporaryDB = [
  {
    _id: "1",
    name: "Black elf",
    cordX: 0.41,
    cordY: 0.76,
    img: character1,
    found: false,
  },
  {
    _id: "2",
    name: "Blond elf",
    cordX: 0.34,
    cordY: 0.4,
    img: character2,
    found: false,
  },

  {
    _id: "3",
    name: "Ladder elf",
    cordX: 0.95,
    cordY: 0.62,
    img: character3,
    found: false,
  },
];

export const Game = () => {
  const [characters, setCharacters] = useState(temporaryDB);

  const [settingDropdown, setSettingDropdown] = useState({
    isShown: false,
    xCord: 0,
    yCord: 0,
  });

  const [clickPosition, setClickPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const characterLeftLength = characters.filter(
      (character) => character.found !== true
    ).length;

    if (characterLeftLength <= 0) {
      setIsWin(true);
    }
  }, [characters]);

  const normalizeCoordinates = (
    x: number,
    y: number,
    screenWidth: number,
    screenHeight: number
  ) => {
    const normalizedX = x / screenWidth;
    const normalizedY = y / screenHeight;

    const roundedX = Math.round(normalizedX * 100) / 100;
    const roundedY = Math.round(normalizedY * 100) / 100;

    return { x: roundedX, y: roundedY };
  };

  const handleGuess = (
    characterName: string,
    characterId: string,
    characterCoords: Coords
  ) => {
    const tolerance = 0.03;

    const toleranceX =
      Math.abs(clickPosition.x - characterCoords.x) <= tolerance;
    const toleranceY =
      Math.abs(clickPosition.y - characterCoords.y) <= tolerance;

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
    let xCordDropdown = coords.x * 100;
    let yCordDropdown = coords.y * 100;

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

  return (
    <StyledGame>
      <GameHeader />
      <div className="photo-container">
        <img
          className="game-photo"
          src={santawadlo}
          onClick={handleClick}
        />
        <Toaster
          containerStyle={{
            position: "fixed",
            top: 110,
          }}
        />
        {settingDropdown.isShown && (
          <>
            <StyledCursorClicked
              $x={clickPosition.x * 100}
              $y={clickPosition.y * 100}
            />

            <StyledDropdown
              $x={settingDropdown?.xCord}
              $y={settingDropdown?.yCord}
            >
              {characters.map((character) => {
                if (!character.found) {
                  return (
                    <button
                      onClick={() =>
                        handleGuess(character.name, character._id, {
                          x: character.cordX,
                          y: character.cordY,
                        })
                      }
                    >
                      <img src={character.img} />
                      <p>{character.name}</p>
                    </button>
                  );
                }
              })}
            </StyledDropdown>
          </>
        )}
      </div>
      {isWin && <WinModal />}

      <Footer />
    </StyledGame>
  );
};
