import React from 'react'
import styled from 'styled-components'
import { RiGoogleFill } from 'react-icons/ri'

const GoggleButton: React.FC<Record<string, any>> = ({ ...rest }) => {
  return (
    <Field {...rest}>
      <RiGoogleFill style={{ display: 'flex' }} />
    </Field>
  )
}

export default GoggleButton

const Field = styled.button`
  width: 40pt;
  border: none;
  height: 40pt;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.foreground};
  margin-top: ${(props) => props.theme.spacing[0]};
  border-radius: ${(props) => props.theme.border[0]};
  background: ${(props) => props.theme.accent.accentp1};
  font-size: ${(props) => props.theme.fontSize.heading2};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 25%));
`
