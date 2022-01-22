import styled from 'styled-components'

// header AuthHeaderButton

export const LoginAuthButton = styled.a`
  border: none;
  display: flex;
  line-height: 0;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  height: ${({ theme }) => theme.units._36};
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_4};
  background: ${({ theme }) => theme.accent.accent_color_2};
`

// login, register button

export const Button = styled.button`
  height: 42px;
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_2};
  background: ${({ theme }) => theme.accent.accent_color_4};

  &:hover {
    filter: opacity(0.8);
  }

  &:disabled {
    filter: contrast(0.5);
    cursor: wait;
  }
`

// landing page button

export const RouteButton = styled.button`
  height: 42px;
  border: none;
  outline: none;
  line-height: 0;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.units._14};
  padding: 0 ${({ theme }) => theme.units._36};
  color: ${({ theme }) => theme.accent.accent_color_2};
  background: ${({ theme }) => theme.accent.accent_color_4};

  &:hover {
    filter: opacity(0.8);
  }
`
