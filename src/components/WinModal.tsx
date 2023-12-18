import {StyledWinModal} from "../styles/WinModal.styled";
import {StyledWall} from "../styles/Wall.styled";
import {formatTime} from "../services/formatTime";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";
import {db} from "../services/firebase";
import {FormEventHandler, useState} from "react";
import {useNavigate} from "react-router-dom";

type PropsWinModal = {
  time: number;
  gameId?: string;
};

export const WinModal = ({time, gameId}: PropsWinModal) => {
  const formatedTime = formatTime(time);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!gameId) {
      console.error("gameId is undefined");
      return;
    }

    const gameDoc = doc(db, "game", gameId);

    const leaderboardField = "leaderboard";

    try {
      const newLeaderboardEntry = {
        username: name,
        time: time,
        date: Date.now(),
      };

      await updateDoc(gameDoc, {
        [leaderboardField]: arrayUnion(newLeaderboardEntry),
      });

      navigate("/");
    } catch (err) {
      console.error("Error updating document: ", err);
    }
  };

  return (
    <>
      <StyledWinModal>
        <div>
          <h3>You finished in {formatedTime}!</h3>
          <h4>Submit your score to the leaderboard</h4>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" name="username" onChange={(e) => setName(e.target.value)} />
          <button>Submit</button>
        </form>
      </StyledWinModal>
      <StyledWall />
    </>
  );
};
