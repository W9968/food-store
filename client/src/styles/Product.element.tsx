import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const ProductWrapper = styled(mo.div)`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 50px;
  padding: ${(props) => props.theme.units[2]};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 769px) {
    grid-gap: 25px;
    grid-template-columns: repeat(1, 1fr);
  }
`
