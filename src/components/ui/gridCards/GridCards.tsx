import { Grid } from "./Grid";
const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/admin/mis_mazos/HolaMundo/tarjeta1",
    footer: "50 flashcards",
    favorito: false,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/admin/mis_mazos/HolaMundo",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/mazos/1",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/mazos/1",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/mazos/1",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/mazos/1",
    footer: "50 flashcards",
    favorito: true,
  },
];

interface Project {
  title: string;
  description: string;
  link: string;
  footer: string;
  favorito: boolean;
}

interface GridCardsProps {
  data: Project[];
}

export function GridCards({ data }: Readonly<GridCardsProps>) {
  return <Grid items={data} />;
}
