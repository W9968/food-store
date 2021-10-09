import styled from 'styled-components'

export const Team = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
  }
`

export const TitleTeam = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.accent.error};
  margin-bottom: ${(props) => props.theme.units[1]};
  > p {
    font-size: 1rem;
    color: #808080;
    padding: ${(props) => props.theme.units[1]};
  }
`

export const Images = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => props.theme.units[2]};

  > p {
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: ${(props) => props.theme.units[1]};
  }

  > img {
    width: 200px;
    height: 200px;
    display: flex;
    border-radius: 50%;
  }
`
