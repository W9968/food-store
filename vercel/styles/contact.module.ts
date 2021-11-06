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
    background-size: cover;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0px 0px 52px 100px;
    background-size: cover;
    background-image: url('https://cdn.dribbble.com/users/2567722/screenshots/11952304/media/1792c4c5c2a0a7559a50a1c845453c7f.png?compress=1&resize=1200x900');

    @media (max-width: 1000px) {
      width: 700px;
      margin: 0 auto;
      border-radius: 15px;
      background: ${(props) => props.theme.accent.white};
      filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 5%));
    }

    @media (max-width: 750px) {
      display: none;
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
  border-radius: 0px;
  align-items: center;
  margin: 0 ${(props) => props.theme.units._16};
  padding: ${(props) => props.theme.units._16};

  @media (max-width: 550px) {
    width: 100%;
  }

  & > div {
    display: flex;
    font-size: 1.5rem;
    margin-right: 10px;
    color: ${(props) => props.theme.scheme.body};

    @media (max-width: 1000px) {
      color: ${(props) => props.theme.scheme.domi};
    }
  }

  & > p {
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.scheme.body};

    @media (max-width: 1000px) {
      color: ${(props) => props.theme.scheme.text};
    }
  }
`
