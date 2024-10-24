"use client";
import {
  createMazoApi,
  createTipoMazoApi,
  getMazosApi,
  getTiposMazosApi,
  updateMazoApi,
} from "@/helpers/api/Mazos/apiMazos";

import { create } from "zustand";

interface Props {
  id: string;
  nombre: string;
  descripcion: string;
  tarjetas: any[];
  tipo_mazo: string;
}

interface MazosStore {
  tiposMazos: any[];
  mazos: any[];
  isLoading: boolean;
  error: any;
  obtenerTiposMazos: () => Promise<void>;
  crearTipo: (nombre: string) => Promise<void>;
  obtenerMazos: (id: any) => Promise<void>;
  crear: (mazo: any) => Promise<void>;
  editar: (id: any, mazo: any) => Promise<void>;
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
  obtenerMazos: async (id) => {
    set({ isLoading: true });
    try {
      const response = await getMazosApi(id);
      console.log(response);
      set({
        mazos: response.data.mazos.map(
          ({ id, nombre, descripcion, tarjetas, tipo_mazo }: Props) => ({
            id,
            title: nombre,
            description: descripcion,
            footer: `${tarjetas.length}`,
            link: `/admin/mis_mazos/${nombre}`,
            tipo: tipo_mazo,
          }),
        ),
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
      set({
        mazos: [
          ...get().mazos,
          response.data.map(({ id, nombre, descripcion, tarjetas }: Props) => ({
            id,
            title: nombre,
            description: descripcion,
            footer: `${tarjetas.length}`,
            link: `/admin/mis_mazos/${nombre}`,
          })),
        ],
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  editar: async (id, mazo: any) => {
    set({ isLoading: true });
    try {
      const response = await updateMazoApi(id, mazo);
      // Actualizar el mazo existente en el array
      set({
        mazos: get().mazos.map((item) =>
          item.id === id
            ? {
                id,
                title: response.data.nombre,
                description: response.data.descripcion,
                footer: `${response.data.tarjetas.length}`,
                link: `/admin/mis_mazos/${response.data.nombre}`,
              }
            : item,
        ),
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
}));
