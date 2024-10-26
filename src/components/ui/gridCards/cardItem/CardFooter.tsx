"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { ModalAgregarTarjeta } from "../../modal/tarjetas/ModalAgregarTarjeta";
import { ModalEditarMazos } from "../../modal/mazos/ModalEditarMazos";
import { ModalEliminarMazo } from "../../modal/mazos/ModalEliminarMazos";

export const CardFooter = ({
  className,
  children,
  favorito,
  items,
}: {
  className?: string;
  children: React.ReactNode;
  favorito?: boolean;
  items?: {
    id: string;
    title: string;
    description: string;
  };
}) => {
  const pathname = usePathname();

  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  console.log(items);

  return (
    <div
      className={cn(
        "flex items-center justify-between border-t-1 border-slate-400 pt-1 dark:border-white/50 dark:text-textElementDark/85",
        className,
      )}
    >
      {children}
      <div>
        {pathname.includes("favoritos") || pathname.includes("explorar") ? (
          <Button isIconOnly variant="light" onClick={(e) => handleButton(e)}>
            {favorito ? (
              <IconHeartFilled className="h-4 w-4 fill-red-600" />
            ) : (
              <IconHeart className="h-4 w-4 fill-white" />
            )}
          </Button>
        ) : (
          <>
            <ModalEliminarMazo
              id={items?.id ?? ""}
              title={items?.title ?? ""}
            />
            <ModalEditarMazos
              description={items?.description}
              id={items?.id}
              title={items?.title}
            />
            <ModalAgregarTarjeta id={items?.id} />
          </>
        )}
      </div>
    </div>
  );
};
