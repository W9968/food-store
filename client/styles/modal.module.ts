import styled from 'styled-components'
import { motion } from 'framer-motion'

type I_modalProps = {
  type: 's' | 'e' | 'w' | ''
}

export const ModalBox = styled(motion.div)<I_modalProps>`
  top: 100%;
  z-index: 10;
  width: 400px;
  padding: 15px;
  background: red;
  border-radius: 5px;
  position: absolute;
  transform: translateY(-130%);
  background: ${({ theme, type }) =>
    type === 'e' ? theme.accent.accent_error : theme.accent.accent_success};

  @media (max-width: 450px) {
    width: 85%;
  }
`
