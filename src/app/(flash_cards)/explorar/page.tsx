import { getMazos } from "@/actions/mazos/mazos";
import { GridCards } from "@/components/ui/gridCards/GridCards";
import { auth } from "../../../../auth";

export default async function ExplorarPage() {
  const { data } = await getMazos();
  const session = await auth();
  console.log(session);

  return <GridCards data={data} />;
}
