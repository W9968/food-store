import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 10vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.units._14};

  @media (max-width: 1400px) {
    margin: 0 2vw;
  }
`
