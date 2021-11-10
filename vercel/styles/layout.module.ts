import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  flex-direction: column;
`

export const Composition = styled.section`
  &:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
