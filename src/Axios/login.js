import instance from "./api";

const postLogIn = async (userInfo) => {
    const response = await instance.post("/api/login", userInfo);
    return response;
  };
  
  export { postLogIn };
  