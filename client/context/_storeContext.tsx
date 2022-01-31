import { __fetch } from 'hooks/useAxios'
import { useState, createContext, useContext, FC, useEffect } from 'react'
import {
  IproductContext,
  intialProductStore,
  Ibrands,
  Icatalog,
  Iproduct,
} from 'interfaces/Iproduct'

const ProductContext = createContext<IproductContext>(intialProductStore)
export const __store = () => useContext(ProductContext)

const _ProductContext: FC = ({ children }) => {
  const [brands, setBrands] = useState<Ibrands[]>(intialProductStore.brands)
  const [catalogs, setCatalogs] = useState<Icatalog[]>(
    intialProductStore.catalogs
  )
  const [allProduct, setAllProduct] = useState<Iproduct[]>(
    intialProductStore.allProduct
  )
  const [oneProduct, setOneProduct] = useState<Iproduct>(
    intialProductStore.oneProduct
  )

  const getAllProducts = async () => {
    return await __fetch
      .get('/sanctum/csrf-cookie')
      .then(async () => {
        await __fetch.get('/api/product').then((res) => {
          res.status === 200 && setAllProduct(res.data)
        })
      })
      .catch(() => {
        console.log('hello')
      })
  }

  useEffect(() => {
    getAllProducts()
  }, []) // eslint-disable-line

  const getOneProduct = async (id: string) => {
    return await __fetch.get('/sanctum/csrf-cookie').then(async () => {
      await __fetch.get(`/api/product/${id}`).then((res) => {
        res.status === 200 && setOneProduct(res.data)
      })
    })
  }

  return (
    <ProductContext.Provider
      value={{
        allProduct,
        brands,
        catalogs,
        oneProduct,
        getAllProducts,
        getOneProduct,
      }}>
      {children}
    </ProductContext.Provider>
  )
}

export default _ProductContext
