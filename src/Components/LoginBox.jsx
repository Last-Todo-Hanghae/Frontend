import React from 'react'
import * as style from '../Styles/styles'

function LoginBox() {
  return (
    <style.FlexCenterColumn>
        <style.SignContainer>
            <style.SignForm>
                <style.FlexCenter>
                    <label for="id">ID</label>
                    <style.LogInput name="id" type="text" />
                </style.FlexCenter>
                <style.FlexCenter>
                    <label for="pw">PW</label>
                    <style.LogInput name="pw" type="password" />
                </style.FlexCenter>
            </style.SignForm>
            <a href="/SignUp">회원가입</a>
            <style.SignBtn>Login</style.SignBtn>
        </style.SignContainer>
    </style.FlexCenterColumn>
  )
}

export default LoginBox