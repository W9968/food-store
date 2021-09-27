import React, { useEffect } from 'react'
import Space from 'hooks/useSpace'
import { __service } from 'global/exports'

const _Products: React.FC = () => {
  const { getAllProduct } = __service()

  useEffect(() => {
    getAllProduct()
  }, [getAllProduct])

  return (
    <>
      <Space />
      helo
    </>
  )
}

export default _Products
