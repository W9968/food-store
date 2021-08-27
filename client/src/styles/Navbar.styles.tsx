import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing[0]} 0;
`

export const Div = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
`

export const Item = styled.p`
  font-weight: 500;
`

export const ButtonChev = styled(mo.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  align-items: center;
  justify-content: center;
`

export const Container = styled(mo.div)`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 125px;
  margin-top: 60px;
  position: absolute;
  background: ${(props) => props.theme.background};
`

export const DropDown = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing[0]};
  background: ${(props) => props.theme.background};
`
