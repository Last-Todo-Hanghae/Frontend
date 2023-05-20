import React from 'react'
import * as style from "../../Styles/styles"
import InputStatusBtn from './InputStatusBtn'

function TodoInput() {
    const inputStatus = "today"
  return (
    <style.InputContainer>
        <style.Input />
        <InputStatusBtn>{inputStatus}</InputStatusBtn>
        <style.InputDefaultBtn>submit</style.InputDefaultBtn>
    </style.InputContainer>
  )
}

export default TodoInput