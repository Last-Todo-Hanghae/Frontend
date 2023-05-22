import axios from "axios";
import { useQuery } from "react-query"
import instance from "./api";

const getTodo = async () => {
    // console.log(accessToken, refreshToken)
    
    const { data } = await instance.get("/api/mytodo")

    return data
}

const postTodo = async (userInfo) => {
    // const response = await instance.post("/api/mytodo", userInfo);
    // return response;
  };

export { getTodo, postTodo };