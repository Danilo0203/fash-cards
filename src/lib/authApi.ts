// authApi.js
import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PRO_URL,
  withCredentials: true,
});

export default authApi;
