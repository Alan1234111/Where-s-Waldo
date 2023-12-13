import page404 from "../assets/page404.png";
import { StyledNotFound } from "../styles/NotFound.styled";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <StyledNotFound>
      <img src={page404} alt="" />
      <h2>Page not found</h2>
      <p>
        The link you visited doesn't exist.{" "}
        <Link to="/">Back to home.</Link>
      </p>
    </StyledNotFound>
  );
};
