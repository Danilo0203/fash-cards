import { useModalStore } from "@/store/useModal.store";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";

import { CategoriasMazos } from "../categoriasMazos/CategoriasMazos";

export const ModalAgregarMazos = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onOpenChange = useModalStore((state) => state.onOpenChange);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      className="bg-gradient-light dark:bg-gradient-dark"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Crear mazo de estudio
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Nombre del mazo"
                variant="bordered"
                labelPlacement="outside"
              />
              <CategoriasMazos />
              <Textarea
                label="Descripción"
                placeholder="Escribe una descripción para tu mazo"
                variant="bordered"
                labelPlacement="outside"
                rows={3}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="ghost" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="secondary" onPress={onClose}>
                Agregar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
