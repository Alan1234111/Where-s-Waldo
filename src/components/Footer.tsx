import githubMark from "../assets/github-mark-white.svg";
import {StyledFooter} from "../styles/Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/Alan1234111" target="_blank">
        Alan <img src={githubMark} alt="Github" />
      </a>
    </StyledFooter>
  );
};
