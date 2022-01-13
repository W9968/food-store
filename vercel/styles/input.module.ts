import styled from 'styled-components'

export const GroupField = styled.div`
  height: 52px;
  border: none;
  display: flex;
  border-radius: 5px;
  margin-bottom: 38px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.accent.hover};
  filter: drop-shadow(0 4mm 4mm rgba(100, 100, 100, 5%));

  &:last-child {
    margin-bottom: 0;
  }
`

export const IconSet = styled.div`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.units._24};
`

export const Field = styled.input`
  flex: 1;
  height: 52px;
  border: none;
  outline: none;
  border-radius: 0 4px 4px 0;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.theme.units._14};
  padding-right: ${(props) => props.theme.units._14};
  background: ${(props) => props.theme.accent.hover};
`

export const AreaField = styled.div`
  border: none;
  height: 250px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 38px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.accent.hover};
  filter: drop-shadow(0 4mm 4mm rgba(100, 100, 100, 5%));

  &:last-child {
    margin-bottom: 0;
  }
`

export const AreaIcon = styled.div`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0;
  font-size: ${(props) => props.theme.units._24};
`

export const AreaContent = styled.textarea`
  flex: 1;
  resize: none;
  border: none;
  height: 250px;
  outline: none;
  padding: 10px 0;
  border-radius: 0 4px 4px 0;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.theme.units._14};
  padding-right: ${(props) => props.theme.units._14};
  background: ${(props) => props.theme.accent.hover};
`
