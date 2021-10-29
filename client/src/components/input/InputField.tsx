import React from 'react'
import { theme } from 'theme/palette'
import { Field, Input, Wrapper, Message } from 'styles/Input.element'
import { BiErrorAlt } from 'react-icons/bi'

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
        <Wrapper>
          <Input
            {...rest}
            placeholder={placeholer}
            type={type}
            autoComplete='no'
          />
          <p
            style={{
              fontSize: '18px',
              display: 'flex',
              color: `${theme.accent.error}`,
            }}>
            {validation && <BiErrorAlt />}
          </p>
        </Wrapper>
        {validation && <Message>{message}</Message>}
      </Field>
    </>
  )
}

export default InputField
