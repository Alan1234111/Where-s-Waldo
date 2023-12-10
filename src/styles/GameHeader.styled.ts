import styled from "styled-components";

export const StyledGameHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 5em;
  background-color: #111827;
  color: #e2e8f0;
  z-index: 100;

  a {
    font-size: 1.5em;
    color: #e2e8f0;
    font-weight: bold;
    text-decoration: none;
  }

  div {
    display: flex;
    gap: 10px;

    & img {
      width: 50px;
      height: 60px;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .timer {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1em 1em;
    text-align: center;
  }
`;
