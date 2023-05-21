import React from 'react'
import { useState } from 'react'
import * as style from "../../Styles/styles"
import InputStatusBtn from './InputStatusBtn'
import { useMutation } from 'react-query'
import { postTodo } from '../../Axios/myTodo'

function TodoInput() {
  // const status = ["today", "week", "month"]
  // const clicked = [0, 1, 2]
  const [inputStatus, setInputStatus] = useState("today")
  const stateChanger = () => {
    if (inputStatus === "today") { setInputStatus("week") }
    else if (inputStatus === "week") { setInputStatus("month") }
    else if (inputStatus === "month") { setInputStatus("today") }
  }

  // const mutation = useMutation(postTodo)



  // const inputStatus = "today"
  return (
    <style.InputContainer>
        <style.Input />
        <InputStatusBtn stateChanger={ stateChanger } onClick={ stateChanger }>{ inputStatus }</InputStatusBtn>
        <style.InputDefaultBtn onClick={ () => {} }>submit</style.InputDefaultBtn>
    </style.InputContainer>
  )
}

export default TodoInput