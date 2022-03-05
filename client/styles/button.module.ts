import styled from 'styled-components'
import { motion } from 'framer-motion'

// header AuthHeaderButton

export const LoginAuthButton = styled.a`
  border: none;
  display: flex;
  line-height: 0;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  height: ${({ theme }) => theme.units._36};
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_4};
  background: ${({ theme }) => theme.accent.accent_color_2};
`

// login, register button

export const Button = styled.button`
  height: 42px;
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_2};
  background: ${({ theme }) => theme.accent.accent_color_4};

  &:hover {
    filter: opacity(0.8);
  }

  &:disabled {
    filter: contrast(0.5);
    cursor: wait;
  }
`

// landing page button

export const RouteButton = styled.button`
  height: 42px;
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_2};
  background: ${({ theme }) => theme.accent.accent_color_4};

  &:hover {
    filter: opacity(0.8);
  }
`

// drop down showing account

export const DropDown = styled.div`
  position: relative;
`

export const DropDoawnButton = styled.button`
  border: none;
  display: flex;
  line-height: 0;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  width: ${({ theme }) => theme.units._36};
  height: ${({ theme }) => theme.units._36};
  font-size: ${({ theme }) => theme.units._24};
  color: ${({ theme }) => theme.accent.accent_color_4};
  background: ${({ theme }) => theme.accent.accent_color_2};
`

export const Dropped = styled(motion.div)`
  right: 0;
  top: 125%;
  width: 150px;
  display: flex;
  padding: 0 10px;
  position: absolute;
  border-radius: 5px;
  flex-direction: column;
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));
  background: ${({ theme }) => theme.accent.accent_color_1};

  & > button {
    border: none;
    display: flex;
    line-height: 0;
    cursor: pointer;
    font-weight: 600;
    align-items: center;
    text-decoration: none;
    text-transform: capitalize;
    height: ${({ theme }) => theme.units._36};
    font-size: ${({ theme }) => theme.units._14};
    color: ${({ theme }) => theme.accent.accent_color_4};
    background: ${({ theme }) => theme.accent.accent_color_1};
  }
`
