import styled from "styled-components";

export const StyledChooseGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 1em auto;
  color: #e2e8f0;

  section {
    display: flex;
    align-items: flex-start;
    gap: 2em;
    margin-top: 2em;
  }

  section div {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    color: #e2e8f0;
    padding-bottom: 1em;

    & img {
      order: 1;
      height: 400px;
      width: 100%;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }

    & h3 {
      order: 2;
      margin-top: 1em;
    }

    & a {
      order: 3;
      appearance: none;
      background-color: #be123c;
      border-radius: 15px;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      max-width: 50%;
      padding: 0.7em 1.5em;
      margin: 1em auto 0;
      font-size: 1rem;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      text-decoration: none;
      transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      will-change: transform;

      &:disabled {
        pointer-events: none;
      }

      &:hover {
        box-shadow: rgba(190, 18, 60, 1) 0 4px 50px;
        transform: translateY(-2px);
      }

      &:active {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }
`;
