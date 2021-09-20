import React from 'react'
import { Field, Input, Wrapper } from 'styles/Input.element'

interface Iprops {
  icon: React.ReactNode
  placeholer: string
  type: string
}

const InputField: React.FC<Iprops & Record<string, any>> = ({
  icon,
  placeholer,
  type,
  ...rest
}) => {
  return (
    <>
      <Field>
        <Wrapper>
          <p style={{ fontSize: '1.5rem', display: 'flex' }}>{icon}</p>
          <Input
            {...rest}
            placeholder={placeholer}
            type={type}
            autoComplete='no'
          />
        </Wrapper>
      </Field>
    </>
  )
}

export default InputField
