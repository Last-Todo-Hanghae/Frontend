import React from 'react'
import * as style from '../../Styles/styles'
import { EmptyHeart, FilledHeart } from '../../Assets/icons'

function UserProfile({Likes, children}) {

  return (
    <style.ProfileContainer>
        <style.ProfileCircle/>
        <span>{children}</span>
        {Likes.isLike ? <FilledHeart width={"25px"}/> : <EmptyHeart width={"25px"}/>}
    </style.ProfileContainer>
  )
}

export default UserProfile