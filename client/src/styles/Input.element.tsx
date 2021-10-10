import styled, { css } from 'styled-components'

export const Field = styled.div`
  margin-top: ${(props) => props.theme.units[4]};
`

// input field

interface IvalidateProps {
  readonly isValid: boolean
}

export const Wrapper = styled.button<IvalidateProps>`
  width: 100%;
  border: none;
  height: 58px;
  display: flex;
  outline: none;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0 ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
  background: ${(props) => props.theme.accent.tertiary};
  border: ${(props) => props.isValid && css`1px solid`};
  border-color: ${(props) => props.isValid && props.theme.accent.error};

  &::after {
    width: 0;
    left: 50%;
    height: 2px;
    content: '';
    bottom: 0px;
    position: absolute;
    transition: all 0.3s;
    background: ${(props) =>
      props.isValid ? props.theme.accent.error : props.theme.accent.primary};
  }

  &:focus-within {
    background: ${(props) => props.theme.background};
  }

  &:focus-within::after {
    left: 0;
    width: 100%;
  }
`

export const Input = styled.input`
  flex: 1;
  border: none;
  height: 48px;
  outline: none;
  font-size: 110%;
  background: none;
  overflow: hidden;
  padding: 0 ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
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

  &::after {
    width: 0;
    left: 50%;
    height: 2px;
    content: '';
    bottom: 0px;
    position: absolute;
    transition: all 0.3s;
    background: ${(props) => props.theme.accent.primary};
  }

  &:focus-within {
    background: ${(props) => props.theme.background};
  }

  &:focus-within::after {
    left: 0;
    width: 100%;
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
  font-family: 'Poppins', serif;
  padding: 0 ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};
`

export const Message = styled.div`
  letter-spacing: 1px;
  color: ${(props) => props.theme.accent.error};
  font-size: calc(${(props) => props.theme.units[0]} * 2.5);
`
