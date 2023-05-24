import React from 'react'
import * as style from "../Styles/styles"
import TodoCard from './TodoCard'

function MyTodoList({ todos, priority }) {
  return (
    <style.MyTodoListContainer>
        <h3>{ priority }</h3>
        <style.MyTodoCardContainer>
            { todos.map(todo => <TodoCard key={ todo.todoId } todo={ todo }/>) }
        </style.MyTodoCardContainer>
    </style.MyTodoListContainer>
  )
}

export default MyTodoList