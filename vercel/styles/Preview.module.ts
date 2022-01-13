import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 2vw;
  flex-direction: column;
  padding: ${(props) => props.theme.units._30} 0;
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const BoxImage = styled(motion.div)`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.accent.hover};
  border-radius: ${(props) => props.theme.units._14};

  @media (max-width: 550px) {
    flex: 1;
    width: 100%;
  }
`

export const BoxContent = styled.div`
  flex: 1;
  display: flex;
  padding: 24px 100px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 550px) {
    padding: 16px;
  }
`

export const Title = styled.h1`
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.units._48};
`

export const Summary = styled.p`
  color: #656565;
  font-size: ${(props) => props.theme.units._14};
`

export const Description = styled.div`
  color: #656565;
  margin-top: ${(props) => props.theme.units._16};
  font-size: ${(props) => props.theme.units._16};
`

export const Prices = styled.div``
