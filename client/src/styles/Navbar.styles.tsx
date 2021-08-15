import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing[0]} 0;
`
