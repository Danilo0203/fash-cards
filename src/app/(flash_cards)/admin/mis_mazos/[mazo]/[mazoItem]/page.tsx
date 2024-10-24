"use client";
import { CarouselMazoItem } from "@/components/ui/carousel/CarouselMazoItem";
import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";
import "@/components/ui/carousel/carousel.css";
import { useStoreTarjetas } from "@/store/useTarjeta.store";
import { useEffect } from "react";
interface Props {
  params: {
    mazo: string;
    mazoItem: string;
  };
}
export default function MazoItemPage({ params }: Readonly<Props>) {
  const decodedMazoName = decodeURIComponent(params.mazo);
  const obteneTarjetas = useStoreTarjetas((state) => state.obtenerTarjetas);
  const tarjetas = useStoreTarjetas((state) => state.tarjetas);

  useEffect(() => {
    obteneTarjetas();
  }, [obteneTarjetas]);

  // Filtro de tarjetas por mazo utilizando el nombre decodificado
  const tarjetasFiltradas = tarjetas.filter(
    (tarjeta) => tarjeta.mazo === decodedMazoName,
  );

  const items = tarjetasFiltradas.map((tarjeta) => ({
    pregunta: tarjeta.question,
    respuesta: tarjeta.answer,
  }));

  return (
    <section className="flex flex-grow flex-col">
      <HeaderIDMazo title={decodedMazoName} button={false} icon />
      <main className="flex h-full w-full justify-center px-20 py-20">
        <CarouselMazoItem tarjetas={items} />
      </main>
    </section>
  );
}
