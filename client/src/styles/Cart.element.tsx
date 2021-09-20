import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const Cart = styled.p`
  cursor: pointer;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.foreground};
  margin-right: ${(props) => props.theme.units[1]};

  &::after {
    width: 0;
    left: 50%;
    height: 2px;
    content: '';
    bottom: -5px;
    position: absolute;
    transition: all 0.3s;
    background: ${(props) => props.theme.accent.primary};
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`

export const CartWrapper = styled(mo.div)`
  top: 0;
  right: 0;
  z-index: 12;
  width: 450px;
  height: 100vh;
  max-height: 100vh;
  position: absolute;
  padding: ${(props) => props.theme.units[1]};

  @media (max-width: 969px) {
    width: 90%;
    padding: 0;
  }
`
export const CartSlide = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.background};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 25%));
  @media (max-width: 969px) {
    border-radius: 0;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .crossX {
    border: none;
    display: flex;
    font-size: 2rem;
    cursor: pointer;
    background: none;
  }
`
