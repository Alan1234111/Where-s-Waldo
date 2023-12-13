import { StyledGameMapContainer } from "../styles/GameMapContainer";
import { Toaster } from "react-hot-toast";
import { StyledDropdown } from "../styles/Dropdown.styled";
import { StyledCursorClicked } from "../styles/CursorClicked.styled";
import { CharacterDropdownContainer } from "./CharacterDropdownContainer";
import { character, handleGuess, settingDropdown } from "../types";

type PropsGameMapContainer = {
  mapImage: string;
  characters: character[];
  settingDropdown: settingDropdown;
  clickPositionX: number;
  clickPositionY: number;
  handleClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  handleGuess: handleGuess;
};

export const GameMapContainer = ({
  mapImage,
  characters,
  settingDropdown,
  clickPositionX,
  clickPositionY,
  handleClick,
  handleGuess,
}: PropsGameMapContainer) => {
  return (
    <StyledGameMapContainer>
      <Toaster
        containerStyle={{
          position: "fixed",
          top: 110,
        }}
      />

      <img
        className="game-photo"
        src={mapImage}
        onClick={handleClick}
      />

      {settingDropdown.isShown && (
        <>
          <StyledCursorClicked
            $x={clickPositionX * 100}
            $y={clickPositionY * 100}
          />

          <StyledDropdown
            $x={settingDropdown.xCord}
            $y={settingDropdown.yCord}
          >
            {characters
              .filter((character) => !character.found)
              .map((character) => (
                <CharacterDropdownContainer
                  key={character._id}
                  name={character.name}
                  _id={character._id}
                  xCord={character.xCord}
                  yCord={character.yCord}
                  img={character.img}
                  handleGuess={handleGuess}
                />
              ))}
          </StyledDropdown>
        </>
      )}
    </StyledGameMapContainer>
  );
};
