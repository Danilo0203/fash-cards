import { CarouselMazoItem } from "@/components/ui/carousel/CarouselMazoItem";
import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";
import "@/components/ui/carousel/carousel.css";
interface Props {
  params: {
    mazo: string;
    mazoItem: string;
  };
}
export default function MazoItemPage({ params }: Readonly<Props>) {
  console.log(params);
  return (
    <section className="flex flex-grow flex-col">
      <HeaderIDMazo title={params.mazo} button={false} icon />
      <main className="flex h-full w-full justify-center px-20 py-20">
        <CarouselMazoItem />
      </main>
    </section>
  );
}
