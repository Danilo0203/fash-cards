"use client";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { useStoreMazos } from "@/store/useMazos.store";
import { useEffect } from "react";

export default function FlahsCardsPage() {
  const obtenerMazos = useStoreMazos((state) => state.obtenerMazos);
  const mazos = useStoreMazos((state) => state.mazos);

  useEffect(() => {
    obtenerMazos();
  }, [obtenerMazos]);

  return <GridCards data={mazos} />;
}
