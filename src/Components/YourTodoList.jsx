import React from "react";
import * as style from "../Styles/styles";

function YourTodoList({ todos }) {

  return (
    <style.YourTodoContainer>
      {todos.map(({todoId, todoContent, todoStatus}) => {
        return (
        // <style.YourTodoList key={todoId}>
        <style.YourTodoEntryContainer key={todoId}>
            {todoContent.length > 14 ? todoContent.substr(0,14)+'...' : todoContent}
        </style.YourTodoEntryContainer>
        // </style.YourTodoList>
        );
      })}
    </style.YourTodoContainer>
  );
}

export default YourTodoList;
