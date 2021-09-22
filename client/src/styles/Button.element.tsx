import styled from 'styled-components'

export const Field = styled.button`
  width: 100%;
  border: none;
  height: 58px;
  display: flex;
  outline: none;
  cursor: pointer;
  font-size: 90%;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-family: 'Poppins', serif;
  color: ${(props) => props.theme.background};
  padding: ${(props) => props.theme.units[1]};
  margin-top: calc(${(props) => props.theme.units[2]} * 2);
  margin-bottom: ${(props) => props.theme.units[1]};
  border-radius: ${(props) => props.theme.units[0]};

  background-size: 210%;
  background-position: 100%;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.accent.primary} 50%,
    ${(props) => props.theme.accent.quaternary} 50%
  );
  transition: all 0.3s;

  &:hover,
  &:focus-within {
    background-position: 0%;
  }
`
