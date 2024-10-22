import prisma from "@/lib/prisma";

// Obtener todos los tipos de mazos
export const getTipoMazos = async () => {
  try {
    const tipoMazos = await prisma.tipo_mazos.findMany();
    return {
      items: tipoMazos.map((tipoMazo) => ({
        label: tipoMazo.nombre,
        value: tipoMazo.id.toString(),
        description: tipoMazo.nombre,
      })),
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
