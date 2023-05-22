import instance from "./api";
import axios from "axios";

const getUserInfo = async () => {
    

    const response = await instance.get("/api/userInfo");
    console.log(response)
    return response;
};

export { getUserInfo };
