import styled from 'styled-components'

export const LandingWrapper = styled.section`
  margin-top: 24px;
`

export const Banner = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${({ theme }) => theme.units._24};
  background: ${({ theme }) => theme.accent.accent_color_2};
  background-image: url('/asset/Humanitarian.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;

  @media (max-width: 1000px) {
    background-size: 50%;
  }

  @media (max-width: 600px) {
    height: 300px;
    background: ${({ theme }) => theme.accent.accent_color_2};
  }

  > h1 {
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.units._48};

    @media (max-width: 600px) {
      font-size: ${({ theme }) => theme.units._36};
    }
  }

  > p {
    width: 400px;
    color: #78787a;
    margin-top: 18px;
    line-height: 1.5em;
    font-size: ${({ theme }) => theme.units._16};

    @media (max-width: 600px) {
      width: 100%;
      font-size: ${({ theme }) => theme.units._14};
    }
  }
`

// vlaues
export const ContainerValues = styled.div`
  margin-top: 100px;

  > h1 {
    font-weight: 600;
    position: relative;
    display: inline-block;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.units._36};

    ::after {
      left: 0;
      top: 120%;
      width: 50%;
      content: '';
      position: absolute;
      border-bottom: 5px solid ${({ theme }) => theme.accent.accent_color_3};
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: calc(${({ theme }) => theme.units._48} * 1.25) 0;
  }

  > p {
    width: 600px;
    color: #78787a;
    margin-top: 25px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`
export const Cases = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 0.5em;
  padding: ${({ theme }) => theme.units._24} ${({ theme }) => theme.units._16};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));
  background: ${({ theme }) => theme.accent.accent_color_1};
  margin-bottom: ${({ theme }) => theme.units._16};

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.units._28};
  }

  > div {
    width: 62px;
    height: 62px;
    display: flex;
    font-size: 32px;
    align-items: center;
    border-radius: 25px;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.units._24};
    color: ${({ theme }) => theme.accent.accent_color_1};
    background: ${({ theme }) => theme.accent.accent_color_3};
  }

  > h3 {
    font-size: 1.4em;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: ${({ theme }) => theme.units._14};
  }

  > p {
    width: 90%;
    color: #78787a;
    font-size: ${({ theme }) => theme.units._14};
  }
`

// team

export const MeetTeam = styled.article`
  display: flex;
  justify-content: space-between;
  margin: calc(${({ theme }) => theme.units._48} * 1.25) 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  > div {
    margin-bottom: 50px;

    > h1 {
      margin-top: 5px;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.units._18};
    }

    > p {
      color: #78787a;
      font-weight: 500;
      font-size: ${({ theme }) => theme.units._14};
    }
  }
`
