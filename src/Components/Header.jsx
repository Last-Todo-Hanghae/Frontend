import React from 'react'
import * as style from "../Styles/styles"
import UserProfileMini from './Common/UserProfileMini'
import Menu from './Common/Menu'
// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

function Header({ isLogged }) {
  const heading = "Last Todo"
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  // const location = useLocation()
  // useEffect(() => {
  //   const resizeListener = () => {
  //     setInnerWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", resizeListener);
  //   console.log(location)
  // }, [location]);
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