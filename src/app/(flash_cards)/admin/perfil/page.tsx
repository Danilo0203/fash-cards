import { getUsers } from "@/actions/users/user";
import { ConfiguracionCuenta } from "@/components/ui/configuracion/ConfiguracionCuenta";
import { HeaderConfiguracionCuenta } from "@/components/ui/configuracion/HeaderConfiguracionCuenta";
import { FormPerfil } from "@/components/ui/form/FormPerfil";

export default async function PerfilPage() {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <HeaderConfiguracionCuenta />
      <FormPerfil />
      <ConfiguracionCuenta />
    </div>
  );
}
