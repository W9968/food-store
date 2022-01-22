import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContactWrapper = styled(motion.section)`
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
  background: ${({ theme }) => theme.accent.accent_color_4};
`

export const Row = styled.div`
  width: 100%;

  :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      > p {
        letter-spacing: 1px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.accent.accent_color_2};
      }

      > a {
        font-size: 14px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: capitalize;
        color: ${({ theme }) => theme.accent.accent_color_3};
      }
    }

    > button {
      border: none;
      outline: none;
      display: flex;
      cursor: pointer;
      border-radius: 2px;
      align-items: center;
      justify-content: center;
      background: transparent;
      color: ${({ theme }) => theme.accent.accent_error};
    }
  }

  :nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      font-size: 6vw;
      cursor: pointer;
      position: relative;
      line-height: 1.05em;
      letter-spacing: 1px;
      font-family: 'Eksell';
      display: inline-block;
      text-decoration: none;
      transition: 300ms ease-in-out;
      color: ${({ theme }) => theme.accent.accent_color_2};

      ::after {
        left: 0%;
        top: 120%;
        width: 100%;
        content: '';
        position: absolute;
        transform: scale(0);
        transform-origin: bottom center;
        transition: transform 300ms ease-out;
        border-bottom: 1px solid ${({ theme }) => theme.accent.accent_color_3};
      }

      &:hover {
        ::after {
          transform: scale(1);
          transform-origin: bottom;
        }
      }
    }
  }

  :last-child {
    display: flex;
    justify-content: center;

    > div {
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      @media (max-width: 600px) {
        width: 100%;
      }

      > a {
        font-weight: 600;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.units._16};
        color: ${({ theme }) => theme.accent.accent_color_5};

        &:hover {
          filter: opacity(0.5);
          color: ${({ theme }) => theme.accent.accent_color_1};
        }
      }
    }
  }
`
