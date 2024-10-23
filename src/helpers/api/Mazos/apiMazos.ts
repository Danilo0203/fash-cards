import api from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const getTiposMazosApi = async () => {
  try {
    const response = await api.get("/tipos-mazos");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const createTipoMazoApi = async (tipoMazo: any) => {
  try {
    const response = await api.post("/tipos-mazos", tipoMazo);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al crear el tipo de mazo"}`,
      );
      return error.response?.data;
    }
  }
};

export const createMazoApi = async (mazo: any) => {
  try {
    const response = await api.post("/mazos", mazo);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al crear el mazo"}`,
      );
      return error.response?.data;
    }
  }
};

export const getMazosApi = async () => {
  try {
    const response = await api.get("/mazos");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// editar mazo
export const updateMazoApi = async (id: number, mazo: any) => {
  try {
    const response = await api.patch(`/mazos/${id}`, mazo);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al actualizar el mazo"}`,
      );
      return error.response?.data;
    }
  }
};
