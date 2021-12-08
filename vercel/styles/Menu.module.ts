import { motion } from 'framer-motion'
import styled from 'styled-components'
import { RiMenuLine } from 'react-icons/ri'

export const MenutButton = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  margin-left: 24px;
  position: relative;
  align-items: center;
`

export const HamMenu = styled(RiMenuLine)`
  font-size: ${(props) => props.theme.units._24};
`

export const Drawer = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  background: ${(props) => props.theme.scheme.domi};
`
