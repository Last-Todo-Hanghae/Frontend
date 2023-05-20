import React from 'react'
import * as style from "../Styles/styles"
import LoginBox from '../Components/LoginBox'
import Header from '../Components/Header'

function Login() {
  return (
    <style.Layout>
        <Header/>
        <LoginBox />
    </style.Layout>
  )
}

export default Login