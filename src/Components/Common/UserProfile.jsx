import React from 'react'
import * as style from '../../Styles/styles'
import { EmptyHeart, FilledHeart } from '../../Assets/icons'

function UserProfile({Likes, children}) {

  return (
    <style.FlexCenter>
        <style.ProfileCircle/>
        <span>{children}</span>
        {Likes.isLike ? <FilledHeart width={'30px'}/> : <EmptyHeart width={'30px'}/>}
    </style.FlexCenter>
  )
}

export default UserProfile