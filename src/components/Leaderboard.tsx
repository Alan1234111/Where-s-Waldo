import { StyledLeaderboard } from "../styles/Leaderboard.styled";
import { StyledGameChooseContainer } from "../styles/GameChooseContainer.styled";
import { LeadeboardRowContainer } from "./LeadeboardRowContainer";
import santawaldo from "../assets/santawaldo.png";

const temporaryScores = [
  {
    _id: "1",
    username: "Alan",
    time: "0:00:21",
    date: "2023-01-12",
  },
  {
    _id: "2",
    username: "Alan",
    time: "0:00:21",
    date: "2023-01-12",
  },
];

export const Leaderboard = () => {
  return (
    <StyledLeaderboard>
      <h2>Leaderboard</h2>

      <StyledGameChooseContainer>
        <div>
          <h3>Game Name</h3>
          <img src={santawaldo} alt="" />
        </div>
      </StyledGameChooseContainer>

      <h3>Game Name</h3>

      <table>
        <thead>
          <tr>
            <td>Place</td>
            <td>Username</td>
            <td>Time</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {temporaryScores.map((score, index) => (
            <LeadeboardRowContainer
              key={score._id}
              place={index + 1}
              username={score.username}
              time={score.time}
              date={score.date}
            />
          ))}
        </tbody>
      </table>
    </StyledLeaderboard>
  );
};
