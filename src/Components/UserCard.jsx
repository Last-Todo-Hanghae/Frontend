import React from 'react'
import * as style from '../Styles/styles'
import UserProfile from './Common/UserProfile'

function UserCard() {
  return (
    <style.YourCard>
        <UserProfile isDone={true}>testUserId</UserProfile>
    </style.YourCard>
  )
}

export default UserCard