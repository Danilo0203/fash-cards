"use client";
import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Button } from "@nextui-org/react";

type PropType = {
  slides: {
    pregunta: string;
    respuesta: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Estado para mostrar respuestas por cada slide
  const [mostrarRespuestas, setMostrarRespuestas] = useState<boolean[]>(
    slides.map(() => false),
  );

  // Actualizar el estado si el número de slides cambia
  useEffect(() => {
    setMostrarRespuestas(slides.map(() => false));
  }, [slides.length]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Función para alternar la respuesta de una slide específica
  const toggleMostrarRespuesta = (index: number) => {
    setMostrarRespuestas((prev) =>
      prev.map((mostrar, i) => (i === index ? !mostrar : mostrar)),
    );
  };

  return (
    <section className="embla flex h-full w-full flex-col rounded-2xl border">
      <div className="embla__viewport flex flex-grow" ref={emblaRef}>
        <div className="embla__container flex flex-grow">
          {slides.map((tarjeta, index) => (
            <div className="embla__slide flex flex-1" key={index}>
              <div className="embla__slide__number flex-grow">
                <div className="flex h-full flex-col justify-around p-4">
                  <span className="text-center text-5xl font-semibold">
                    {tarjeta.pregunta}
                  </span>
                  <Button
                    variant="bordered"
                    onPress={() => toggleMostrarRespuesta(index)}
                    className="w-fit self-center"
                  >
                    {mostrarRespuestas[index]
                      ? "Ocultar respuesta"
                      : "Ver respuesta"}
                  </Button>
                  <span
                    className={`mt-2 text-balance text-center text-slate-400 transition-opacity duration-300 ${
                      mostrarRespuestas[index] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {tarjeta.respuesta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex items-center justify-between p-4">
        <div className="embla__buttons flex space-x-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex space-x-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "size-8 rounded-full " +
                (index === selectedIndex ? "bg-[#3273f5]" : "bg-gray-300")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
