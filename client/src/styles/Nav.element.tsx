import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion as mo } from 'framer-motion'

export const NavContainer = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.foreground};
`

export const MenuWidh = styled.div`
  width: 1406px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1406px) {
    width: 100%;
  }
`

export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex: none;
    justify-content: flex-end;
  }
`

export const Cols = styled.div`
  &:first-child {
    display: flex;
    align-items: center;
    padding: 0 calc(${(props) => props.theme.units[1]}*2);
  }

  &:last-child {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`

export const MenuItems = styled(NavLink)`
  letter-spacing: 1px;
  border-radius: 30px;
  text-decoration: none;
  padding: ${(props) => props.theme.units[2]};
  color: ${(props) => props.theme.background};
  font-size: ${(props) => props.theme.units[3]};
  margin-right: ${(props) => props.theme.units[0]};

  &:hover {
    background: ${(props) => props.theme.accent.hover};
  }

  &.active {
    background: ${(props) => props.theme.accent.hover};
  }
`

export const ProductButton = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  background: none;
  align-items: center;
  letter-spacing: 1px;
  border-radius: 30px;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  font-family: 'Inter', sans-serif;
  padding: ${(props) => props.theme.units[2]};
  color: ${(props) => props.theme.background};
  margin-right: ${(props) => props.theme.units[0]};

  &:hover {
    background: ${(props) => props.theme.accent.hover};
  }

  > p {
    font-size: ${(props) => props.theme.units[3]};
  }
`

export const LoginButton = styled(NavLink)`
  display: flex;
  cursor: pointer;
  align-items: center;
  letter-spacing: 1px;
  border-radius: 30px;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  padding: ${(props) => props.theme.units[2]};
  color: ${(props) => props.theme.foreground};
  background: ${(props) => props.theme.background};
  > p {
    font-size: ${(props) => props.theme.units[3]};
  }
`

// mobile menu

export const Menu = styled.p`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  color: ${(props) => props.theme.background};
  padding-left: ${(props) => props.theme.units[1]};
`

export const SlideMenu = styled(mo.div)`
  top: 0;
  left: 0;
  z-index: 12;
  width: 450px;
  height: 100vh;
  max-height: 100vh;
  position: absolute;
  padding: ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.background};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 25%));

  @media (max-width: 480px) {
    width: 90%;
  }
`

export const ItemsMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.units[2]};
`
export const MenuMobileItems = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.foreground};
  margin: ${(props) => props.theme.units[0]} 0;
  padding: ${(props) => props.theme.units[1]} 0;
  transition: 200ms ease-in-out;
  font-size: calc(${(props) => props.theme.units[1]}*1.125);

  &.active {
    color: ${(props) => props.theme.background};
    padding: ${(props) => props.theme.units[1]};
    border-radius: ${(props) => props.theme.units[0]};
    background: ${(props) => props.theme.accent.primary};
  }
`
