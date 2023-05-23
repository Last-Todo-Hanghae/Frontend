import React from 'react'
import * as style from "../Styles/styles"
import TodoCardEntry from './Common/TodoCardEntry'

function TodoCard({ todo }) {
  console.log(todo)
  return (
    <TodoCardEntry todoId={ todo.todoId } isDone={ todo.todoIsDone } title={ todo.todoContent } priority={ todo.todoPriority }/>

  )
}


export default TodoCard