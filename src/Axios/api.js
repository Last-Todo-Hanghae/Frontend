import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken")
    const refreshToken = localStorage.getItem("refreshToken")

    config.headers.accessToken = `Bearer ${accessToken ? accessToken:''}`;
    config.headers.refreshToken = `Bearer ${refreshToken ? refreshToken:''}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);

export const AuthAPI = {
  getUserInfo: () => instance.get("/api/userInfo"),
  postLogIn: (payload) => instance.post("/api/login", payload),
}

export const TodoAPI = {
  // mytodo
  getTodo: () => instance.get("/api/mytodo"),
  postTodo: (payload) =>  instance.post("/api/mytodo", payload),
  changePrior: (payload) => instance.put(`api/mytodo/${payload.todoId}/priority`, payload),
  updateIsDone: (payload) => instance.put(`/api/mytodo/${payload.todoId}/isdone`, payload),
  modifyTodo: (payload) => instance.put(`/api/mytodo/${payload.todoId}/content`, payload),
  deleteTodo: (payload) => instance.delete(`/api/mytodo/${payload.todoId}`, payload),
  // yourtodo
  getYourTodo: () => instance.get("/api/yourtodo"),
  updateLike: (payload) => instance.put(`/api/yourtodo/${payload.userId}/like`, payload),
  getYourTodoDetail: (userId) => instance.get(`/api/yourtodo/${userId}`)
}
export default instance;
