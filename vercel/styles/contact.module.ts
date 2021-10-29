import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.units._14};
`

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Col = styled.div`
  > p {
    width: 360px;
    font-size: ${(props) => props.theme.units._16};
    line-height: calc(${(props) => props.theme.units._16} * 1.5);
    color: ${(props) => props.theme.accent.textshade};

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  &:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeadingUs = styled.h1`
  margin-bottom: 24px;
  font-family: 'Noto Serif Display', serif;
  font-size: ${(props) => props.theme.units._72};
`

export const FormContact = styled.form`
  width: 500px;
  margin-top: 42px;

  @media (max-width: 1000px) {
    margin-top: 8%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`
