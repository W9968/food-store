import React from 'react'
import styled from 'styled-components'

interface Iprops {
  title: string
  status: boolean
}

const Button: React.FC<Iprops & Record<string, any>> = ({
  title,
  status,
  ...rest
}) => {
  return (
    <Field disabled={status} {...rest}>
      {title}
    </Field>
  )
}

export default Button

const Field = styled.button`
  height: 48px;
  width: 450px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  padding: 0 ${(props) => props.theme.spacing[2]};
  background: ${(props) => props.theme.foreground};
  border-radius: ${(props) => props.theme.border[0]};
  color: ${(props) => props.theme.accent.primary};
  font-size: ${(props) => props.theme.fontSize.btns};
`
