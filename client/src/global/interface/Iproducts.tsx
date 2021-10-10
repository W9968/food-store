export interface Icatalog {
  id?: number
  category?: string
  brands: Ibrands[]
}
export interface Icatalogonly {
  id?: number
  category?: string
}

interface Ibrands {
  id?: number
  brandName?: string
  catalog_id?: number
  products: Iproducts[]
}

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

// card components

export interface IcardProduct {
  id: string
  name: string
  summary: string
  oldPrice: string
  newPrice: string
  pic: string
  expirationDate: string
  brand: string
  category: string
}
