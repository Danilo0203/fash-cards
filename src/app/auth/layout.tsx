"use client";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-gradient-light px-4 dark:bg-gradient-dark sm:px-[10rem] lg:px-[15rem] xl:px-[25rem] 2xl:px-[45rem]">
      <section className="container rounded-2xl border p-10">
        <h2 className="mb-4 text-center text-4xl font-bold">
          {pathName.includes("login") ? "Iniciar Sesión" : "Registrate"}
        </h2>
        {children}
      </section>
    </main>
  );
}
