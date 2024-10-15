import { Input } from "@nextui-org/react";
import React from "react";

export const FormPerfil = () => {
  const formPerfil = [
    {
      label: "Nombre",
      placeholder: "Escribe tu nombre",
    },
    {
      label: "Apellido",
      placeholder: "Escribe tu apellido",
    },
    {
      label: "Correo",
      placeholder: "Escribe tu correo",
    },
  ];
  return (
    <form className="flex flex-col gap-4">
      {formPerfil.map((input) => (
        <Input
          key={input.label}
          label={input.label}
          placeholder={input.placeholder}
          variant="bordered"
          labelPlacement="outside"
        />
      ))}
    </form>
  );
};
