import React, { useEffect, useState } from "react";
import * as style from "../Styles/styles";
import UserProfileMini from "./Common/UserProfileMini";
import Menu from "./Common/Menu";
import { useQuery } from "react-query";
import { AuthAPI } from "../Axios/api";
import { useNavigate } from "react-router-dom";

function Header() {
  const MainHeading = "Last Todo";
  const UserHeading = "My Todos, Your Todos, Logout"
  const [test, setTest] = useState("");
  const { data: userinfo } = useQuery(["userinfo"], AuthAPI.getUserInfo, {
    select: (data) =>  data.data
  });
  const router = useNavigate();

  useEffect(() => {
    setTest(localStorage.getItem("accessToken"));
  }, [router]);

  return (
    <>
      {test === null || test === "" ? (
        <style.HeaderContainer>
          <style.H1>{MainHeading}</style.H1>
        </style.HeaderContainer>
      ) : (
        <style.HeaderContainer>
          <UserProfileMini>{userinfo === undefined ? "loading" : userinfo.userName}</UserProfileMini>
          <Menu myName={userinfo === undefined ? "loading" : userinfo.userName}>{UserHeading}</Menu>
        </style.HeaderContainer>
      )}
    </>
  );
}

export default Header;
