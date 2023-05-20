import React from "react";
import * as style from "../Styles/styles";

function YourTodoList({ todos }) {
    console.log(todos)
  return (
    <style.YourTodoContainer>
      {todos.map(({todoId, todoContent, todoStatus}) => {
        return (
        <style.YourTodoList key={todoId}>
            {todoContent}
        </style.YourTodoList>
        );
      })}
    </style.YourTodoContainer>
  );
}

export default YourTodoList;
