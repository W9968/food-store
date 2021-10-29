import React from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'
import { CgSpinnerAlt } from 'react-icons/cg'

const Loading = () => {
  return <Spinner />
}

export default Loading

const rotating = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const Spinner = styled(CgSpinnerAlt)`
  font-size: ${(props) => props.theme.units._24};
  -webkit-animation: ${rotating} 700ms linear infinite;
  -moz-animation: ${rotating} 700ms linear infinite;
  -ms-animation: ${rotating} 700ms linear infinite;
  -o-animation: ${rotating} 700ms linear infinite;
  animation: ${rotating} 700ms linear infinite;
`
