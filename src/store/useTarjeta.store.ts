import {
  getTarjetasApi,
  createTarjetaApi,
  updateTarjetaApi,
  deleteTarjetaApi,
} from "@/helpers/api/Tarjetas/apiTarjeta";
import { create } from "zustand";

interface TarjetasStore {
  tarjetas: any[];
  isLoading: boolean;
  error: any;
  obtenerTarjetas: (mazoId: number) => Promise<void>;
  crearTarjeta: (tarjeta: any) => Promise<void>;
  actualizarTarjeta: (id: number, tarjeta: any) => Promise<void>;
  eliminarTarjeta: (id: number) => Promise<void>;
}

export const useStoreTarjetas = create<TarjetasStore>()((set, get) => ({
  tarjetas: [],
  isLoading: false,
  error: undefined,

  // Obtener todas las tarjetas de un mazo
  obtenerTarjetas: async (mazoId: number) => {
    set({ isLoading: true });
    try {
      const response = await getTarjetasApi(mazoId);
      set({
        tarjetas: response.data.map(({ id, pregunta, respuesta }) => ({
          id,
          question: pregunta,
          answer: respuesta,
        })),
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Crear una nueva tarjeta
  crearTarjeta: async (tarjeta: any) => {
    set({ isLoading: true });
    try {
      const response = await createTarjetaApi(tarjeta);
      set({ tarjetas: [...get().tarjetas, response.data] });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Actualizar una tarjeta existente
  actualizarTarjeta: async (id: number, tarjeta: any) => {
    set({ isLoading: true });
    try {
      const response = await updateTarjetaApi(id, tarjeta);
      set({
        tarjetas: get().tarjetas.map((t) =>
          t.id === id ? { ...t, ...response.data } : t,
        ),
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Eliminar una tarjeta
  eliminarTarjeta: async (id: number) => {
    set({ isLoading: true });
    try {
      await deleteTarjetaApi(id);
      set({ tarjetas: get().tarjetas.filter((t) => t.id !== id) });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
