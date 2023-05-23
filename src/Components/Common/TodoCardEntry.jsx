import React from "react";
import * as style from "../../Styles/styles";
import Checkbox from "./Checkbox";
import TodoCardBtns from "./TodoCardBtns";
import { useMutation, useQueryClient } from "react-query";
import { useState, useRef, useEffect } from "react";
import { TodoAPI } from "../../Axios/api";
import { EmptyCheck, FilledCheck } from '../../Assets/icons';

function TodoCardEntry({ todoId, isDone, title, priority }) {
  const queryClient = useQueryClient();

  const changePriorityMutation = useMutation(TodoAPI.changePrior, {
    onSuccess: () => queryClient.invalidateQueries("mytodo")
  })

  const todoPriorityChanger = () => {
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
    changePriorityMutation.mutate({ todoId, todoPriority: priority });
  };

  const changeIsDoneMutation = useMutation(TodoAPI.updateIsDone, {
    onSuccess: () => queryClient.invalidateQueries("mytodo"),
  });
  const isDoneHandler = () => {
    changeIsDoneMutation.mutate({ todoId })
  };

  const INIT_MODIFY_TITLE = ""
  const [modifyTitle, setModifyTitle] = useState(INIT_MODIFY_TITLE)
  const [modifyOn, setModifyOn] = useState(false)
  const modifyTodoMutation = useMutation(TodoAPI.modifyTodo, {
    onSuccess: () => queryClient.invalidateQueries("mytodo")
  });
  const modifyTodoHandler = () => {
    if (!modifyOn) {
        setModifyOn(!modifyOn)
    } else {
        setModifyOn(!modifyOn)
        if (modifyTitle !== INIT_MODIFY_TITLE) {
            modifyTodoMutation.mutate({ todoId, todoContent: modifyTitle })
            setModifyTitle(INIT_MODIFY_TITLE)
        }
        
    }
    
  }
  const modifyChangeHandler = (event) => {
    setModifyTitle(event.target.value)
  }
  const inputRef = useRef();
  useEffect(() => {
    if (modifyOn) {
        inputRef.current.focus();
    }
    
  }, [modifyOn]);


  return (
    <style.MyTodoCardEntryContainer>
      <style.MyTodoTextContainer>
        <style.NoBorderBtn onClick={isDoneHandler}>
          {isDone ? <FilledCheck /> : <EmptyCheck />}
        </style.NoBorderBtn>
        {modifyOn ? <style.ModifyingEntry ref={inputRef} onChange={modifyChangeHandler} value={modifyTitle}/> : <style.Entry isDone={isDone}>{title}</style.Entry>}
      </style.MyTodoTextContainer>
      <style.MyTodoCardBtnContainer>
        <style.InputStateBtnSmall onClick={todoPriorityChanger} value={priority}>
          {priority}
        </style.InputStateBtnSmall>
        <style.InputDefaultBtnSmall modify={modifyOn} onClick={modifyTodoHandler}>modify</style.InputDefaultBtnSmall>
        <style.InputDefaultBtnSmall>delete</style.InputDefaultBtnSmall>
      </style.MyTodoCardBtnContainer>
    </style.MyTodoCardEntryContainer>
  );
}

export default TodoCardEntry;
