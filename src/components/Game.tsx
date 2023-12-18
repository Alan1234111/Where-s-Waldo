import {StyledGame} from "../styles/Game.styled";
import {GameHeader} from "./GameHeader";
import {Footer} from "./Footer";
import {StartModal} from "./StartModal";
import {WinModal} from "./WinModal";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GameMapContainer} from "./GameMapContainer";
import {Coords} from "../types";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../services/firebase";

export const Game = () => {
  const params = useParams<{id: string}>();
  const [characters, setCharacters] = useState([
    {
      _id: "",
      name: "",
      xCord: 0,
      yCord: 0,
      img: "",
      found: false,
    },
  ]);
  const [gameMap, setGameMap] = useState("");
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

  const [time, setTime] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  useEffect(() => {
    let paramsId: string;
    if (params.id) {
      paramsId = params.id;
    } else {
      return;
    }

    const fetchData = async () => {
      const docRef = doc(db, "game", paramsId);

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCharacters(docSnap.data().characters);
          setGameMap(docSnap.data().img);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    checkWin();
  }, [characters]);

  const checkWin = () => {
    const characterLeftLength = characters.filter((character) => character.found !== true).length;

    if (characterLeftLength <= 0) {
      setIsWin(true);
      setIsClockRunning(false);
    }
  };

  const handleGuess = (characterName: string, characterId: string, characterCoords: Coords) => {
    const tolerance = 0.03;

    const toleranceX = Math.abs(clickPosition.xCord - characterCoords.xCord) <= tolerance;
    const toleranceY = Math.abs(clickPosition.yCord - characterCoords.yCord) <= tolerance;

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

    const coords = normalizeCoordinates(mouseX, mouseY, screenWidth, screenHeight);

    console.log(coords);

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

  const normalizeCoordinates = (xCord: number, yCord: number, screenWidth: number, screenHeight: number) => {
    const normalizedX = xCord / screenWidth;
    const normalizedY = yCord / screenHeight;

    const roundedX = Math.round(normalizedX * 100) / 100;
    const roundedY = Math.round(normalizedY * 100) / 100;

    return {xCord: roundedX, yCord: roundedY};
  };

  const updateCharacterFoundStatus = (characterId: string) => {
    setCharacters((prev) => {
      const indexToChange = prev.findIndex((character) => character._id === characterId);

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
      <GameHeader time={time} setTime={setTime} isClockRunning={isClockRunning} characters={characters} />

      <GameMapContainer mapImage={gameMap} characters={characters} settingDropdown={settingDropdown} handleClick={handleClick} handleGuess={handleGuess} clickPositionX={clickPosition.xCord} clickPositionY={clickPosition.yCord} />

      {showStartModal && <StartModal characters={characters} setIsClockRunning={setIsClockRunning} setShowStartModal={setShowStartModal} />}

      {isWin && <WinModal time={time} gameId={params?.id} />}

      <Footer />
    </StyledGame>
  );
};
