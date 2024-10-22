"use client";
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
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { createMazo } from "@/actions/mazos/mazos";
import { CategoriasMazos } from "../categoriasMazos/CategoriasMazos";

export const ModalAgregarMazos = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onOpenChange = useModalStore((state) => state.onOpenChange);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    data = {
      nombre: data.name,
      descripcion: data.description,
      tipo_mazo_id: data.tipo_mazo_id,
      user_id: "1",
    };
    const res = await createMazo(data);
    console.log(res);
  };
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
              <form onSubmit={handleSubmit(onSubmit)} id="AddMazo">
                <Input
                  autoFocus
                  label="Nombre del mazo"
                  variant="bordered"
                  labelPlacement="outside"
                  {...register("name")}
                />
                {/* <Autocomplete
                  defaultItems={items}
                  label="Categorías de mazos"
                  className="w-full"
                  variant="bordered"
                  {...register("tipo_mazo_id")}
                >
                  {(items) => (
                    <AutocompleteItem key={items.value} value={items.value}>
                      {items.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete> */}
                <CategoriasMazos />
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
              <Button color="danger" variant="ghost" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="secondary" type="submit" form="AddMazo">
                Agregar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
