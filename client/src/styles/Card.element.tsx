import styled from 'styled-components'

export const ProductList = styled.div`
  width: 280px;
  height: 370px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.units[1]};
  filter: drop-shadow(0 4mm 4mm rgba(100, 100, 100, 5%));
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.units[1]}
    ${(props) => props.theme.units[1]} 0 0;
  background: ${(props) => props.theme.accent.tertiary};
`

export const Image = styled.img`
  width: 200px;
  display: flex;
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ProductTitle = styled.p`
  font-weight: 600;
  font-size: calc(${(props) => props.theme.units[1]}*1.125);
`

export const Price = styled.div`
  width: 40%;
  display: flex;
  font-weight: 500;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: ${(props) => props.theme.units[1]};
`

export const Actions = styled.div`
  left: 5%;
  bottom: 5%;
  height: 82px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(-5%, -5%);

  .cardbtn {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }
`

// mobile verision

export const MobileProductCard = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  flex-direction: row;
  border-radius: ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.background};
  filter: drop-shadow(0 4mm 4mm rgba(100, 100, 100, 5%));
`

export const MobileImage = styled.div`
  width: 125px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.units[1]} 0 0
    ${(props) => props.theme.units[1]};
  background: ${(props) => props.theme.accent.tertiary};
`

export const MobilePhoto = styled.img`
  width: 85px;
  height: 100px;
  display: flex;
`

export const MobileInfo = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.units[1]};
`
