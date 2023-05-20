import instance from "./api";

const postSignUp = async (newUser) => {
  const response = await instance.post("/api/signup", newUser);
  return response;
};

export { postSignUp };
