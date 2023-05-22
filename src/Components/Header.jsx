import React, {useEffect} from "react";
import * as style from "../Styles/styles";
import UserProfileMini from "./Common/UserProfileMini";
import Menu from "./Common/Menu";
import { useQuery } from "react-query";
import { getUserInfo } from "../Axios/header";
import { AuthAPI } from "../Axios/api";

function Header({ isLogged }) {
  const heading = "Last Todo";
  const { data, isLoading,error } = useQuery("userinfo", AuthAPI.getUserInfo, {
    refetchOnWindowFocus: false,
  });
  
  // useEffect(()=>{
  //   const test = async () => {
  //     const user =  getUserInfo().then(res=>)
  //     console.log(user.data.userName)
  //   }
  // }, [])
  
  if(isLoading || error){
    return (
      <style.HeaderContainer>
        <style.H1>{heading}</style.H1>
      </style.HeaderContainer>
    );
  }

  /*
  */

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
