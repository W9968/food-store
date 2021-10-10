import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const ContactWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.units[4]};
`

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  width: 1406px;
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1406px) {
    width: 100%;
  }

  @media (max-width: 969px) {
    flex-direction: column;
  }
`

export const Cols = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const TextSideStyle = styled(mo.div)`
  width: 500px;
  margin-top: 100px;

  @media (max-width: 969px) {
    width: 100%;
  }
`

export const Form = styled(mo.div)`
  width: 100%;
  padding: ${(props) => props.theme.units[2]};
  border-radius: ${(props) => props.theme.units[2]};
  background: ${(props) => props.theme.background};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 5%));
`
