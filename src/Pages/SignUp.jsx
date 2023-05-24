import React from "react";
import * as style from "../Styles/styles";
import { useState } from "react";
import SignUpBtn from "../Components/Common/SignUpBtn";
import { postSignUp } from "../Axios/signup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const regIdCond = /^[A-Za-z0-9]{4,15}$/;
  const regPwCond = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
  const [userInfo, setUserInfo] = useState({ id: "", pw: "" });
  const [pwConfirm, setPwConfirm] = useState("");
  const [idPassed, setIdPassed] = useState(false);
  const [pwPassed, setPwPassed] = useState(false);
  const [confirmPassed, setConfirmPassed] = useState(false);

  const { id, pw } = userInfo;

  const onConfirmHandler = (event) => {
    const newConfirm = event.target.value;
    setPwConfirm(newConfirm);
    if (newConfirm === userInfo.pw) {
      setConfirmPassed(true);
    } else {
      setConfirmPassed(false);
    }
  };

  const onChangeInput = (changeObj) => {
    const { name, value } = changeObj.target;

    const newUser = {
      ...userInfo,
      [name]: value,
    };
    setUserInfo(newUser);
    if (name === "id") {
      regIdCond.test(value) ? setIdPassed(true) : setIdPassed(false);
    } else {
      regPwCond.test(value) ? setPwPassed(true) : setPwPassed(false);
    }
  };

  const navigate = useNavigate();

  const mutation = useMutation(postSignUp, {
    onSuccess: () => {
      alert("회원가입에 성공하셨습니다.");
      navigate("/");
    },
    onError: () => alert("회원가입에 실패하셨습니다."),
  });

  const useSignUpBtn = () => {
    const newUser = { userName: userInfo.id, userPassword: userInfo.pw };
    mutation.mutate(newUser);
  };

  const ShowNotice = ({ type, isSuccess }) => {
    if (type === "id") {
      if (isSuccess) return  <style.ShowNoticeSuccess>이 ID를 사용할 수 있습니다.</style.ShowNoticeSuccess>;
      else
        return (
          <style.ShowNotice>
            아이디는 4자 이상 15자 이하, 영어 대소문자 및 숫자만 사용할 수
            있습니다.
          </style.ShowNotice>
        );
    } else if (type === "pw") {
      if (isSuccess) return <style.ShowNoticeSuccess>이 비밀번호를 사용할 수 있습니다.</style.ShowNoticeSuccess>;
      else
        return (
          <style.ShowNotice>
            비밀번호는 8자 이상 20자 이하, 영어 대소문자 및 숫자, 특수문자를
            모두 사용해야 합니다.
          </style.ShowNotice>
        );
    } else if (type === "confirm") {
      if (isSuccess) return <style.ShowNoticeSuccess>비밀번호가 일치합니다.</style.ShowNoticeSuccess>;
      else return <style.ShowNotice>비밀번호가 일치하지 않습니다.</style.ShowNotice>;
    }
  };

  // asdfA123!
  return (
    <style.SignContainer>
        <style.SignForm>
          <style.FlexCenter>
            <label htmlFor="id">ID</label>
            <style.LogInputCentered autoComplete="off" name="id" onChange={onChangeInput} value={id} type="text" />            
          </style.FlexCenter>
          <style.FlexCenter>
              <ShowNotice type="id" isSuccess={idPassed} />
          </style.FlexCenter>
          <style.FlexCenter>
            <label htmlFor="pw">PW</label>
            <style.LogInputCentered name="pw" onChange={onChangeInput} value={pw} type="password" />
          </style.FlexCenter>
          <style.FlexCenter>
              <ShowNotice type="pw" isSuccess={pwPassed} />
          </style.FlexCenter>
          <style.FlexCenter>
            <label htmlFor="pwConfirm">확인</label>
            <style.LogInputCentered name="pwConfirm" onChange={onConfirmHandler} value={pwConfirm} type="password" />
          </style.FlexCenter>
          <style.FlexCenter>
              <ShowNotice type="confirm" isSuccess={confirmPassed} />
          </style.FlexCenter>
        </style.SignForm>
        <a href="/">로그인</a>
        <SignUpBtn
          isPassed={idPassed && pwPassed && confirmPassed}
          onClick={useSignUpBtn}
        />
      </style.SignContainer>
  );
}

export default SignUp;
