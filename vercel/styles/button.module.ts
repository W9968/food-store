import styled from 'styled-components'
import { motion } from 'framer-motion'
import { RiShoppingBag3Line } from 'react-icons/ri'

export const ButtonLogin = styled.button`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  margin-left: 24px;
  padding: 10px 14px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  background: ${(props) => props.theme.accent.hover};
`

export const Anchor = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.scheme.text};
  font-size: ${(props) => props.theme.units._14};
`

export const CartButton = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  position: relative;
  align-items: center;
`

export const ShoppingBasket = styled(RiShoppingBag3Line)`
  font-size: ${(props) => props.theme.units._24};
`

export const CartItemCount = styled(motion.div)`
  top: 60%;
  left: 60%;
  display: flex;
  font-size: 10px;
  padding: 2px 5px;
  position: absolute;
  transform: translate(-60%, -60%);
  background: ${(props) => props.theme.accent.hover};
`

export const FormButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0px 36px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.scheme.body};
  font-size: ${(props) => props.theme.units._16};
  background: ${(props) => props.theme.scheme.domi};

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.accent.textshade};
    background: ${(props) => props.theme.accent.disabled};
  }
`
