import React from 'react'
import * as style from "../Styles/styles"
import UserProfileMini from './Common/UserProfileMini'
import Menu from './Common/Menu'

function Header() {
  return (
    <style.HeaderContainer>
        <UserProfileMini>testUserId</UserProfileMini>
        <Menu>My Todos, Your Todos, Logout</Menu>
    </style.HeaderContainer>
  )
}

export default Header