import React from 'react'
import * as style from "../Styles/styles"
import UserProfileMini from './Common/UserProfileMini'
import Menu from './Common/Menu'

function Header({ isLogged }) {
  const heading = "Last Todo"
  if (isLogged) {
    return (
      <style.HeaderContainer>
          <UserProfileMini>testUserId</UserProfileMini>
          <Menu>My Todos, Your Todos, Logout</Menu>
      </style.HeaderContainer>
    )
  } else {
    return (
      <style.HeaderContainer>
        <style.H1>{heading}</style.H1>
      </style.HeaderContainer>
    )
  }

}

export default Header