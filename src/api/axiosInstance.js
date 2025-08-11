import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

const axiosInstance = axios.create({
    baseURL: apiUrl,
    withCredentials: true
});


export default axiosInstance;