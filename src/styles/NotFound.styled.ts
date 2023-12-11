import styled from "styled-components";

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d4d4d8;

  h2,
  p {
    margin-top: 0.8em;
  }

  p {
    margin-bottom: 3em;

    & a {
      color: #fff;
      text-decoration: none;
    }
  }

  img {
    width: 250px;
    border-radius: 8px;
  }
`;
