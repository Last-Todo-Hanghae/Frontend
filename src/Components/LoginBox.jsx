import React from 'react'
import * as style from '../Styles/styles'

function LoginBox() {
  return (
    <style.FlexCenterColumn>
        <style.SignContainer>
            <style.SignForm>
                <label>
                    ID :
                    <style.SignInput name="id" type="text" />
                </label>
                <label>
                    PW : 
                    <style.SignInput name="pw" type="password" />
                </label>
            </style.SignForm>
            <a>회원가입</a>
            <style.SignBtn>Login</style.SignBtn>
        </style.SignContainer>
    </style.FlexCenterColumn>
  )
}

export default LoginBox