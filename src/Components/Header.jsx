import React from "react";
import * as style from "../Styles/styles";
import UserProfileMini from "./Common/UserProfileMini";
import Menu from "./Common/Menu";
import { useQuery } from "react-query";
import { getUserInfo } from "../Axios/header";

function Header({ isLogged }) {
  const heading = "Last Todo";
  // const userName = "";

  const {data} = useQuery('userinfo', getUserInfo);
  console.log(data.data.userName);

  if (isLogged) {
    return (
      <style.HeaderContainer>
        <UserProfileMini>{data.data.userName}</UserProfileMini>
        <Menu>My Todos, Your Todos, Logout</Menu>
      </style.HeaderContainer>
    );
  } else {
    return (
      <style.HeaderContainer>
        <style.H1>{heading}</style.H1>
      </style.HeaderContainer>
    );
  }
}

export default Header;
