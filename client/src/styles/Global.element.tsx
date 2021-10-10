import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,body {
        display: flex;
        max-width: 100%;
        font-weight: 500;
        min-height: 100vh;
        font-style: normal;
        flex-direction: column;
        text-rendering: optimizeSpeed;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    ::selection {
        color: ${(props) => props.theme.background};
        background: ${(props) => props.theme.foreground};
    }

    /* width */
    ::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        display: none;
        background: none; 
    }

`

export const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: none;
  flex-direction: column;

  > span {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
