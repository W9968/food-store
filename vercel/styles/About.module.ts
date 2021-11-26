import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 10vw;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${(props) => props.theme.units._14};

  @media (max-width: 1400px) {
    margin: 0 2vw;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${(props) => props.theme.units._42};

  & > div {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Heading = styled.p`
  font-weight: 700;
  margin-bottom: 68px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: ${(props) => props.theme.scheme.text};
  font-size: ${(props) => props.theme.units._30};
`

export const Imagery = styled(Image)`
  border-radius: 40%;
  /* border-radius: ${(props) => props.theme.units._72}; */
`
