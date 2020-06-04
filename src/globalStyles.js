import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   html {
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system,
    "Open Sans", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
`;
