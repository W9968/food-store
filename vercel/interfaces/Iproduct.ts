export interface Iproduct {
  id?: string
  brand_id: number
  productName: string
  productSummary: string
  productOldPrice: string
  productNewPrice: string
  productDesription: string
  productInventroy: number
  productExpirationDate: string
  productFilePathImage: string
  updated_at: string
}

export interface Ibrands {
  id?: number
  brandName: string
  catalog_id: number
  products: Iproduct[]
}

export interface Icatalog {
  id?: number
  category?: string
  brands: Ibrands[]
}

export interface IproductContext {
  catalogs: Icatalog[]
  brands: Ibrands[]
  allProduct: Iproduct[]
  oneProduct: Iproduct
  getAllProducts: () => void
  getOneProduct: (id: string) => void
}
