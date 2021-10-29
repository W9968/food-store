import { FC } from 'react'
import Loading from 'components/spinner/loading'
import { FormButton } from 'styles/button.module'

interface IpropsButton {
  title: string
  status?: boolean
}

const Button: FC<IpropsButton & Record<string, any>> = ({
  title,
  status,
  ...rest
}) => {
  return (
    <>
      <FormButton {...rest} disabled={status}>
        {status ? <Loading /> : <p>{title}</p>}
      </FormButton>
    </>
  )
}

export default Button
