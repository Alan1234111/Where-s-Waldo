import { StyledStartModal } from "../styles/StartModal.styled";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import { StyledWall } from "../styles/Wall.styled";

// to do

type PropsStartModal = {
  setIsClockRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StartModal = ({
  setIsClockRunning,
  setShowStartModal,
  startTimer,
}: PropsStartModal) => {
  const handleStart = () => {
    startTimer();
    setShowStartModal(false);
  };

  return (
    <>
      <StyledStartModal>
        <h2>You need to find 3 characters</h2>

        <div className="characters-container">
          <div>
            <img src={character1} />
            <p>Black Elf</p>
          </div>
          <div>
            <img src={character2} />
            <p>Blond Elf</p>
          </div>
          <div>
            <img src={character3} />
            <p>Ladder Elf</p>
          </div>
        </div>

        <button onClick={handleStart}>Start a Game</button>
      </StyledStartModal>

      <StyledWall />
    </>
  );
};
