import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const Dashboard = styled(mo.section)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  min-height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.accent.shade1};
`

export const MainDash = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 10px;
  background: ${(props) => props.theme.background};
`
