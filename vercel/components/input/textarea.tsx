import { FC, ReactNode } from 'react'
import { AreaContent, AreaField, AreaIcon, IconSet } from 'styles/input.module'

interface IpropsTextArea {
  placeholder: string
  icon: ReactNode
}

const TextArea: FC<IpropsTextArea & Record<string, any>> = ({
  placeholder,
  icon,
  ...rest
}) => {
  return (
    <AreaField>
      <AreaIcon>{icon}</AreaIcon>
      <AreaContent {...rest} placeholder={placeholder} autoComplete='nope' />
    </AreaField>
  )
}

export default TextArea
