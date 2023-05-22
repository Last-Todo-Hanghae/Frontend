import instance from "./api";

const postLogIn = async (userInfo) => {
    const response = await instance.post("/api/login", userInfo)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.accessToken)});
    return response;
  };
  
  export { postLogIn };