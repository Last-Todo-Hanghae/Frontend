import React, { useState } from "react";
import * as style from "../Styles/styles";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postLogIn } from "../Axios/login";

function LoginBox() {
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

  // 
  const mutation = useMutation(postLogIn, {
    onSuccess: () => {
      alert("로그인에 성공하셨습니다.");
      navigate("/mytodo");
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
          <label>
            ID :
            <style.SignInput name="id" type="text" value={id} onChange={onChangeInput}/>
          </label>
          <label>
            PW :
            <style.SignInput name="pw" type="password" value={pw} onChange={onChangeInput}/>
          </label>
        </style.SignForm>
        <a>회원가입</a>
        <style.SignBtn onClick={useLoginBtn}>Login</style.SignBtn>
      </style.SignContainer>
    </style.FlexCenterColumn>
  );
}

export default LoginBox;
