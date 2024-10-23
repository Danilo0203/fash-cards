"use client";

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
} from "@nextui-org/react";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  pregunta: string;
  respuesta: string;
}

export const ModalAgregarTarjeta = ({ id }: { id?: string }) => {
  const {
    isOpen: isTipoMazoModalOpen,
    onOpen: openTipoMazoModal,
    onClose: closeTipoMazoModal,
  } = useDisclosure({
    id: "modal-tipo-mazo",
  });
  const { register, handleSubmit, reset } = useForm<Props>();
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
        <IconPlus className="h-4 w-4 text-textElementLight dark:text-cardElementLight" />
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
                    label="Pregunta"
                    placeholder="Ingrese la pregunta"
                    variant="bordered"
                    {...register("pregunta", { required: true })}
                  />
                  <Input
                    autoFocus
                    label="Respuesta"
                    placeholder="Ingrese la respuesta"
                    variant="bordered"
                    {...register("respuesta", { required: true })}
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
