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
  width: 100%;
  height: 40pt;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: ${(props) => props.theme.accent.primary};
  padding: 0 ${(props) => props.theme.spacing[2]};
  background: ${(props) => props.theme.foreground};
  border-radius: ${(props) => props.theme.border[0]};
  font-size: ${(props) => props.theme.fontSize.parag};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 25%));
`
