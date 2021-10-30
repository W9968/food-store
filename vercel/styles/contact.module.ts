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
    width: 500px;
    font-size: ${(props) => props.theme.units._16};
    line-height: calc(${(props) => props.theme.units._16} * 1.5);
    color: ${(props) => props.theme.accent.textshade};

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  &:first-child {
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
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1000px) {
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
  margin-top: 42px;

  @media (max-width: 750px) {
    width: 100%;
  }
`
