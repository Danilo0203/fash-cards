import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
export const CarouselMazoItem = () => {
  const OPTIONS: EmblaOptionsType = {};

  const tarjetas = [
    {
      pregunta: "¿Qué es un mazo?",
      respuesta: "Una tarjeta es un conjunto de preguntas y respuestas",
    },
    {
      pregunta: "¿Qué es una tarjeta?",
      respuesta: "Una tarjeta es un conjunto de preguntas y respuestas",
    },
    {
      pregunta: "¿Qué es un mazo?",
      respuesta: "Un mazo es un conjunto de tarjetas",
    },
  ];

  return (
    <>
      <EmblaCarousel slides={tarjetas} options={OPTIONS} />
    </>
  );
};
