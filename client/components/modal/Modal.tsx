import { FC } from 'react'
import { __auth } from 'context/_authContext'
import { ModalBox } from 'styles/modal.module'

const Modal: FC = () => {
  const { validationMessage } = __auth()

  return (
    <>
      {validationMessage.type != '' && (
        <ModalBox type={validationMessage.type}>
          <p>{validationMessage.message}</p>
        </ModalBox>
      )}
    </>
  )
}

export default Modal
