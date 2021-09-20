import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const ContactWrapper = styled(mo.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.accent.secondary},
    /* we removed the 60% to have blur effect */
      ${(props) => props.theme.background} 40%
  );
`

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  width: 1400px;
  flex-direction: row;
  margin: 25px auto 0 auto;
  justify-content: space-between;

  @media (max-width: 1400px) {
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
  padding: ${(props) => props.theme.units[2]};
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
