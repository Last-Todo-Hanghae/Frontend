import React from 'react'
import * as style from "../../Styles/styles"

function TodoCardBtns({ inputState }) {
  return (
    <>
        <style.InputStateBtnSmall inputState={ inputState }>{ inputState }</style.InputStateBtnSmall>
        <style.InputDefaultBtnSmall>modify</style.InputDefaultBtnSmall>
        <style.InputDefaultBtnSmall>delete</style.InputDefaultBtnSmall>
    </>
  )
}

export default TodoCardBtns