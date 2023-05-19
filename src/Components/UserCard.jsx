import React from "react";
import * as style from "../Styles/styles";
import UserProfile from "./Common/UserProfile";
import YourTodoList from './YourTodoList';

function UserCard({data}) {
  const { userName, UserInfo, Likes, Todos } = data;

  return (
    <style.YourCard>
      <UserProfile Likes={Likes}>{userName}</UserProfile>
      <YourTodoList todos={Todos}></YourTodoList>
    </style.YourCard>
  );
}

export default UserCard;
