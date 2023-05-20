import instance from "./api";

const getTodos = async () => {
    const response = await instance.post("/api/mytodo", {
      userName: "testuser",
      userPassword: "P@ssword",
    });
    return response;
  };
  
  export { getTodos };
  