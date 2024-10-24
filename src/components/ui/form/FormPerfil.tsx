"use client";
import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserApi } from "@/helpers/api/user/userApi";

export const FormPerfil = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true); // Estado de carga para los datos del perfil
  const [defaultValues, setDefaultValues] = useState({
    nombres: "",
    email: "",
  });

  const { register, handleSubmit, setValue } = useForm({
    defaultValues,
  });

  // Obtener los datos del usuario cuando la sesión esté disponible
  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id) {
        const userData = await getUserApi(session.user.id);
        setDefaultValues(userData); // Establece los valores predeterminados obtenidos
        setValue("nombres", userData.nombres); // Setear el valor en el formulario
        setValue("email", userData.email);
        setIsLoading(false); // Finaliza el estado de carga
      }
    };

    if (session?.user?.id) {
      fetchUserData();
    } else if (status !== "loading" && !session?.user?.id) {
      setIsLoading(false); // Finaliza la carga si no hay sesión
    }
  }, [status, setValue]);

  const formPerfil: { label: string; placeholder: string; name: string }[] = [
    {
      label: "Nombre",
      placeholder: "Escribe tu nombre",
      name: "nombres",
    },
    {
      label: "Correo",
      placeholder: "Escribe tu correo",
      name: "email",
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (isLoading) {
    // Mostrar estado de carga mientras esperas los datos
    return <div className="flex items-center justify-center">Loading...</div>;
  }

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
