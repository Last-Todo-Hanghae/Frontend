import React from 'react'
import { useState } from 'react'
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

  // const queryClient = new QueryClient();
  const queryClient = useQueryClient();
  const mutation = useMutation(TodoAPI.postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("mytodo");
    }
  });

  const handleSubmit = () => {
    mutation.mutate({ todoContent: inputContent, todoPriority: inputStatus });
    setInputContent(INPUT_INIT_STATE);
  }

  return (
    <style.InputContainer>
        <style.Input value={ inputContent } onChange={ handleInputChange } />
        <InputStatusBtn stateChanger={ stateChanger } onClick={ stateChanger }>{ inputStatus }</InputStatusBtn>
        <style.InputDefaultBtn onClick={ handleSubmit }>submit</style.InputDefaultBtn>
    </style.InputContainer>
  )
}

export default TodoInput