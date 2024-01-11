import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    position: fixed;
    overflow-x: hidden;
  }

  html * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'SUIT', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    //-webkit-touch-callout: none
    word-break: keep-all;
  }
  a {
    text-decoration: none;
    color: inherit; 
  }

  input, textarea { 
    user-select: auto;
    -webkit-user-select : auto;
    -moz-user-select : auto;
    appearance: none;
  }

  img {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;