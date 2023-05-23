import React from "react";
import * as style from "../../Styles/styles";
import { FilledCheck, EmptyCheck } from '../../Assets/icons';

function YourTodoEntry({ isDone, title, priority }) {
    return (
        // <style.MyTodoCardEntryContainer>
            <style.MyTodoTextContainer>
                {isDone ? <FilledCheck /> : <EmptyCheck />}
                <style.Entry isDone={isDone}>{title}</style.Entry>
            </style.MyTodoTextContainer>
        // </style.MyTodoCardEntryContainer>
    )

}

export default YourTodoEntry