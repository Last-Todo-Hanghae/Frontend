import React from 'react'
import * as style from '../../Styles/styles'
import { EmptyHeart, FilledHeart } from '../../Assets/icons'
import { useMutation, useQueryClient } from 'react-query';
import { TodoAPI } from '../../Axios/api';

function UserProfile({ Likes, userId, profileGap, iconWidth, children }) {
  // console.log(Likes[0])
  // console.log(`${userId} : ${Likes[0] ? Likes[0].isLike : Likes[0]}`)
  const islike = Likes[0] ? Likes[0].isLike : Likes[0]
  const queryClient = useQueryClient();

  const mutation = useMutation(TodoAPI.updateLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("yourtodo");
    }
  });

  // click 시 isLike 변경
  const onLikeClickHandler = (event) => {
    event.stopPropagation(); // 하트를 눌렀을 때는 상위 컴포넌트에서 해당 user의 modal을 띄워주지 않기 위한 설정
    mutation.mutate({ userId: userId });
  }

  return (
    <style.ProfileContainer gap={profileGap}>
      <style.ProfileCircle />
      <span>{children}</span>
      <button onClick={onLikeClickHandler} style={{border:'0px'}}>
        {islike ? <FilledHeart width={iconWidth} /> : <EmptyHeart width={iconWidth} />}
      </button>
    </style.ProfileContainer>
  )
}

export default UserProfile