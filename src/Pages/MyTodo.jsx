import React from 'react'
import { myData } from '../Components/testMyTodo'
import MyTodoList from '../Components/MyTodoList';
import * as style from "../Styles/styles";
import TodoInput from '../Components/Common/TodoInput';
import { useSelector, useEffect } from 'react-redux';
import { getTodo } from '../Axios/myTodo';

function MyTodo() {
  const isLogged = useSelector((state) => state.todo.isLogged);
  // const todos = getTodo()
  // console.log(todos)

  const data = myData.todoAll;
  const todays = data.filter(todo => todo.todoPriority === "today")
  const weeks = data.filter(todo => todo.todoPriority === "week")
  const months = data.filter(todo => todo.todoPriority === "month")

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