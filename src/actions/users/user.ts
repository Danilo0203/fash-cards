"use server";

import prisma from "@/lib/prisma";

export const getUsers = async () => {
  try {
    const users = await prisma.users.findMany();

    return {
      user: users.map(({ id, nombres, apellidos, dpi, email }) => ({
        id,
        nombres,
        apellidos,
        dpi,
        email,
      })),
    };
  } catch (error) {
    console.error(error);
  }
};
