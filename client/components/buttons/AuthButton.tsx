import Loading from 'components/loaders/Loading'
import { FC } from 'react'
import { Button } from 'styles/button.module'

type Iprops = {
  title: string
  status: boolean
}

const AuthButton: FC<Iprops & Record<string, any>> = ({
  title,
  status,
  ...rest
}) => {
  return (
    <Button {...rest} disabled={status}>
      {status ? <Loading /> : title}
    </Button>
  )
}

export default AuthButton
