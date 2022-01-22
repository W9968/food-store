import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AuthWrapper = styled.section`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  position: fixed;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.units._36};
  background: ${({ theme }) => theme.accent.accent_color_2};
`

export const AuthForm = styled(motion.form)`
  width: 400px;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.units._36} ${({ theme }) => theme.units._28};
  filter: drop-shadow(0 4mm 4mm rgba(80, 80, 80, 15%));
  background: ${({ theme }) => theme.accent.accent_color_1};

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const AuthHeader = styled.div`
  > h1 {
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.units._28};
  }

  > p {
    color: #78787a;
    font-size: 14px;
  }

  margin-bottom: ${({ theme }) => theme.units._36};
`

export const AuthAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.units._48};

  > p {
    font-size: 12px;
    font-weight: 500;
    text-align: end;
    color: #78787a;

    > a {
      color: #994ff3;
      text-decoration: none;
    }
  }
`
