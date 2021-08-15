import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'

type BadgeProps = {
  totale: number
}

const Badge: React.FC<BadgeProps> = ({ totale }) => {
  return (
    <Div>
      <Number
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        {totale}
      </Number>
    </Div>
  )
}

export default Badge

const Div = styled.div`
  position: absolute;
`

const Number = styled(m.div)`
  font-size: 10px;
  padding: 3px 5px;
  margin-top: 20px;
  margin-right: -6px;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.foreground};
  border-radius: ${(props) => props.theme.border[1]};
`
