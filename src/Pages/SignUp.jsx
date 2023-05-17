import React from 'react'
import * as style from "../Styles/styles"

function SignUp() {
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
                <label>
                    확인 : 
                    <style.SignInput name="pwConfirm" type="password" />
                </label>
            </style.SignForm>
            <a>로그인</a>
            <style.SignBtn>Sign In</style.SignBtn>
        </style.SignContainer>
    </style.FlexCenterColumn>
  )
}

export default SignUp