import styled from "styled-components";

export const StyledDropdown = styled.div<{$x?: number; $y?: number}>`
  position: absolute;
  top: ${(props) => `${props.$y}%`};
  left: ${(props) => `${props.$x}%`};
  transform: translate(50%, -100%);
  width: 100px;
  height: 100px;

  button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin: 0.4em 0;
    background-color: #be123c;
    color: white;
    font-weight: 600;
    width: 130px;
    border: none;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.93;
    }

    & p {
      margin: 0 auto;
    }

    & img {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      width: 50px;
      height: 60px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    button {
      margin: 0.4em 0;
      width: 50px;
      border: none;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      cursor: pointer;
      transition: 0.2s;

      & p {
        margin: 0 auto;
        font-size: 0.3rem;
      }

      & img {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
  }
`;
