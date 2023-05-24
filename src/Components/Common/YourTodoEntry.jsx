import React from "react";
import * as style from "../../Styles/styles";
import { FilledCheck, EmptyCheck } from '../../Assets/icons';

function YourTodoEntry({ isDone, title, priority }) {
    return (
        // <style.MyTodoCardEntryContainer>
            <style.MyTodoTextContainer>
                <style.NoBorderBtn disabled={true}>
                    {isDone ? <FilledCheck /> : <EmptyCheck />}
                </style.NoBorderBtn>
                <style.Entry isDone={isDone}>{title}</style.Entry>
            </style.MyTodoTextContainer>
        // </style.MyTodoCardEntryContainer>
    )

}

export default YourTodoEntry