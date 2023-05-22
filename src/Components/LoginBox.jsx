import React, { useState } from "react";
import * as style from "../Styles/styles";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postLogIn } from "../Axios/login";
import { useDispatch } from "react-redux";
import { login } from "../Redux/modules/todoSlice";

function LoginBox() {
  // 중앙 state 관리 
  const dispatch = useDispatch();

  // user id, pw state
  const [userInfo, setUserInfo] = useState({ id: "", pw: "" });
  const { id, pw } = userInfo;

  // onChange 적용 함수
  const onChangeInput = (changeObj) => {
    const { name, value } = changeObj.target;

    const newUser = {
      ...userInfo,
      [name]: value,
    };

    setUserInfo(newUser);
  };

  // 로그인 완료 시 mytodo로 이동하기 위한 hook
  const navigate = useNavigate();

  // 로그인 정보 db로 데이터 보내기
  // 성공 시 : alert & isLogged state 변경 & mytodo로 이동
  // 실패 시 : alert
  const mutation = useMutation(postLogIn, {
    onSuccess: () => {
      dispatch(login());
      alert("로그인에 성공하셨습니다.");
      
      navigate("/mytodo", {replace:true});
    },
    onError: () => alert("로그인에 실패하셨습니다."),
  });

  const useLoginBtn = () => {
    const newUser = { userName: id, userPassword: pw };
    mutation.mutate(newUser);
  };

  return (
    <style.FlexCenterColumn>
      <style.SignContainer>
        <style.SignForm>
          <style.FlexCenter>
            <label for="id">ID</label>
            <style.LogInput
              name="id"
              type="text"
              value={id}
              onChange={onChangeInput}
            />
          </style.FlexCenter>
          <style.FlexCenter>
            <label for="pw">PW</label>
            <style.LogInput
              name="pw"
              type="password"
              value={pw}
              onChange={onChangeInput}
            />
          </style.FlexCenter>
        </style.SignForm>
        <a href="/signup">회원가입</a>
        <style.SignBtn onClick={useLoginBtn}>Login</style.SignBtn>
      </style.SignContainer>
    </style.FlexCenterColumn>
  );
}

export default LoginBox;
