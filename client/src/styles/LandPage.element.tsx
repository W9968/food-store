import styled from 'styled-components'
import { motion as mo } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled(mo.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url('./asset/bgland.svg');
`

export const HeroSection = styled.div`
  flex: 1;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleHero = styled.h1`
  font-size: 10vh;
  text-align: end;
  margin-top: 25px;
  text-align: center;
  font-family: 'Amiri', serif;
`

export const Image = styled.img`
  width: 50vh;
  display: flex;

  @media (max-width: 50vh) {
    width: 90%;
  }
`

export const GoToLink = styled(NavLink)`
  width: 250px;
  border: none;
  height: 48px;
  display: flex;
  outline: none;
  cursor: pointer;
  font-size: 90%;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  font-family: 'Poppins', serif;
  color: ${(props) => props.theme.background};
  padding: ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
  margin-bottom: calc(${(props) => props.theme.units[2]}*3);

  background-size: 210%;
  background-position: 100%;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.accent.primary} 50%,
    ${(props) => props.theme.accent.quaternary} 50%
  );
  transition: all 0.3s;

  &:hover {
    background-position: 0%;
  }
`
