import React from 'react'
import * as style from "../Styles/styles"
import LoginBox from '../Components/LoginBox'
import Header from '../Components/Header'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/modules/todoSlice'

function Login() {
  // const dispatch = useDispatch();
  // dispatch(logout());

  return (
    <style.Layout>
        <LoginBox />
    </style.Layout>
  )
}

export default Login