import { StyledHomeHeader } from "../styles/HomeHeader.styled";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <StyledHomeHeader>
      <Link to="/">Where's Waldo</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </StyledHomeHeader>
  );
};
