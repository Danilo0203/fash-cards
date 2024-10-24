import api from "@/lib/axios";
import { AxiosError } from "axios";

export const getUserApi = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`);

    return {
      nombres: response.data.data.nombres,
      email: response.data.data.email,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
