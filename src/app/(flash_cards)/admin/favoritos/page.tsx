import { getMazos } from "@/actions/mazos/mazos";
import { GridCards } from "@/components/ui/gridCards/GridCards";

export default async function FavoritosPage() {
  const { data } = await getMazos();

  return <GridCards data={data} />;
}
