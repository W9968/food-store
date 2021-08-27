import React from 'react'
import styled from 'styled-components'

const HeroLand: React.FC = () => {
  return <Heading>Koul & Wakel</Heading>
}

export default HeroLand

const Heading = styled.h1`
  z-index: 4;
  font-size: 7rem;
  font-weight: 900;
  line-height: 0.9em;
  position: relative;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
  color: ${(props) => props.theme.foreground};
  text-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 5);
`
