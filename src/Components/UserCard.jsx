import React from "react";
import * as style from "../Styles/styles";
import UserProfile from "./Common/UserProfile";
import YourTodoList from './YourTodoList';
import Modal from '../Components/Common/Modal';
import { useState } from 'react';
import { TodoAPI } from "../Axios/api";
import { useQuery } from "react-query";
import UserTodoModal from './UserTodoModal';

function UserCard({data}) {
  const { userName, UserInfo, Likes, Todos, userId } = data;
  const [isModalOpen, setIsModalOpen] = useState(false)
 // yourTodo 상세조회 API

  // const useTodo = (userId) => {
    
  //   if (detailIsLoading || detailError) {
  //     return null
  //   }
  //   console.log(detailData)
  // }
  
  const showUserModal = () => {
    setIsModalOpen(true)
  }
  const closeUserModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <style.YourCard onClick={showUserModal}>
        <UserProfile profileGap="15px" iconWidth="40px" Likes={Likes} userId={userId}>{userName}</UserProfile>
        <YourTodoList todos={Todos}></YourTodoList>
      </style.YourCard>
      {isModalOpen &&
      <UserTodoModal userId={userId} isOpen={isModalOpen} onClose={closeUserModal} />
      }
    </>

  );
}

export default UserCard;
