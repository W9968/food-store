import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {  
    display:flex;
    width: 100vw;
    max-width: 100vw;
    font-weight: 500;
    min-height: 100vh;
    overflow-x: hidden;
    flex-direction: column;
    scroll-behavior: smooth;
    backface-visibility:hidden;
    font-family: 'Inter', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.scheme.text};
    background-color: ${(props) => props.theme.scheme.body};
  }
  
  ::selection {
    color: ${(props) => props.theme.scheme.body};
    background-color: ${(props) => props.theme.accent.select}
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
    height: 0px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: none; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme.accent.textshade};
  }
  
  button {
    font-family: 'Inter', sans-serif;
  }

  h1 { line-height: 1.05em}
  h4 { line-height: 1.2em }
  p { line-height: 1.375em }
  h2,h3 { line-height: 1.25em}

`
