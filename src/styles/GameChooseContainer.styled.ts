import styled from "styled-components";

export const StyledGameChooseContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 2em;
  margin-top: 1em;

  div,
  a {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    color: #e2e8f0;
    padding-bottom: 1em;
    text-decoration: none;
    transition: 0.2s;

    & img {
      order: 1;
      width: 250px;
      height: 250px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      object-fit: cover;
    }

    & h3 {
      order: 2;
      margin-top: 1em;
      font-size: 1rem;
    }

    & a {
      order: 3;
      appearance: none;
      background-color: #be123c;
      border-radius: 15px;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: Roobert, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
      max-width: 50%;
      padding: 0.4em 1.2em;
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

  a:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
