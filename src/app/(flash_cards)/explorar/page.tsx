"use client";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { useStoreMazos } from "@/store/useMazos.store";
import { useEffect } from "react";

export default function ExplorarPage() {
  const obtenerMazos = useStoreMazos((state) => state.obtenerMazos2);
  const mazos = useStoreMazos((state) => state.mazos);
  useEffect(() => {
    obtenerMazos();
  }, [obtenerMazos]);
  console.log(mazos);
  return <GridCards data={mazos} />;
}
