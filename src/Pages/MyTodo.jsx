import React from 'react'
import { myData } from '../Components/testMyTodo'
import MyTodoList from '../Components/MyTodoList';
import * as style from "../Styles/styles";
import TodoInput from '../Components/Common/TodoInput';
import { useSelector, useEffect } from 'react-redux';
import { TodoAPI } from '../Axios/api';
import { useQuery } from 'react-query';

function MyTodo() {
  // const isLogged = useSelector((state) => state.todo.isLogged);
  const { data, isLoading, error } = useQuery("mytodo", TodoAPI.getTodo);

  if(isLoading || error){
    return null
  }

  const todos = data.data.mytodo;

  let todays = []
  let weeks = []
  let months = []

  if (!!todos.length) {
    todays = todos.filter(todo => todo.todoPriority === "today")
    weeks = todos.filter(todo => todo.todoPriority === "week")
    months = todos.filter(todo => todo.todoPriority === "month")
  }

  return (
    <style.FlexCenterColumn>
      <TodoInput />
      <style.MyTodoContainer>
        <MyTodoList todos={todays} priority="today" />
        <MyTodoList todos={weeks} priority="week" />
        <MyTodoList todos={months} priority="month" />
    </style.MyTodoContainer>
    </style.FlexCenterColumn>

  )
}

export default MyTodo