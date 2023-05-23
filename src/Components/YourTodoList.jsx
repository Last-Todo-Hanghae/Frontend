import React from "react";
import * as style from "../Styles/styles";

function YourTodoList({ todos }) {

  return (
    <style.YourTodoContainer>
      {todos.map(({todoId, todoContent, todoStatus}) => {
        return (
        // <style.YourTodoList key={todoId}>
        <style.YourTodoEntryContainer key={todoId}>
            {todoContent.length > 15 ? todoContent.substr(0,15)+'...' : todoContent}
        </style.YourTodoEntryContainer>
        // </style.YourTodoList>
        );
      })}
    </style.YourTodoContainer>
  );
}

export default YourTodoList;
