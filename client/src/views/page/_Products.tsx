import React from 'react'
import { SingleProductCard, CheckBox } from 'components/export'
import { Wrapper, Grid, Menu, Brands, Category } from 'styles/Product.styles'

const _Products: React.FC = () => {
  const brands: string[] = ['delice danone', 'sicam inc', 'vitalait']
  const categories: string[] = [
    'nourriture en boite',
    'produit laitier',
    'boissons',
  ]

  return (
    <Wrapper>
      <Menu>
        <Brands>
          <h2 style={{ textDecoration: 'underline', marginBottom: '1.5rem' }}>
            Marques de Produits
          </h2>
          {brands.map((el: string, i: number) => {
            return <CheckBox title={el} />
          })}
        </Brands>
        <h2 style={{ textDecoration: 'underline', margin: '1.5rem 0rem' }}>
          Catégories
        </h2>
        <Category>
          {categories.map((el: string, i: number) => {
            return <CheckBox title={el} />
          })}
        </Category>
      </Menu>
      <Grid>
        {[...Array(9)].map((el, i) => {
          return <SingleProductCard key={i} />
        })}
      </Grid>
    </Wrapper>
  )
}

export default _Products
