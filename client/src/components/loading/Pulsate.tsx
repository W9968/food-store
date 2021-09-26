import React from 'react'
import styled, { keyframes } from 'styled-components'

const Pulsate: React.FC = () => {
  return (
    <Wrapper>
      <Pulse />
    </Wrapper>
  )
}

export default Pulsate

const Wrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`

const pulsate = keyframes`
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`

const Pulse = styled.div`
  opacity: 0;
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  animation: ${pulsate} 1s ease-out;
  animation-iteration-count: infinite;
  border: 3px solid ${(props) => props.theme.accent.primary};
`
