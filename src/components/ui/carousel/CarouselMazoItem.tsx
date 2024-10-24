import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
interface CarouselMazoItemProps {
  tarjetas: any[]; // Replace 'any[]' with the appropriate type if known
}

export const CarouselMazoItem = ({ tarjetas }: CarouselMazoItemProps) => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <>
      <EmblaCarousel slides={tarjetas} options={OPTIONS} />
    </>
  );
};
