"use server";

import prisma from "@/lib/prisma";

// Obtener todos los mazos (ya lo tienes)
export const getMazos = async () => {
  try {
    const mazos = await prisma.mazos.findMany();
    return {
      data: mazos.map(({ id, nombre, descripcion, tipo_mazo_id, user_id }) => ({
        title: nombre,
        description: descripcion,
        link: "/mazos/1",
        footer: "50 flashcards",
        favorito: true,
      })),
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Crear un nuevo mazo
export const createMazo = async (data) => {
  try {
    const mazo = await prisma.mazos.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo_mazo_id: data.tipo_mazo_id,
        user_id: data.user_id,
        // created_at: new Date(),
        // updated_at: new Date(),
      },
    });
    return mazo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Obtener un mazo por su ID
export const getMazoById = async (id) => {
  try {
    const mazo = await prisma.mazos.findUnique({
      where: {
        id: BigInt(id),
      },
    });
    return mazo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Actualizar un mazo existente
export const updateMazo = async (id, data) => {
  try {
    const mazo = await prisma.mazos.update({
      where: {
        id: BigInt(id),
      },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
    return mazo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Eliminar un mazo
export const deleteMazo = async (id) => {
  try {
    await prisma.mazos.delete({
      where: {
        id: BigInt(id),
      },
    });
    return { message: "Mazo eliminado exitosamente" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
