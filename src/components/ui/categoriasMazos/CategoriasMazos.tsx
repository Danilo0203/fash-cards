"use client";
import { useState, useEffect } from "react";
import { Select, Selection, SelectItem } from "@nextui-org/react";
import { useStoreMazos } from "@/store/useMazos.store";

interface CategoriasMazosProps {
  selectedCategory?: { currentKey: string } | null;
  setSelectedCategory?: (category: { currentKey: string } | null) => void;
}

export const CategoriasMazos = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriasMazosProps) => {
  const [isLoading, setIsLoading] = useState(true); // Estado de carga específico del componente
  const categoriasMazos = useStoreMazos((state) => state.tiposMazos);
  const obtenerTiposMazos = useStoreMazos((state) => state.obtenerTiposMazos);

  useEffect(() => {
    const fetchTiposMazos = async () => {
      setIsLoading(true); // Iniciar el estado de carga
      await obtenerTiposMazos(); // Esperar a que las categorías se obtengan
      setIsLoading(false); // Terminar el estado de carga
    };

    fetchTiposMazos(); // Ejecutar la función al montar el componente
  }, [obtenerTiposMazos]);

  const handleSelectionChange = (key: Selection) => {
    const selectedKey = Array.from(key).join(","); // Convert Set<Key> to string
    if (setSelectedCategory) {
      setSelectedCategory({ currentKey: selectedKey });
    }
  };

  return (
    <Select
      isLoading={isLoading} // Mostrar estado de carga mientras obtenemos los datos
      label="Categorías de mazos"
      className="w-full"
      variant="bordered"
      selectedKeys={selectedCategory ? selectedCategory.currentKey : undefined}
      onSelectionChange={handleSelectionChange}
    >
      {!isLoading && categoriasMazos.length > 0 ? (
        categoriasMazos.map((item) => (
          <SelectItem key={item.value}>{item.label}</SelectItem>
        ))
      ) : (
        <SelectItem key="empty">
          {isLoading ? "Cargando..." : "No hay categorías disponibles"}
        </SelectItem>
      )}
    </Select>
  );
};
