import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion as mo } from 'framer-motion'

export const AuthWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  flex-direction: column;
`

export const Container = styled(mo.div)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => props.theme.units[2]};
`

export const Form = styled.div`
  flex: 1;
  width: 500px;
  display: flex;
  margin-top: -10%;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.units[2]};

  @media (max-width: 550px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
`

export const ForgotPaswword = styled(Link)`
  filter: contrast(4);
  text-decoration: none;
  padding: ${(props) => props.theme.units[0]} 0;
  color: ${(props) => props.theme.accent.primary};
`

export const ChangeRoute = styled.div``

export const GoToLink = styled(Link)`
  width: 500px;
  font-weight: 700;
  filter: contrast(4);
  text-decoration: none;
  color: ${(props) => props.theme.accent.primary};

  @media (max-width: 550px) {
    width: 100%;
  }
`
