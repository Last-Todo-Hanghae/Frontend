import React from 'react'
import { useState, useEffect } from 'react'
import * as style from "../../Styles/styles"
import InputStatusBtn from './InputStatusBtn'
import { useMutation, useQueryClient } from 'react-query'
import { TodoAPI } from '../../Axios/api'

function TodoInput() {
  const INPUT_INIT_STATE = "";
  const STATUS_INIT_STATE = "today";

  const [inputStatus, setInputStatus] = useState(STATUS_INIT_STATE);
  const [inputContent, setInputContent] = useState(INPUT_INIT_STATE);

  const stateChanger = () => {
    if (inputStatus === "today") { setInputStatus("week") }
    else if (inputStatus === "week") { setInputStatus("month") }
    else if (inputStatus === "month") { setInputStatus("today") }
  }

  const handleInputChange = (event) => {
    setInputContent(event.target.value);
  }

  const queryClient = useQueryClient();
  const mutation = useMutation(TodoAPI.postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("mytodo");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ todoContent: inputContent, todoPriority: inputStatus });
    setInputContent(INPUT_INIT_STATE);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!event.ctrlKey) return;
      switch (event.key) {
        case '1':
          setInputStatus("today");
          break;
        case '2':
          setInputStatus("week");
          break;
        case '3':
          setInputStatus("month");
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <form onSubmit={ handleSubmit }>
      <style.InputContainer>
        <style.InputCentered placeholder="write your todo" value={ inputContent } onChange={ handleInputChange } />
        <InputStatusBtn type={"button"} onClick={ stateChanger }>{ inputStatus }</InputStatusBtn>
        <style.InputDefaultBtn type="submit">submit</style.InputDefaultBtn>
      </style.InputContainer>
    </form>
  )
}

export default TodoInput