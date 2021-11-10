import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 10vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.units._14};

  @media (max-width: 1400px) {
    margin: 0 2vw;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  > span > p {
    width: 500px;
    font-size: ${(props) => props.theme.units._16};
    color: ${(props) => props.theme.accent.textshade};
    line-height: calc(${(props) => props.theme.units._16} * 1.5);

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  &:first-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 1000px) {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
  }

  &:last-child {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1000px) {
      display: flex;
      margin-top: 42px;
      align-items: center;
    }
  }
`

export const HeadingUs = styled.div`
  margin-bottom: 24px;
  font-family: 'Noto Serif Display', serif;
  font-size: ${(props) => props.theme.units._72};
`

export const FormContact = styled.form`
  width: 700px;
  border-radius: 10px;
  padding: ${(props) => props.theme.units._60} 48px;
  background: ${(props) => props.theme.accent.white};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: ${(props) => props.theme.units._48} 16px;
  }
`

export const Card = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.units._16} 0px;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.units._14};
  }

  & > div {
    display: flex;
    font-size: 1.5rem;
    margin-right: 10px;
    color: ${(props) => props.theme.scheme.domi};
  }

  & > p {
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.scheme.text};
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`
