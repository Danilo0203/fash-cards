"use client";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathName = usePathname();

  const ubicacion = () => {
    if (pathName.includes("favoritos")) {
      return (
        <span className="w-fit border-b-3 pb-2 capitalize">
          {pathName.replace("/", "")}
        </span>
      );
    }
    if (pathName.includes("explorar")) {
      return (
        <span className="w-fit border-b-3 pb-2 capitalize">
          {pathName.replace("/", "")}
        </span>
      );
    }

    if (pathName.includes("perfil")) {
      return (
        <span className="w-fit border-b-3 pb-2 capitalize">
          {pathName.replace("/", "")}
        </span>
      );
    }
    if (pathName.includes("mazos")) {
      return null;
    }

    return <span className="w-fit border-b-3 pb-2">Mis Mazos</span>;
  };

  return (
    <nav className="flex flex-col">
      {ubicacion()}
      <hr className="border" />
    </nav>
  );
};
