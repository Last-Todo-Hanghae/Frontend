import React from "react";
import * as style from "../../Styles/styles"

function SignUpBtn({ isPassed }) {
  const message = "Sign Up";
  if (isPassed) {
    return <style.SignBtn>{message}</style.SignBtn>;
  } else {
    return <style.SignBtn disabled>{message}</style.SignBtn>;
  }
}

export default SignUpBtn;

