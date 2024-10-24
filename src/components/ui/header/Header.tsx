"use client";
import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";
import { Nav } from "../nav/Nav";
import clsx from "clsx";

import { ModalAgregarMazos } from "../modal/mazos/ModalAgregarMazos";
import { CategoriasMazos } from "../categoriasMazos/CategoriasMazos";
import { ModalAgregarTipoMazo } from "../modal/ModalAgregarTipoMazo";

export const Header = () => {
  const pathName = usePathname();

  if (pathName.includes("perfil")) {
    return (
      <header className="mt-24">
        <Nav />
      </header>
    );
  }

  if (pathName.includes("mazos")) {
    return null;
  }

  return (
    <>
      <header
        className={clsx(
          "flex justify-between",
          {
            "mb-12": !pathName.includes("explorar"),
          },
          {
            "mb-4": pathName.includes("explorar"),
          },
        )}
      >
        {pathName.includes("explorar") ? (
          <form className="flex w-full max-w-lg flex-col gap-4">
            <Input
              type="search"
              startContent={<IconSearch />}
              placeholder="¿Que quiere estudiar?"
            />
            <div className="max-w-xs">
              <CategoriasMazos />
            </div>
          </form>
        ) : (
          <>
            <h2 className="text-5xl font-extrabold">
              ¡Te damos la bienvenida!
            </h2>
            <div className="flex gap-3">
              <ModalAgregarMazos />
              <ModalAgregarTipoMazo />
            </div>
          </>
        )}
      </header>
      <Nav />
    </>
  );
};
