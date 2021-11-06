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
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  > span > p {
    width: 500px;
    font-size: ${(props) => props.theme.units._16};
    line-height: calc(${(props) => props.theme.units._16} * 1.5);
    color: ${(props) => props.theme.accent.textshade};

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  &:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
    border-radius: 25px;
    background-size: cover;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0px 0px 52px 52px;
    background-image: url('https://cdn.dribbble.com/users/5166438/screenshots/13905757/media/ed52465176425610bf9a2d0965521d7a.png?compress=1&resize=1200x900');

    @media (max-width: 1000px) {
      background-repeat: no-repeat;
      align-items: flex-start;
      background-size: 500%;
      margin: 52px 0px;
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
  margin-bottom: 52px;

  @media (max-width: 750px) {
    width: 100%;
  }
`

export const Card = styled.div`
  width: 400px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  margin: 0 ${(props) => props.theme.units._16};
  padding: ${(props) => props.theme.units._16} 0;

  @media (max-width: 550px) {
    width: 100%;
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
  }
`
