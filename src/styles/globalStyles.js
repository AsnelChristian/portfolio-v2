import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px / 16px = 62.5% => 1rem = 10px
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.black};
    cursor: default;
    min-height: 100vh;
    padding: 0 5rem;
  }
  #root {
    display: grid;
    grid-template-columns: [full-start] 1fr [center-start] repeat(14, [col-start] minmax(min-content, 9.14rem) [col-end]) [center-end] 1fr [full-end]
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export default globalStyle;
