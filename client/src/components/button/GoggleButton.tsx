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
  width: 48px;
  height: 48px;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[0]};
  color: ${(props) => props.theme.accent.accentp2};
  border-radius: ${(props) => props.theme.border[0]};
  background: ${(props) => props.theme.accent.accentp1};
  font-size: ${(props) => props.theme.fontSize.heading2};
`
