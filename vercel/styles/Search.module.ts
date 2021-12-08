import styled from 'styled-components'
import { RiSearchLine } from 'react-icons/ri'

export const SearchField = styled.a`
  display: flex;
  padding: 7px 10px;
  align-items: center;
  padding-bottom: 5px;
  text-decoration: none;
  justify-content: center;
  color: ${(props) => props.theme.scheme.text};
  margin: 0 calc(${(props) => props.theme.units._14} * 0.5);
`

export const SearchIcon = styled(RiSearchLine)`
  font-size: ${(props) => props.theme.units._24};
`

export const Text = styled.p`
  font-weight: 600;
  padding-right: 7px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.units._14};
`
