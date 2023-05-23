import React from "react";
import * as style from "../Styles/styles";
import UserCard from "../Components/UserCard";
import { TodoAPI } from "../Axios/api";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

function YourTodo() {
  const location = useLocation();
  const myName = location.state?.myName;
  
  // get yourTodo API
  const { data, isLoading, error } = useQuery("yourtodo", TodoAPI.getYourTodo);

  if(isLoading || error){
    return null
  }
  
  let yourTodos = data.data.yourtodo;
  yourTodos = yourTodos.filter((item) => item.userName !== myName )

  return (
    <style.YourBody>
      {yourTodos.map((yourTodos) => {
        return <UserCard data={yourTodos} key={yourTodos.userId}/>;
      })}
    </style.YourBody>
  );
}

export default YourTodo;
