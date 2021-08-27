import React from 'react'
import styled from 'styled-components'

const HeroLand: React.FC = () => {
  return (
    <>
      <Heading>
        <div>Koul</div>
        <div>& </div>
        <div>Wakel</div>
      </Heading>
    </>
  )
}

export default HeroLand

const Heading = styled.h1`
  z-index: 4;
  font-size: 7em;
  font-weight: 900;
  text-align: center;
  line-height: 0.9em;
  position: relative;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
  color: ${(props) => props.theme.foreground};
  text-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 5);
`
