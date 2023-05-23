import React from "react";
import * as style from "../../Styles/styles";
import Checkbox from "./Checkbox";
import TodoCardBtns from "./TodoCardBtns";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { TodoAPI } from "../../Axios/api";
import { EmptyCheck, FilledCheck } from '../../Assets/icons';

function TodoCardEntry({ todoId, isDone, title, priority }) {
  const queryClient = useQueryClient();

  const changeStateMutation = useMutation(
    ({ todoId, todoPriority }) => TodoAPI.changePrior(todoId, { todoPriority }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mytodo");
      },
    }
  );
  const todoStateChanger = () => {
    // eslint-disable-next-line default-case
    switch (priority) {
      case "today":
        priority = "week";
        break;
      case "week":
        priority = "month";
        break;
      case "month":
        priority = "today";
        break;
    }
    changeStateMutation.mutate({ todoId, todoPriority: priority });
  };

  const changeIsDoneMutation = useMutation(TodoAPI.updateIsDone, {
    onSuccess: () => queryClient.invalidateQueries("mytodo"),
  });
  const isDoneHandler = () => {
    changeIsDoneMutation.mutate({ todoId })
};

  return (
    <style.MyTodoCardEntryContainer>
      <style.MyTodoTextContainer>
        <style.NoBorderBtn onClick={isDoneHandler}>
          {isDone ? <FilledCheck /> : <EmptyCheck />}
        </style.NoBorderBtn>
        <style.Entry isDone={isDone}>{title}</style.Entry>
      </style.MyTodoTextContainer>
      <style.MyTodoCardBtnContainer>
        <style.InputStateBtnSmall onClick={todoStateChanger} value={priority}>
          {priority}
        </style.InputStateBtnSmall>
        <style.InputDefaultBtnSmall>modify</style.InputDefaultBtnSmall>
        <style.InputDefaultBtnSmall>delete</style.InputDefaultBtnSmall>
      </style.MyTodoCardBtnContainer>
    </style.MyTodoCardEntryContainer>
  );
}

export default TodoCardEntry;
