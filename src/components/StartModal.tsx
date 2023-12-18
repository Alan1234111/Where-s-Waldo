import {StyledStartModal} from "../styles/StartModal.styled";
import {StyledWall} from "../styles/Wall.styled";
import {character} from "../types";

type PropsStartModal = {
  characters: character[];
  setIsClockRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StartModal = ({characters, setShowStartModal, setIsClockRunning}: PropsStartModal) => {
  const handleStart = () => {
    setIsClockRunning(true);
    setShowStartModal(false);
  };

  return (
    <>
      <StyledStartModal>
        <h2>You need to find 3 characters</h2>

        <div className="characters-container">
          {characters.map((character) => {
            return (
              <div key={character._id}>
                <img src={character.img} alt="" />
                <p>{character.name}</p>
              </div>
            );
          })}
        </div>

        <button onClick={handleStart}>Start a Game</button>
      </StyledStartModal>

      <StyledWall />
    </>
  );
};
