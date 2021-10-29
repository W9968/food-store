export interface ImenuArray {
  path: string
  name: string
}
// 'produits', 'A propos', 'Nous Contacter'
export const menuArray: ImenuArray[] = [
  { path: 'products', name: 'Produits' },
  { path: 'about', name: 'A propos' },
  { path: 'contact', name: 'Nous Contacter' },
]
