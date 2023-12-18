import styled from "styled-components";

export const StyledHomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 5em;
  color: #e2e8f0;

  a:nth-child(1) {
    font-size: 1.5em;
    color: #e2e8f0;
    font-weight: bold;
    text-decoration: none;
  }

  a:nth-child(2) {
    padding: 0.5em 1em;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      background-color: #374151;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    a:nth-child(1) {
      margin: 0.5em 0;
    }
  }
`;
