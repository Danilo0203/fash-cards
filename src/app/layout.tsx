import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Flash Cards",
  description: "Pagina de flash cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
