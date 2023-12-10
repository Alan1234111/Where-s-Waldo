import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 3em;

  a {
    display: flex;
    text-decoration: none;
    color: #e2e8f0;
    font-size: 1.2rem;

    & img {
      height: 22px;
      width: 22px;
      margin-left: 0.8em;
    }
  }
`;
