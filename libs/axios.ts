import axios from "axios";

const url = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
