import { GridCards } from "@/components/ui/gridCards/GridCards";
import { HeaderIDMazo } from "@/components/ui/header/HeaderIDMazo";
interface Props {
  params: {
    id: string;
  };
}

export default function MazoIDPage({ params }: Readonly<Props>) {
  return (
    <div>
      <HeaderIDMazo title={params.id} />
      <GridCards />
    </div>
  );
}
