// ModalAgregarMazos.jsx
import { useState } from "react";
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
} from "@nextui-org/react";
import { CategoriasMazos } from "../../categoriasMazos/CategoriasMazos";
import { useStoreMazos } from "@/store/useMazos.store";

import { toast } from "sonner";

import { IconPlus } from "@tabler/icons-react";

export const ModalAgregarMazos = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    currentKey: string;
  } | null>(null);

  const {
    isOpen: isMazoModalOpen,
    onOpen: openMazoModal,
    onClose: closeMazoModal,
  } = useDisclosure({
    id: "modal-mazo",
  });

  const { register, handleSubmit, reset } = useForm();
  const crearMazo = useStoreMazos((state) => state.crear);
  const updateMazos = useStoreMazos((state) => state.obtenerMazos);

  const onSubmit = async (data: any) => {
    const payload = {
      nombre: data.name,
      descripcion: data.description,
      tipo_mazo_id: selectedCategory ? selectedCategory.currentKey : null,
    };
    await crearMazo(payload);
    toast.success("Mazo creado correctamente");
    reset();
    updateMazos();
    closeMazoModal();
  };

  return (
    <>
      <Button
        startContent={<IconPlus />}
        variant="bordered"
        radius="full"
        onPress={openMazoModal}
      >
        Añadir Mazos
      </Button>
      <Modal
        isOpen={isMazoModalOpen}
        onClose={closeMazoModal}
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
                Crear mazo de estudio
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="AddMazo"
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
                  form="AddMazo"
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
