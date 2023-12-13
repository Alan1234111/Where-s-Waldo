import { StyledWinModal } from "../styles/WinModal.styled";
import { StyledWall } from "../styles/Wall.styled";

type PropsWinModal = {
  time: number;
};

// to do

export const WinModal = ({ time }: PropsWinModal) => {
  return (
    <>
      <StyledWinModal>
        <div>
          <h3>You finished in {time}!</h3>
          <h4>Submit your score to the leaderboard</h4>
        </div>
        <form>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" name="username" />
          <button>Submit</button>
        </form>
      </StyledWinModal>
      <StyledWall />
    </>
  );
};
