import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
        padding: 0;
		box-sizing: border-box;
        
	}
	html, body {
        max-width: 100%;
		min-height: 100vh;
		font-weight: 400;
		font-style: normal;
		backface-visibility: hidden;
		text-rendering: optimizeSpeed;
        font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		color: ${(props) => props.theme.foreground};
		background: ${(props) => props.theme.background};
	}
`

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  margin: 0rem auto;
  flex-direction: column;
  padding: 1rem 1rem 0rem 1rem;
`

export const Column = styled.div`
  &:last-child {
    flex: 1;
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
`
