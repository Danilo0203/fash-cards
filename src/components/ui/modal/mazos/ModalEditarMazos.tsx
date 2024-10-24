"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  ModalFooter,
  Textarea,
  useDisclosure,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";

import { useStoreMazos } from "@/store/useMazos.store";
import { toast } from "sonner";

import IconEdit from "@/components/icons/IconEdit";
import { useSession } from "next-auth/react";

export const ModalEditarMazos = ({
  id,
  title,
  description,
  tipo,
}: {
  id?: string;
  title?: string;
  description?: string;
  tipo?: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    id: "modal-mazo",
  });

  const editarMazoAPI = useStoreMazos((state) => state.editar);
  const categoriasMazos = useStoreMazos((state) => state.tiposMazos);
  const obtenerTiposMazos = useStoreMazos((state) => state.obtenerTiposMazos);
  const updateMazos = useStoreMazos((state) => state.obtenerMazos);

  const [isLoadingCategorias, setIsLoadingCategorias] = useState(true); // Estado específico de carga para categorías
  const [value, setValue] = useState<Selection>(new Set([tipo || ""]));

  const { data: session } = useSession();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: title,
      description: description,
    },
  });
  useEffect(() => {
    const fetchCategorias = async () => {
      setIsLoadingCategorias(true);
      await obtenerTiposMazos();
      setIsLoadingCategorias(false);
    };

    fetchCategorias();
  }, [obtenerTiposMazos]);

  useEffect(() => {
    if (isOpen && tipo) {
      setValue(new Set([tipo]));
      reset({
        name: title,
        description: description,
      }); // Resetear el formulario cuando se abre el modal
    }
  }, [isOpen, tipo, title, description, reset]);

  const onSubmit = async (data: any) => {
    const selectedValue = Array.from(value)[0]; // Obtener el valor seleccionado del estado
    const tipo_mazo_id = categoriasMazos.find(
      (item) => item.label === selectedValue,
    )?.value;

    const payload = {
      nombre: data.name,
      descripcion: data.description,
      tipo_mazo_id: tipo_mazo_id,
    };

    try {
      await editarMazoAPI(id, payload);
      toast.success("Mazo editado correctamente");
      reset(); // Limpiar el formulario
      onClose(); // Cerrar el modal
      updateMazos(session?.user?.id); // Actualizar la lista de mazos
    } catch {
      toast.error("Hubo un error al editar el mazo");
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        onClick={(e) => {
          e.preventDefault();
        }}
        isIconOnly
        variant="light"
        color="success"
      >
        <IconEdit className="h-4 w-4 text-textElementLight dark:text-cardElementLight" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        className="bg-gradient-light dark:bg-gradient-dark"
        onClick={(e) => e.stopPropagation()}
        id="modal-mazo"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar mazo de estudio
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="EditarMazo"
                  className="flex flex-col gap-4"
                >
                  <Input
                    autoFocus
                    label="Nombre del mazo"
                    variant="bordered"
                    labelPlacement="outside"
                    {...register("name")}
                  />
                  <div className="flex gap-3">
                    <Select
                      isLoading={isLoadingCategorias} // Estado de carga para las categorías
                      label="Categorías de mazos"
                      className="w-full"
                      variant="bordered"
                      selectedKeys={value}
                      onSelectionChange={setValue}
                    >
                      {categoriasMazos.map((item) => (
                        <SelectItem key={item.label}>{item.label}</SelectItem>
                      ))}
                    </Select>
                  </div>
                  <Textarea
                    label="Descripción"
                    placeholder="Escribe una descripción para tu mazo"
                    variant="bordered"
                    labelPlacement="outside"
                    rows={3}
                    {...register("description")}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  Cerrar
                </Button>
                <Button
                  color="secondary"
                  type="submit"
                  form="EditarMazo"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
