import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";

interface Props {
  params: {
    id: string;
    tarjeta: string;
  };
}
export default function TarjetaPage({ params }: Readonly<Props>) {
  console.log(params);
  return (
    <div>
      <HeaderIDMazo title={params.tarjeta} button={false} icon />
    </div>
  );
}
