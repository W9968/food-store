import { FC, ReactNode } from 'react'
import { Field, GroupField, IconSet } from 'styles/input.module'

interface IpropsInput {
  placeholder: string
  icon: ReactNode
  type: string
}

const Input: FC<IpropsInput & Record<string, any>> = ({
  placeholder,
  type,
  icon,
  ...rest
}) => {
  return (
    <GroupField>
      <IconSet>{icon}</IconSet>
      <Field
        {...rest}
        placeholder={placeholder}
        type={type}
        autoComplete='nope'
      />
    </GroupField>
  )
}

export default Input
