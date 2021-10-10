import styled from 'styled-components'
import { motion as mo } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled(mo.div)`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  background: #cfd7cc;

  @media (max-height: 600px) {
    height: 480px;
  }

  @media (max-width: 500px) {
    height: 375px;
  }
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: url(./asset/Frame1.png);
`

export const LinkTo = styled(NavLink)``
