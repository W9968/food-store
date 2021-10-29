import styled from 'styled-components'

export const Field = styled.div`
  margin-bottom: 30px;
`

// input field

export const Wrapper = styled.button`
  width: 100%;
  border: none;
  height: 48px;
  display: flex;
  outline: none;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.units[2]};
  border-radius: ${(props) => props.theme.units[0]};
  background: ${(props) => props.theme.accent.tertiary};

  &:focus-within {
    filter: contrast(0.95);
  }
`

export const Input = styled.input`
  flex: 1;
  border: none;
  height: 48px;
  outline: none;
  background: none;
  overflow: hidden;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.theme.units[3]};
  border-radius: ${(props) => props.theme.units[0]};

  &::placeholder {
    font-weight: 600;
    text-transform: capitalize;
  }
`

export const FieldArea = styled.button`
  width: 100%;
  border: none;
  height: 200px;
  display: flex;
  outline: none;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
  background: ${(props) => props.theme.accent.tertiary};

  &:focus-within {
    filter: contrast(0.95);
  }
`

// texty area

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  resize: none;
  height: 200px;
  outline: none;
  font-size: 110%;
  background: none;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  padding: 0 ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
`

export const Message = styled.div`
  letter-spacing: 1px;
  color: ${(props) => props.theme.accent.error};
  font-size: calc(${(props) => props.theme.units[0]} * 2.5);
`
