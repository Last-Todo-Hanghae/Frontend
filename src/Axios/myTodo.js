import instance from "./api";

const getTodo = async () => {
    const token = localStorage.getItem("token")
    const response = await instance.get("/api/mytodo", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response)
    // return todos
}

const postTodo = async (userInfo) => {
    // const response = await instance.post("/api/mytodo", userInfo);
    // return response;
  };

export { getTodo, postTodo };