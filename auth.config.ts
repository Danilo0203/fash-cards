import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { NextAuthConfig } from "next-auth";
import { loginApi } from "@/helpers/api/auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
declare module "next-auth" {
  interface User {
    role?: string;
  }
}

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
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.rol = user.role;
        token.token = user.token;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as any;
        session.user.role = token.rol as any;
      }
      session.accessToken = token.token as any;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
} satisfies NextAuthConfig;
