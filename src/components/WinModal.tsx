import {StyledWinModal} from "../styles/WinModal.styled";

export const WinModal = () => {
  return (
    <>
      <StyledWinModal>
        <div>
          <h3>You finished in 36.211s!</h3>
          <h4>Submit your score to the leaderboard</h4>
        </div>
        <form>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" name="username" />
          <button>Submit</button>
        </form>
      </StyledWinModal>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          backgroundColor: "black",
          zIndex: "101",
          opacity: "0.3",
        }}
      />
    </>
  );
};
