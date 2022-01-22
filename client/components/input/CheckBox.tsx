import { FC } from 'react'
import styled from 'styled-components'

type Iprops = {
  text?: string
}

const CheckBox: FC<Iprops & Record<string, any>> = ({ text, ...rest }) => {
  return (
    <Wrapper>
      <Switch>
        <input type='checkbox' {...rest} />
        <span className='slider round'></span>
      </Switch>

      <p>{text}</p>
    </Wrapper>
  )
}

export default CheckBox

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  > p {
    font-size: 14px;
    margin-left: 10px;
    color: #78787a;
  }
`

const Switch = styled.label`
  height: 18px;
  width: 34px;
  position: relative;
  display: inline-block;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
    border: none;
    outline: none;
  }

  & .slider {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: 0.4s;
    position: absolute;
    -webkit-transition: 0.4s;
    background-color: #afafaf;

    ::before {
      left: 4px;
      bottom: 4px;
      width: 10px;
      content: '';
      height: 10px;
      transition: 0.4s;
      position: absolute;
      -webkit-transition: 0.4s;
      background-color: ${({ theme }) => theme.accent.accent_color_1};
    }
  }

  > input:checked + .slider {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.accent.accent_color_4};

    ::before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }
  }

  > input:focus + .slider {
    border: none;
    outline: none;
    /* box-shadow: 0 0 1px #2196f3; */
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 26px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`
