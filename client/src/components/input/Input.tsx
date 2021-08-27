import React from 'react'
import styled from 'styled-components'

interface Iprops {
  type: string
  palceHolder: string
}

const Input: React.FC<Iprops & Record<string, any>> = ({
  type,
  palceHolder,
  ...rest
}) => {
  return (
    <Field type={type} placeholder={palceHolder} {...rest} autoComplete='no' />
  )
}

export default Input

const Field = styled.input`
  width: 100%;
  height: 40pt;
  border: none;
  outline: none;
  padding: 0 ${(props) => props.theme.spacing[0]};
  border-radius: ${(props) => props.theme.border[0]};
  background: ${(props) => props.theme.accent.primary};
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 2);
  filter: drop-shadow(0 1mm 2mm rgba(80, 80, 80, 5%));

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.foreground};
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.foreground};
  }
`
