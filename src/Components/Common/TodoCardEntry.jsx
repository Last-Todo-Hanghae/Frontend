import React from "react";
import * as style from "../../Styles/styles";
import Checkbox from './Checkbox';
import TodoCardBtns from './TodoCardBtns';

function TodoCardEntry({ isDone, title, priority }) {
    // console.log(`title::${title}, isDone::${isDone}`)
    // console.log(`inputState:: ${priority}`)
    return (
        <style.MyTodoCardEntryContainer>
            <style.MyTodoTextContainer>
                <Checkbox isDone={ isDone } />
                <style.Entry isDone= { isDone }>{ title }</style.Entry>
            </style.MyTodoTextContainer>
            <style.MyTodoCardBtnContainer>
                <TodoCardBtns inputState={ priority } />
            </style.MyTodoCardBtnContainer>
        </style.MyTodoCardEntryContainer>

    )
}

export default TodoCardEntry;
