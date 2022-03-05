import { createGlobalStyle } from 'styled-components'

export const Normalized = createGlobalStyle`
 *, *::after, *::before {
    margin: 0;
    padding: 0;
    font-weight: 400;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html,
  body {  
    display:flex;
    width: 100vw;
    font-weight: 100;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.accent.accent_color_4};
    background: ${(props) => props.theme.accent.accent_color_1};
  }
  
  ::selection {
    color: ${(props) => props.theme.accent.accent_color_2};
    background-color: ${(props) => props.theme.accent.accent_color_5}
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background:  transparent
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: none
  }

  h1 { line-height: 1.05em}
  h4 { line-height: 1.2em }
  h2,h3 { line-height: 1.25em}
  p { 
    line-height: 1.375em;
    color: ${({ theme }) => theme.accent.accent_color_5}; 
  }

  @font-face {
    font-family: "Eksell";
    src: url("/fonts/Eksell.otf");
    font-display: swap;
    font-style: normal;
  }

`
