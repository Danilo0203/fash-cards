import IconEdit from "@/components/icons/IconEdit";
import { Button } from "@nextui-org/react";
import React from "react";

export const HeaderConfiguracionCuenta = () => {
  return (
    <Button startContent={<IconEdit />} variant="bordered" className="self-end">
      Editar Perfil
    </Button>
  );
};
