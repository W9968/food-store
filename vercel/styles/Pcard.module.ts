import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardElement = styled.div`
  width: 300px;
  cursor: pointer;
  min-height: 150px;
  border-radius: 5px;
  transition: 300ms ease-in-out;
  background: ${(props) => props.theme.accent.white};
  filter: drop-shadow(0 2mm 2mm rgba(80, 80, 80, 5%));

  &:hover {
    filter: drop-shadow(0 2mm 2mm rgba(80, 80, 80, 15%));
  }
`

export const Title = styled.h3`
  text-transform: capitalize;
`

export const Price = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.scheme.domi};
`

export const Summery = styled.p`
  color: #656565;
  padding: 5px 15px;
  font-size: ${(props) => props.theme.units._14};
`

export const BoxImage = styled(motion.div)`
  display: flex;
  height: 300px;
  padding: 24px 0px;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  background: ${(props) => props.theme.accent.hover};
`

export const ActionIconSet = styled.div`
  top: 5%;
  left: 90%;
  width: 100px;
  display: flex;
  position: absolute;
  flex-direction: row;
  transform: translate(-90%, -5%);
  justify-content: space-between;

  .icon {
    padding: 10px;
    display: flex;
    cursor: pointer;
    border-radius: 25px;
    color: ${(props) => props.theme.accent.white};
    font-size: ${(props) => props.theme.units._24};
    background: ${(props) => props.theme.accent.select};
  }
`
