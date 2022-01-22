import styled from 'styled-components'

export const ComposedLayout = styled.main`
  height: 100vh;
  display: flex;
  width: 1400px;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  flex-direction: column;
  padding: ${({ theme }) => theme.units._16};

  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const Section = styled.div`
  :first-child {
    width: 100%;
  }

  :nth-child(2) {
    flex: 1;
  }
`
