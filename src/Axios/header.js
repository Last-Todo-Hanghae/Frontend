import instance from "./api";
import axios from "axios";

const getUserInfo = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    // console.log(accessToken);

    const response = await axios.get("/api/userInfo", {
        baseURL: process.env.REACT_APP_SERVER_URL,
        headers: {
            withCredentials: true,
            "Content-Type": `application/json`,
            accessToken: `Bearer ${accessToken}`,
            refreshToken: `Bearer ${refreshToken}`
        }
    })
    
    return response;
};

export { getUserInfo };
