import React from 'react'
import { Field, Input, Wrapper, Message } from 'styles/Input.element'

interface Iprops {
  icon: React.ReactNode
  placeholer: string
  type: string
  validation?: boolean
  message?: React.ReactChild
}

const InputField: React.FC<Iprops & Record<string, any>> = ({
  icon,
  placeholer,
  type,
  validation,
  message,
  ...rest
}) => {
  return (
    <>
      <Field>
        <Wrapper isValid={validation ? validation : false}>
          <p style={{ fontSize: '1.5rem', display: 'flex' }}>{icon}</p>
          <Input
            {...rest}
            placeholder={placeholer}
            type={type}
            autoComplete='no'
          />
        </Wrapper>
        {validation && <Message>{message}</Message>}
      </Field>
    </>
  )
}

export default InputField
