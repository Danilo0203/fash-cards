"use client";
import { authenticate } from "@/actions/auth/login";
import { Button, Input } from "@nextui-org/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const route = useRouter();
  const onSubmit = async (formData: any) => {
    const res = await authenticate(formData);
    if (res.success) {
      route.push("/explorar");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Input
        autoFocus
        type="email"
        label="Correo electrónico"
        variant="underlined"
        {...register("email")}
      />
      <Input
        type="password"
        label="Contraseña"
        variant="underlined"
        {...register("password")}
      />

      <Button type="submit" variant="bordered" className="mt-8">
        Iniciar sesión
      </Button>

      <div className="flex flex-col gap-1 text-center text-xs">
        <div className="flex w-full items-center justify-center gap-2">
          <hr className="flex-grow" />
          <span className="text-lg">o</span>
          <hr className="flex-grow" />
        </div>
        <Link href="/auth/register" className="text-blue-200">
          Crea una nueva cuenta
        </Link>
      </div>
    </form>
  );
};
