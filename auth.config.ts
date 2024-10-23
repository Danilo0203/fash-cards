import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { NextAuthConfig } from "next-auth";
import { loginApi } from "@/helpers/api/auth";

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
          const res = await loginApi({ email, password });

          const { usuario, access_token } = res;

          // Si todos es correcto, retorna el objeto `user`
          return {
            id: usuario.id,
            email: usuario.email,
            name: usuario.nombres,
            role: usuario.role.nombre,
            token: access_token,
          };
        } catch (error) {
          return null; // En caso de error, no autoriza
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rol = user.role;
        token.token = user.token;
      }
      return token;
    },

    session({ session, user, token }) {
      session.user.id = token.id;
      session.user.role = token.rol;
      session.accessToken = token.token;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
} satisfies NextAuthConfig;
