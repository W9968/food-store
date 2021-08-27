import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  background: ${(props) => props.theme.background};
`

export const Cols = styled(mo.div)`
  flex: 1;
  display: flex;

  align-items: center;
  flex-direction: column;

  &:first-child {
    justify-content: space-between;
    background: ${(props) => props.theme.background};
  }

  &:last-child {
    justify-content: center;
    background: ${(props) => props.theme.accent.secondary};
  }
`

export const Lines = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:first-child {
    flex: 1;
  }
`

export const Resetdiv = styled.div`
  padding: ${(props) => props.theme.spacing[0]} 0;
`

export const RightSide = styled.div`
  width: 80%;
  height: 450px;
`
