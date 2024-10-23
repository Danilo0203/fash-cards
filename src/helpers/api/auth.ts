import authApi from "@/lib/authApi";

export const loginApi = async (data: { email: string; password: string }) => {
  try {
    const response = await authApi.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
