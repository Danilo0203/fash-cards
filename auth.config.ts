import prisma from "@/lib/prisma";
import credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { z } from "zod";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    credentials({
      async authorize(credentials) {
        // Validar las credenciales recibidas
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success)
          throw new Error("Credenciales inválidas");

        const { email, password } = parsedCredentials.data;
        try {
          // Buscar el usuario en la base de datos
          const user = await prisma.users.findUnique({
            where: { email },
          });

          if (!user) {
            throw new Error("Usuario no encontrado");
          }

          // Comparar la contraseña
          const isPasswordValid = await compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Contraseña incorrecta");
          }

          const role = await prisma.roles.findUnique({
            where: { id: user.role_id },
          });

          // Si todo es correcto, retorna el objeto `user`
          return {
            id: user.id.toString(),
            email: user.email,
            nombres: user.nombres,
            apellidos: user.apellidos,
            role: role?.nombre,
          };
        } catch (error) {
          console.error(error);
          return null; // En caso de error, no autoriza
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      // Usa token en lugar de user
      if (token) {
        session.id = token.id;
        session.email = token.email;
        session.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
} satisfies NextAuthConfig;
