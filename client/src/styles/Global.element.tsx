import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,body {
        max-width: 100%;
        font-weight: 500;
        min-height: 100vh;
        font-style: normal;
        text-rendering: optimizeSpeed;
        font-family: 'Inter', sans-serif;
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
