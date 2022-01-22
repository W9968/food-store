import styled from 'styled-components'

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 5px;
  text-transform: capitalize;
  color: #78787a;
`

export const Input = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 24px;
  background: transparent;
`

export const EntryText = styled.input`
  flex: 1;
  width: 100%;
  height: 48px;
  outline: none;
  padding: 0 42px;
  font-weight: 600;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: ${({ theme }) => theme.units._14};
  color: ${({ theme }) => theme.accent.accent_color_5};
  background: ${({ theme }) => theme.accent.accent_color_2};
  border: 2px solid ${({ theme }) => theme.accent.accent_color_2};

  ::placeholder {
    font-weight: 400;
    text-transform: capitalize;
  }

  :focus-within {
    border: 2px solid ${({ theme }) => theme.accent.accent_color_5};
  }
`

export const Icon = styled.div`
  width: 36px;
  height: 48px;
  display: flex;
  font-size: 24px;
  position: absolute;
  align-items: center;
  justify-content: center;
`

export const Message = styled.div`
  right: 0;
  width: 36px;
  height: 48px;
  display: flex;
  font-size: 24px;
  position: absolute;
  align-items: center;
  justify-content: center;

  > .error {
    color: ${({ theme }) => theme.accent.accent_error};
  }

  > .sucess {
    color: ${({ theme }) => theme.accent.accent_success};
  }
`
