import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { RiUser3Line } from 'react-icons/ri'

const User: React.FC = () => {
  return (
    <Button whileTap={{ scale: 0.8 }} aria-label='go to login page'>
      <RiUser3Line className='icon' />
    </Button>
  )
}

export default User

const Button = styled(m.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  justify-content: flex-end;
  margin: 0 ${(props) => props.theme.spacing[1]};

  .icon {
    font-size: ${(props) => props.theme.fontSize.heading};
  }
`
