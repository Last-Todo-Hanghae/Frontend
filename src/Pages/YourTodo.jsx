import React from "react";
import * as style from "../Styles/styles";
import UserCard from "../Components/UserCard";
import { yourData } from '../Components/testYourTodo';

function YourTodo() {
  const data = yourData.UserAll;

  return (
    <style.YourBody>
      {data.map((todoList) => {
        return <UserCard data={todoList} key={todoList.userId}/>;
      })}
    </style.YourBody>
  );
}

export default YourTodo;
