import React from 'react'
import * as style from '../Styles/styles'
import UserCard from '../Components/UserCard'

function YourTodo() {
    const tmpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <style.YourBody>
        {tmpArray.map(() => {
            return (
                <UserCard />
            )
        })}
    </style.YourBody>
  )
}

export default YourTodo