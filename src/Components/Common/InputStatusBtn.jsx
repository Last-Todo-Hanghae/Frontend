import React from 'react'
import * as style from "../../Styles/styles"

function InputStatusBtn({ type, onClick, children }) {
  return (
    <style.InputStateBtn type={ type } onClick={ onClick } inputState={ children }>{ children }</style.InputStateBtn>
  )
}

export default InputStatusBtn