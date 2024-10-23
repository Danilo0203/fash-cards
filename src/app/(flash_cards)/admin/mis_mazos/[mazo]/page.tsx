"use client";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";
import { useStoreMazos } from "@/store/useMazos.store";
import { useEffect } from "react";
interface Props {
  params: {
    mazo: string;
  };
}

export default function MazoIDPage({ params }: Readonly<Props>) {
  const obtenerMazos = useStoreMazos((state) => state.obtenerMazos);
  const mazos = useStoreMazos((state) => state.mazos);
  useEffect(() => {
    obtenerMazos();
  }, [obtenerMazos]);
  console.log(params);
  return (
    <div>
      <HeaderIDMazo title={params.mazo} icon />
      <GridCards data={mazos} />
    </div>
  );
}
