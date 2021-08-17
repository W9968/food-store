import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing[0]} 0;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
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

export const DropDown = styled(mo.div)`
  top: 0%;
  position: absolute;
  margin-top: 36px;
`
