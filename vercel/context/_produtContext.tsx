import __a from 'hooks/useFetch'
import { useState, createContext, useContext, FC, useEffect } from 'react'
import {
  IproductContext,
  Iproduct,
  Ibrands,
  Icatalog,
} from 'interfaces/Iproduct'

const intial: IproductContext = {
  allProduct: [],
  brands: [],
  catalogs: [],
  oneProduct: {
    id: '',
    brand_id: 0,
    productName: '',
    productSummary: '',
    productOldPrice: '',
    productNewPrice: '',
    productDesription: '',
    productInventroy: 0,
    productExpirationDate: '',
    productFilePathImage: '',
    updated_at: '',
  },
  getAllProducts: () => {},
  getOneProduct: () => {},
}

const ProductContext = createContext<IproductContext>(intial)
export const __store = () => useContext(ProductContext)

const _ProductContext: FC = ({ children }) => {
  const [brands, setBrands] = useState<Ibrands[]>(intial.brands)
  const [catalogs, setCatalogs] = useState<Icatalog[]>(intial.catalogs)
  const [allProduct, setAllProduct] = useState<Iproduct[]>(intial.allProduct)
  const [oneProduct, setOneProduct] = useState<Iproduct>(intial.oneProduct)

  const getAllProducts = async () => {
    return await __a.get('/sanctum/csrf-cookie').then(async () => {
      await __a.get('/api/product').then((res) => {
        res.status === 200 && setAllProduct(res.data)
      })
    })
  }

  useEffect(() => {
    getAllProducts()
  }, []) // eslint-disable-line

  const getOneProduct = async (id: string) => {
    return await __a.get('/sanctum/csrf-cookie').then(async () => {
      await __a.get(`/api/product/${id}`).then((res) => {
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
