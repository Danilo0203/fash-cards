import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { useStoreMazos } from "@/store/useMazos.store";
import { toast } from "sonner";
import IconDelete from "@/components/icons/IconDelete"; // Ícono de eliminar
import { deleteMazoApi } from "@/helpers/api/Mazos/apiMazos";
import { useSession } from "next-auth/react";

export const ModalEliminarMazo = ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    id: "modal-eliminar-mazo",
  });

  const updateMazos = useStoreMazos((state) => state.obtenerMazos); // Actualizar lista después de eliminar
  // const isLoading = useStoreMazos((state) => state.isLoading);
  const { data: session, status } = useSession(); // Añadimos el estado de la sesión

  const handleDelete = async () => {
    try {
      const res = await deleteMazoApi(id);
      if (res.status === 500) {
        return;
      }
      toast.success("Mazo eliminado correctamente.");
      onClose(); // Cerrar el modal
      updateMazos(session?.user?.id); // Actualizar la lista de mazos
    } catch (error) {
      toast.error("Error inesperado al eliminar el mazo.");
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
      >
        <IconDelete className="h-4 w-4 text-textElementLight dark:text-cardElementLight" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        className="bg-gradient-light dark:bg-gradient-dark"
        onClick={(e) => e.stopPropagation()}
        id="modal-eliminar-mazo"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Eliminar mazo
              </ModalHeader>
              <ModalBody>
                <p>
                  ¿Estás seguro de que deseas eliminar el mazo{" "}
                  <strong>{title}</strong>? Esta acción no se puede deshacer.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="dark:text-white"
                >
                  Cancelar
                </Button>
                <Button
                  color="danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(); // Eliminar el mazo
                  }}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
