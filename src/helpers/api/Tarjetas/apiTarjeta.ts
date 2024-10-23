import api from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

// Obtener todas las tarjetas de un mazo
export const getTarjetasApi = async (mazoId: number) => {
  try {
    const response = await api.get(`/tarjetas/${mazoId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// Crear una nueva tarjeta
export const createTarjetaApi = async (tarjeta: any) => {
  try {
    const response = await api.post("/tarjetas", tarjeta);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al crear la tarjeta"}`,
      );
      return error.response?.data;
    }
  }
};

// Actualizar una tarjeta existente
export const updateTarjetaApi = async (id: number, tarjeta: any) => {
  try {
    const response = await api.patch(`/tarjetas/${id}`, tarjeta);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al actualizar la tarjeta"}`,
      );
      return error.response?.data;
    }
  }
};

// Eliminar una tarjeta
export const deleteTarjetaApi = async (id: number) => {
  try {
    const response = await api.delete(`/tarjetas/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        `${error.response?.data.message || "Error al eliminar la tarjeta"}`,
      );
      return error.response?.data;
    }
  }
};
