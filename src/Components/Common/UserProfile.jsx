import React from 'react'
import * as style from '../../Styles/styles'
import { EmptyHeart, FilledHeart } from '../../Assets/icons'
import { useMutation, useQueryClient } from 'react-query';
import { TodoAPI } from '../../Axios/api';

function UserProfile({ Likes, userId, children }) {
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
  const onLikeClickHandler = () => {
    // if (Likes.length === 0) {
    //   Likes.push({ isLike: true });
    // } else {
    //   Likes.isLike = !Likes.isLike;
    // }
    mutation.mutate({ userId: userId });
  }

  return (
    <style.ProfileContainer>
      <style.ProfileCircle />
      <span>{children}</span>
      <button onClick={onLikeClickHandler} style={{border:'0px'}}>
        {islike ? <FilledHeart width={"25px"} /> : <EmptyHeart width={"25px"} />}
      </button>
    </style.ProfileContainer>
  )
}

export default UserProfile