import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
    // Authorization: `Bearer ${localStorage.getItem('token')}`
  },
});

// instance.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("token");

//     //요청시 AccessToken 계속 보내주기
//     if (!token) {
//       config.headers.accessToken = null;
//       config.headers.refreshToken = null;
//       return config;
//     }

//     if (config.headers && token) {
//       const { accessToken, refreshToken } = JSON.parse(token);
//       config.headers.authorization = `Bearer ${accessToken}`;
//       config.headers.refreshToken = `Bearer ${refreshToken}`;
//       return config;
//     }
//     // Do something before request is sent
//     console.log("request start", config);
//   },
//   function (error) {
//     // Do something with request error
//     console.log("request error", error);
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  function (response) {
    // 응답을 수정합니다.
    if (response) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response;
  },
  function (error) {
    // 오류를 수정합니다.
    error.message = "An error occurred";
    return Promise.reject(error);
  }
);

export default instance;
