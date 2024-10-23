// authApi.js
import axios from "axios";

const authApi = axios.create({
  baseURL: "http://127.0.0.1/api-tarjetas-didacticas/public/api",
  withCredentials: true,
});

export default authApi;
