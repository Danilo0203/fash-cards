import IconDelete from "@/components/icons/IconDelete";
import IconPadLock from "@/components/icons/IconPadLock";
import { Button } from "@nextui-org/react";

export const ConfiguracionCuenta = () => {
  return (
    <div className="mt-8 flex gap-4">
      <Button startContent={<IconPadLock />} variant="bordered">
        Cambiar Contraseña
      </Button>
      <Button startContent={<IconDelete />} variant="bordered" color="danger">
        Eliminar Cuenta
      </Button>
    </div>
  );
};
