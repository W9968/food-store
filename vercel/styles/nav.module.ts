import styled from 'styled-components'

export const Header = styled.nav`
  margin: 0 2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.units._14};
`

export const MenuItemsDesktop = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Linker = styled.a`
  font-weight: 600;
  padding: 7px 10px;
  text-decoration: none;
  color: ${(props) => props.theme.scheme.text};
  font-size: ${(props) => props.theme.units._14};
  margin: 0 calc(${(props) => props.theme.units._14} * 0.5);

  &:hover {
    background: ${(props) => props.theme.accent.hover};
  }
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.accent.hover};
  }
`
