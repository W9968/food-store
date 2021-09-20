import React from 'react'
import styled from 'styled-components'
import { motion as mo } from 'framer-motion'
import { BiMailSend, BiPhone, BiMap } from 'react-icons/bi'

const InfoCard: React.FC = () => {
  return (
    <Div
      initial={{ opacity: 0, y: '-10%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ type: 'tween', delay: 0.1 }}>
      <Info>
        <BiMailSend style={{ fontSize: '1.5rem', marginRight: '10px' }} />
        <p>contact@koulwakel.tn</p>
      </Info>
      <Info>
        <BiPhone style={{ fontSize: '1.5rem', marginRight: '10px' }} />
        <p>(+216) 99-99-99-99</p>
      </Info>
      <Info>
        <BiMap style={{ fontSize: '1.5rem', marginRight: '10px' }} />
        <p>Rue de lac biwa، 1053 TUNIS</p>
      </Info>
    </Div>
  )
}

export default InfoCard

const Div = styled(mo.div)`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.units[1]};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 5%));

  @media (max-width: 1400px) {
    width: 100%;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${(props) => props.theme.units[1]};

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 0%));
  }
`
