import React from 'react'
import { InputStateBtn } from '../../Styles/styles'

function InputStatusBtn({children}) {
  return (
    <InputStateBtn inputState={children}>{children}</InputStateBtn>
  )
}

export default InputStatusBtn