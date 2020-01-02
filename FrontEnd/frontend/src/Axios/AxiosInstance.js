import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        post: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            "Access-Control-Allow-Methods" :  "GET, POST, PUT, DELETE, OPTIONS"
        }
    }
});



export default axiosInstance;
