import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  #root {
    width: 100%;
  }
  
`;

export default GlobalStyle;
