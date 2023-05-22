import axios from "axios";
import { useQuery } from "react-query"

const getTodo = async () => {
    const accessToken = localStorage.getItem("accessToken")
    const refreshToken = localStorage.getItem("refreshToken")
    // console.log(accessToken, refreshToken)
    
    const { data } = await axios.get("/api/mytodo", {
        baseURL: process.env.REACT_APP_SERVER_URL,
        headers: {
            withCredentials: true,
            "Content-Type": `application/json`,
            accessToken: `Bearer ${accessToken}`,
            refreshToken: `Bearer ${refreshToken}`
        }
    })

    return data
}

const postTodo = async (userInfo) => {
    // const response = await instance.post("/api/mytodo", userInfo);
    // return response;
  };

export { getTodo, postTodo };