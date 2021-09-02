import styled from 'styled-components'
import { motion as mo } from 'framer-motion'

export const Wrapper = styled(mo.div)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.div`
  letter-spacing: 1px;
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 2);
`

export const Cols = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    &:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:last-child {
      display: none;
    }
  }
`

export const Form = styled.div`
  width: 80%;

  .form-styles {
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 200pt;
  border: none;
  outline: none;
  font-size: 'Poppins', sans-serif;
  padding: ${(props) => props.theme.spacing[0]};
  border-radius: ${(props) => props.theme.border[0]};
  background: ${(props) => props.theme.accent.primary};
  margin-bottom: calc(${(props) => props.theme.spacing[0]} * 2);
  filter: drop-shadow(0 1mm 2mm rgba(80, 80, 80, 5%));

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.foreground};
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.foreground};
  }
`
