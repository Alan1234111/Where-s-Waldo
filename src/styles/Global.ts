import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: #111827;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
