import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Form = styled(motion.form)`
  flex: 1;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.units._16};

  @media (max-width: 550px) {
    width: 100%;
  }
`

export const Cols = styled.div`
  width: 100%;
  &:first-child {
    flex: 1;
    display: flex;
    margin-bottom: 20%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.units._42};

  & h1 {
    margin-bottom: 15px;
    text-transform: capitalize;
    font-size: ${(props) => props.theme.units._42};
  }

  & p {
    font-size: ${(props) => props.theme.units._16};
    color: ${(props) => props.theme.accent.textshade};
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.units._42};
`

export const Redirect = styled.div`
  & a {
    text-align: center;
    text-decoration: none;
    color: ${(props) => props.theme.scheme.domi};
  }
`
