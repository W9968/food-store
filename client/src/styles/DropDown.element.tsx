import styled from 'styled-components'
import { motion as mo } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const DropDownbutton = styled(mo.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
`

export const DroppedMenu = styled(mo.div)`
  right: -50%;
  width: 250px;
  position: absolute;
  padding: ${(props) => props.theme.units[0]} 0;
  margin-top: ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.units[0]};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 10%));
`

export const LogoutButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  font-weight: 600;
  text-transform: capitalize;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.units[1]};
  padding: calc(${(props) => props.theme.units[0]} * 2);
  border-top: 1px solid ${(props) => props.theme.accent.secondary};

  &:hover {
    background: ${(props) => props.theme.accent.tertiary};
  }
`

export const NavLinks = styled(NavLink)`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.foreground};
  font-size: ${(props) => props.theme.units[1]};
  padding: calc(${(props) => props.theme.units[0]} * 2);

  &:hover {
    background: ${(props) => props.theme.accent.tertiary};
  }
`
