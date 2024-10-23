"use client";
import { useStoreMazos } from "@/store/useMazos.store";
import {
  Button,
  Modal,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const ModalAgregarTipoMazo = () => {
  const {
    isOpen: isTipoMazoModalOpen,
    onOpen: openTipoMazoModal,
    onClose: closeTipoMazoModal,
  } = useDisclosure({
    id: "modal-tipo-mazo",
  });
  const { register, handleSubmit, reset } = useForm<{ nombre: string }>();
  const crearCatMazo = useStoreMazos((state) => state.crearTipo);
  const onSubmit = async ({ nombre }: { nombre: string }) => {
    await crearCatMazo(nombre);
    toast.success("Categoria creada correctamente");
    reset();
    closeTipoMazoModal();
  };
  return (
    <>
      <Button onPress={openTipoMazoModal} variant="bordered" radius="full">
        Añadir categoria
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
              <ModalHeader className="flex flex-col gap-1">
                Categoria Mazo
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} id="AddCatMazo">
                  <Input
                    autoFocus
                    label="Categoria"
                    placeholder="Ingrese el nombre de la categoria"
                    variant="bordered"
                    {...register("nombre", { required: true })}
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
                  form="AddCatMazo"
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
