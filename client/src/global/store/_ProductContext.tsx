import React, { useState } from 'react'
import __a from 'hooks/useFetch'
import { createContext, useContext } from 'react'
import { Icatalog, Icatalogonly } from '../interface/Iproducts'

interface IproductContext {
  allProducts: Icatalog[]
  allCatalog: Icatalogonly[]
  serverResponse: string
  getAllProduct: () => void
  getCategories: () => void
}

const intial: IproductContext = {
  allProducts: [],
  allCatalog: [],
  serverResponse: '',
  getAllProduct: () => {},
  getCategories: () => {},
}

const ProductContext = createContext<IproductContext>(intial)
export const __service = () => useContext(ProductContext)

const _ProductProvider: React.FC = ({ children }) => {
  const [allProducts, setAllProducts] = useState<Icatalog[]>(intial.allProducts)
  const [allCatalog, setAllCatalog] = useState<Icatalogonly[]>(
    intial.allCatalog
  )
  const [serverResponse, setServerResponse] = useState(intial.serverResponse)

  const getAllProduct = async () => {
    return await __a.get('/sanctum/csrf-cookie').then((res) => {
      res.status === 204
        ? __a
            .get('/api/catalog')
            .then((res) => res.status === 200 && setAllProducts(res.data))
        : setServerResponse(
            'It seems that ours servers are down, sorry for the inconvenience'
          )
    })
  }

  const getCategories = async () => {
    return await __a.get('/sanctum/csrf-cookie').then((res) => {
      res.status === 204
        ? __a
            .get('/api/catalog=first')
            .then((res) => res.status === 200 && setAllCatalog(res.data))
        : setServerResponse(
            'It seems that ours servers are down, sorry for the inconvenience'
          )
    })
  }

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        allCatalog,
        serverResponse,
        getAllProduct,
        getCategories,
      }}>
      {children}
    </ProductContext.Provider>
  )
}

export default _ProductProvider
