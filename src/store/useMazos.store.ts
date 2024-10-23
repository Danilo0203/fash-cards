import {
  createMazoApi,
  createTipoMazoApi,
  getMazosApi,
  getTiposMazosApi,
  updateMazoApi,
} from "@/helpers/api/Mazos/apiMazos";
import { create } from "zustand";

interface MazosStore {
  tiposMazos: any[];
  mazos: any[];
  isLoading: boolean;
  error: any;
  obtenerTiposMazos: () => Promise<void>;
  crearTipo: (nombre: string) => Promise<void>;
  obtenerMazos: () => Promise<void>;
  crear: (mazo: any) => Promise<void>;
  editar: (mazo: any) => Promise<void>;
}

export const useStoreMazos = create<MazosStore>()((set, get) => ({
  tiposMazos: [],
  mazos: [],
  isLoading: false,
  error: undefined,

  // Obtener todos los tipos de mazos
  obtenerTiposMazos: async () => {
    set({ isLoading: true });
    try {
      const response = await getTiposMazosApi();
      set({
        tiposMazos: response.data.map(
          ({ nombre, id }: { nombre: string; id: string }) => ({
            label: nombre,
            value: id,
          }),
        ),
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Crear tipo de mazo
  crearTipo: async (nombre: string) => {
    set({ isLoading: true });
    try {
      const response = await createTipoMazoApi({ nombre });
      set({
        tiposMazos: [
          ...get().tiposMazos,
          { label: response.data.nombre, value: response.data.id },
        ],
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Obtener todos los mazos
  obtenerMazos: async () => {
    set({ isLoading: true });
    try {
      const response = await getMazosApi();
      set({
        mazos: response.data.map(({ id, nombre, descripcion, tarjetas }) => ({
          id,
          title: nombre,
          description: descripcion,
          footer: `${tarjetas.length}`,
          link: `/admin/mis_mazos/${nombre}`,
        })),
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // Crear un mazo
  crear: async (mazo: any) => {
    set({ isLoading: true });
    try {
      const response = await createMazoApi(mazo);
      set({ mazos: [...get().mazos, response.data] });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  // editar un mazo
  editar: async (mazo: any) => {
    set({ isLoading: true });
    try {
      const response = await updateMazoApi(mazo.id, mazo);
      set({ mazos: [...get().mazos, response.data] });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
