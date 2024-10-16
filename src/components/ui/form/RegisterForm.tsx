import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input
        autoFocus
        type="email"
        label="Correo electrónico"
        variant="underlined"
      />
      <Input type="password" label="Contraseña" variant="underlined" />
      <Button type="submit" variant="bordered" className="mt-8">
        Registrarse
      </Button>
      <div className="flex flex-col gap-1 text-center text-xs">
        <div className="flex w-full items-center justify-center gap-2">
          <hr className="flex-grow" />
          <span className="text-lg">o</span>
          <hr className="flex-grow" />
        </div>
        <Link href="/auth/login" className="text-blue-200">
          Inicia sesión
        </Link>
      </div>
    </form>
  );
};
