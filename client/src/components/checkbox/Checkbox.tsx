import React from 'react'
import styled from 'styled-components'

import { Checkbox } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox'

interface Iprops {
  title: string
}

const Checkboxs: React.FC<Iprops & Record<string, any>> = ({ title }) => {
  return (
    <Checker>
      <Checkbox color='primary' shape='curve' variant='thick' />
      {title}
    </Checker>
  )
}

export default Checkboxs

const Checker = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  text-transform: capitalize;
`
