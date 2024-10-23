// CategoriasMazos.jsx
import { useEffect } from "react";
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
  const categoriasMazos = useStoreMazos((state) => state.tiposMazos);
  const obtenerTiposMazos = useStoreMazos((state) => state.obtenerTiposMazos);
  const isLoading = useStoreMazos((state) => state.isLoading);

  useEffect(() => {
    obtenerTiposMazos();
  }, [obtenerTiposMazos]);

  const handleSelectionChange = (key: Selection) => {
    const selectedKey = Array.from(key).join(","); // Convert Set<Key> to string
    if (setSelectedCategory) {
      setSelectedCategory({ currentKey: selectedKey });
    }
  };

  return (
    <Select
      items={categoriasMazos}
      isLoading={isLoading}
      label="Categorías de mazos"
      className="w-full"
      variant="bordered"
      selectedKeys={selectedCategory ? selectedCategory.currentKey : undefined}
      onSelectionChange={handleSelectionChange}
    >
      {(items) => <SelectItem key={items.value}>{items.label}</SelectItem>}
    </Select>
  );
};
