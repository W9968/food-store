import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const Card = styled.div`
  width: 270px;
  height: 365px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  transition: 200ms ease-in-out;
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.border[1]};

  &:hover {
    filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));
  }
`

export const ProductImage = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.border[1]}
    ${(props) => props.theme.border[1]} 0 0;
  background: ${(props) => props.theme.accent.primary};
`

export const Image = styled.img`
  width: 169px;
  display: flex;
  max-height: 210px;
`

export const ProductInfos = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.p`
  font-size: 120%;
  font-weight: 600;
`

export const Price = styled.p`
  font-weight: 600;
`

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.accent.acceptp2};
`

export const Icons = styled(mo.button)`
  /* left: 7%;
  top: 95%; */
  border: none;
  display: flex;
  padding: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  /* transform: translate(-7%, -95%); */
  background: ${(props) => props.theme.background};
  filter: drop-shadow(0 2mm 4mm rgba(80, 80, 80, 15%));
`
