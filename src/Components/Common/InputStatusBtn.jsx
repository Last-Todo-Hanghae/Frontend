import React from 'react'
import { InputStateBtn } from '../../Styles/styles'

function InputStatusBtn({ stateChanger, children }) {
  return (
    <InputStateBtn onClick={ stateChanger } inputState={ children }>{ children }</InputStateBtn>
  )
}

export default InputStatusBtn