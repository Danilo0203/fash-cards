"use client";

import IconEdit from "@/components/icons/IconEdit";
import { useStoreMazos } from "@/store/useMazos.store";
import { useStoreTarjetas } from "@/store/useTarjeta.store";
import {
  Button,
  Modal,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CategoriasMazos } from "../../categoriasMazos/CategoriasMazos";

interface Props {
  pregunta: string;
  respuesta: string;
}

export const ModalEditarTarjeta = ({
  id,
  title,
  description,
}: {
  id?: string;
  title?: string;
  description?: string;
}) => {
  const {
    isOpen: isTipoMazoModalOpen,
    onOpen: openTipoMazoModal,
    onClose: closeTipoMazoModal,
  } = useDisclosure({
    id: "modal-tipo-mazo",
  });
  const { register, handleSubmit, reset } = useForm<Props>({
    defaultValues: {
      pregunta: title,
      respuesta: description,
    },
  });
  const crearTarjeta = useStoreTarjetas((state) => state.crearTarjeta);
  const updateMazos = useStoreMazos((state) => state.obtenerMazos);
  const onSubmit = async ({ pregunta, respuesta }: Props) => {
    await crearTarjeta({
      pregunta,
      respuesta,
      mazo_id: id,
    });
    toast.success("Tarjeta creada correctamente");
    updateMazos();
    reset();
    closeTipoMazoModal();
  };
  return (
    <>
      <Button
        onPress={openTipoMazoModal}
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
        isOpen={isTipoMazoModalOpen}
        onClose={closeTipoMazoModal}
        placement="top-center"
        className="bg-gradient-light dark:bg-gradient-dark"
        onClick={(e) => e.stopPropagation()}
        id="modal-tipo-mazo"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tarjeta</ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="AddTarjeta"
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
                    <CategoriasMazos
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
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
                  form="AddTarjeta"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
