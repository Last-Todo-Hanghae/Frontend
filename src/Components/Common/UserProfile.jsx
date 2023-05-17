import React from 'react'
import * as style from '../../Styles/styles'
import { EmptyHeart, FilledHeart } from '../../Assets/icons'

function UserProfile({isDone, children}) {
  return (
    <style.FlexCenter>
        <style.ProfileCircle/>
        <span>{children}</span>
        {isDone ? <EmptyHeart width={'30px'}/> : <FilledHeart width={'30px'}/>}
    </style.FlexCenter>
  )
}

export default UserProfile