import styled from "styled-components";

export const StyledStartModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 300px;
  background-color: #111827;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  color: #ffffff;
  border-radius: 12px;
  z-index: 103;

  h2 {
    margin: 0.4em 0 1em;
  }

  .characters-container {
    display: flex;
    justify-content: space-around;
    width: 100%;

    & div img {
      width: 100px;
      height: 100px;
      border-radius: 16px;
      object-fit: cover;
      margin-bottom: 0.2em;
    }
  }

  button {
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
    border: none;

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
`;
