import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.section`
  flex: 1;
  z-index: 10;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Overlay = styled.div``

const transform = keyframes`
  0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
  20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
  40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
  60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
  80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
`

const movement_one = keyframes`
  0%,
  100% { transform: none; }
  50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
`

const movement_two = keyframes`    
  0%,
  100% { transform: none; }
  50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
`

export const Blob = styled.div`
  top: 40%;
  left: 5%;
  width: 450px;
  opacity: 0.7;
  height: 400px;
  position: absolute;
  background: #ed1250;
  border-radius: 30% 50% 20% 40%;
  animation: ${transform} 20s ease-in-out infinite both alternate,
    ${movement_one} 40s ease-in-out infinite both;
`
export const BlobOne = styled.div`
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  opacity: 0.7;
  position: absolute;
  background: #ed1250;
  transform: rotate(-180deg);
  border-radius: 30% 50% 20% 40%;
  transform: translate(-50%, -50%);
  animation: ${transform} 20s ease-in-out infinite both alternate,
    ${movement_one} 40s ease-in-out infinite both;
`
export const BlobTwo = styled.div`
  top: -150px;
  left: 500px;
  opacity: 0.7;
  width: 350px;
  height: 350px;
  position: absolute;
  background: #ed1250;
  transform: rotate(-180deg);
  border-radius: 30% 50% 20% 40%;
  animation: ${transform} 20s ease-in-out infinite both alternate,
    ${movement_two} 40s ease-in-out infinite both;
`
