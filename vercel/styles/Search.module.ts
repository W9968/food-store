import { motion } from 'framer-motion'
import styled from 'styled-components'
import { RiSearchLine } from 'react-icons/ri'

export const SearchField = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  margin-left: 24px;
  position: relative;
  align-items: center;
`

export const Input = styled(motion.div)`
  top: 20%;
  left: 50%;
  z-index: 2;
  width: 500px;
  padding: 5px;
  display: flex;
  position: fixed;
  border-radius: 5px;
  transform: translate(-50%, -20%);
  background: ${(props) => props.theme.accent.white};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));

  @media (max-width: 550px) {
    width: 90%;
  }
`

export const Box = styled.button`
  width: 62px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.accent.white};
  background: ${(props) => props.theme.scheme.domi};
`

export const SearchIcon = styled(RiSearchLine)`
  font-size: ${(props) => props.theme.units._24};
`

export const SearchInput = styled.input`
  height: 42px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.theme.units._16};
  padding: 0 ${(props) => props.theme.units._16};
`
