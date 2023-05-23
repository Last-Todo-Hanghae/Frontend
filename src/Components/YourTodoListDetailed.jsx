import React from 'react'
import * as style from "../Styles/styles"
import YourTodoEntry from './Common/YourTodoEntry'

function YourTodoListDetailed({ todos, priority }) {
    return (
        <style.MyTodoListContainer>
            <h3>{ priority }</h3>
            <style.MyTodoCardContainer>
                { todos.map(todo => <YourTodoEntry isDone={todo.todoIsDone} title={todo.todoContent} priority={todo.todoPriority}/>)}
            </style.MyTodoCardContainer>
        </style.MyTodoListContainer>
    )
}

export default YourTodoListDetailed