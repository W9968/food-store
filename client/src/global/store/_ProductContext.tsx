import React, { useState } from 'react'
import __a from 'hooks/useFetch'
import { createContext, useContext } from 'react'

interface Iproducts {
  id?: number
  productName?: string
  productSummary?: string
  productOldPrice?: string
  productNewPrice?: string
  productDesription?: string
  productInventory?: number
  procutExpirationDate?: string
  productFilePathImage?: string
  brand_id?: number
}

interface Ibrands {
  id?: number
  brandName?: string
  catalog_id?: number
  products: Iproducts[]
}

interface Icatalog {
  id?: number
  category?: string
  brands: Ibrands[]
}

interface IproductContext {
  allProducts: Icatalog[]
  serverResponse: string
  getAllProduct: () => void
}

const intial: IproductContext = {
  allProducts: [],
  serverResponse: '',
  getAllProduct: () => {},
}

const ProductContext = createContext<IproductContext>(intial)
export const __service = () => useContext(ProductContext)

const _ProductProvider: React.FC = ({ children }) => {
  const [allProducts, setAllProducts] = useState<Icatalog[]>(intial.allProducts)
  const [serverResponse, setServerResponse] = useState(intial.serverResponse)

  const getAllProduct = async () => {
    return await __a.get('/sanctum/csrf-cookie').then((res) => {
      res.status === 204
        ? __a
            .get('/api/catalog')
            .then((res) => res.status === 200 && console.log(res.data))
        : setServerResponse(
            'It seems that ours servers are down, sorry for the inconvenience'
          )
    })
  }
  return (
    <ProductContext.Provider
      value={{ allProducts, serverResponse, getAllProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export default _ProductProvider
