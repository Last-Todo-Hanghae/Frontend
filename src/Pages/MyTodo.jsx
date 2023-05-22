import React from 'react'
import { myData } from '../Components/testMyTodo'
import MyTodoList from '../Components/MyTodoList';
import * as style from "../Styles/styles";
import TodoInput from '../Components/Common/TodoInput';
import { useSelector, useEffect } from 'react-redux';
import { getTodo } from '../Axios/myTodo';

function MyTodo() {
  const isLogged = useSelector((state) => state.todo.isLogged);
  const data = getTodo()

  let todays = []
  let weeks = []
  let months = []

  if (!!data.mytodo) {
    todays = data.mytodo.filter(todo => todo.todoPriority === "today")
    weeks = data.mytodo.filter(todo => todo.todoPriority === "week")
    months = data.mytodo.filter(todo => todo.todoPriority === "month")
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