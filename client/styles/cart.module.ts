import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IconCart = styled.button`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const Badge = styled(motion.span)`
  left: 130%;
  top: 120%;
  width: 18px;
  height: 18px;
  display: flex;
  line-height: 0;
  font-size: 12px;
  border-radius: 5px;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translate(-130%, -130%);
  color: ${({ theme }) => theme.accent.accent_color_1};
  background: ${({ theme }) => theme.accent.accent_color_5};
`
