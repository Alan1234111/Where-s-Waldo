import { StyledWinModal } from "../styles/WinModal.styled";
import { StyledWall } from "../styles/Wall.styled";
import { formatedTime } from "../services/formatedTime";

type PropsWinModal = {
  time: number;
};

export const WinModal = ({ time }: PropsWinModal) => {
  const {minutes, seconds, milliseconds} = formatedTime(time)

  return (
    <>
      <StyledWinModal>
        <div>
          <h3>You finished in {" "}
          {`${minutes}`}:
          {`${seconds}`}:
          {`${milliseconds}`}
        !</h3>
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
