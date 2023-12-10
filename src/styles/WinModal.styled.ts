import styled from "styled-components";

export const StyledWinModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  background-color: #111827;
  color: #e2e8f0;
  padding: 1em 1em;
  z-index: 102;

  & h4,
  & label {
    opacity: 0.8;
    font-weight: normal;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;

    & label {
      margin-bottom: 0.5em;
      font-size: 1rem;
    }

    & input {
      border: 1px solid white;
      border-radius: 8px;
      background-color: transparent;
      padding: 0.3em;
      color: #e2e8f0;
      font-size: 1rem;
    }

    & button {
      align-self: flex-end;
      color: #ffffff;
      line-height: normal;
      margin-top: 1em;
      padding: 0.2em 0.7em;
      border-radius: 8px;
      border: none;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      background-color: #be123c;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      will-change: transform;
      cursor: pointer;
      transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;
