import { Grid } from "./Grid";

interface Project {
  title: string;
  description: string;
  link: string;
  footer: string;
  favorito: boolean;
  id: string;
}

interface GridCardsProps {
  data: Project[];
}

export function GridCards({ data }: Readonly<GridCardsProps>) {
  return <Grid items={data} />;
}
