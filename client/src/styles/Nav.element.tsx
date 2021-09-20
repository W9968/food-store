import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.nav`
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.units[1]} ${(props) => props.theme.units[2]};
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const MenuItems = styled(NavLink)`
  font-weight: 600;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.foreground};

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.units[2]};
  }

  &::after {
    width: 0;
    left: 50%;
    height: 2px;
    content: '';
    bottom: -5px;
    position: absolute;
    transition: all 0.3s;
    background: ${(props) => props.theme.accent.primary};
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`
