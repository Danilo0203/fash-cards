"use client";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { CardsSekeleton } from "@/components/ui/skeleton/CardsSekeleton";
import { useStoreMazos } from "@/store/useMazos.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function FlahsCardsPage() {
  const obtenerMazos = useStoreMazos((state) => state.obtenerMazos);
  const mazos = useStoreMazos((state) => state.mazos);
  const { data: session, status } = useSession(); // Añadimos el estado de la sesión

  useEffect(() => {
    if (session?.user?.id) {
      obtenerMazos(session.user.id); // Solo llamar a obtenerMazos cuando el id esté disponible
    }
  }, [obtenerMazos]); // session es una dependencia importante aquí

  if (status === "loading") {
    // Mientras la sesión está cargando
    return <CardsSekeleton />;
  }

  if (!session) {
    // Si no hay sesión (usuario no autenticado)
    return <div>No estás autenticado.</div>;
  }

  return <GridCards data={mazos} />;
}
