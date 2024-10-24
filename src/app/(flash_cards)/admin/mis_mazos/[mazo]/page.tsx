"use client";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { GridTarjetas } from "@/components/ui/gridCards/GridTarjetas";
import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";
import { useStoreMazos } from "@/store/useMazos.store";
import { useStoreTarjetas } from "@/store/useTarjeta.store";
import { useEffect } from "react";

interface Props {
  params: {
    mazo: string;
  };
}

export default function MazoIDPage({ params }: Readonly<Props>) {
  const obteneTarjetas = useStoreTarjetas((state) => state.obtenerTarjetas);
  const tarjetas = useStoreTarjetas((state) => state.tarjetas);

  useEffect(() => {
    obteneTarjetas();
  }, [obteneTarjetas]);

  // Decodificar el nombre del mazo
  const decodedMazoName = decodeURIComponent(params.mazo);

  // Filtro de tarjetas por mazo utilizando el nombre decodificado
  const tarjetasFiltradas = tarjetas.filter(
    (tarjeta) => tarjeta.mazo === decodedMazoName,
  );

  const items = tarjetasFiltradas.map((tarjeta) => ({
    id: tarjeta.id,
    question: tarjeta.question,
    answer: tarjeta.answer,
    link: `/admin/mis_mazos/${params.mazo}/${tarjeta.id}`,
  }));

  return (
    <div>
      <HeaderIDMazo title={decodedMazoName} icon />
      <GridTarjetas items={items} />
    </div>
  );
}
