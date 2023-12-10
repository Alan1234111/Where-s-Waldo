import styled from "styled-components";

export const StyledCursorClicked = styled.div<{$x?: number; $y?: number}>`
  position: absolute;
  top: ${(props) => `${props.$y}%`};
  left: ${(props) => `${props.$x}%`};
  transform: translate(-50%, -50%);
  background: transparent;
  border: 4px dotted red;
  padding: 30px;
  border-radius: 50%;
  zindex: 1000;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
