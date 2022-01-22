import { FC, ReactChild } from 'react'
import { EntryText, Icon, Input, Label, Message } from 'styles/input.module'
import { BiCheck, BiErrorAlt } from 'react-icons/bi'

type Iprops = {
  label?: string
  placeholder: string
  icon: ReactChild
  status: 'e' | 's' | 'n'
  type: 'text' | 'email' | 'password'
}

const TextInput: FC<Iprops & Record<string, any>> = ({
  label,
  placeholder,
  icon,
  status,
  type,
  ...rest
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Input>
        <Icon>{icon}</Icon>
        <EntryText
          type={type}
          placeholder={placeholder}
          autoComplete={'no'}
          {...rest}
        />

        {status !== 'n' && (
          <Message>
            {status === 's' && <BiCheck className='sucess' />}
            {status === 'e' && <BiErrorAlt className='error' />}
          </Message>
        )}
      </Input>
    </>
  )
}

export default TextInput
