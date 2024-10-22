"use client";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import React from "react";

export const FormPerfil = () => {
  const { register, handleSubmit } = useForm();

  const formPerfil: { label: string; placeholder: string; name: string }[] = [
    {
      label: "Nombre",
      placeholder: "Escribe tu nombre",
      name: "nombres",
    },
    {
      label: "Apellido",
      placeholder: "Escribe tu apellido",
      name: "apellidos",
    },
    {
      label: "Correo",
      placeholder: "Escribe tu correo",
      name: "email",
    },
    {
      label: "DPI",
      placeholder: "Escribe tu DPI",
      name: "dpi",
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {formPerfil.map((input) => (
        <Input
          isReadOnly
          key={input.label}
          label={input.label}
          placeholder={input.placeholder}
          variant="bordered"
          labelPlacement="outside"
          {...register(input.name)}
        />
      ))}
    </form>
  );
};
