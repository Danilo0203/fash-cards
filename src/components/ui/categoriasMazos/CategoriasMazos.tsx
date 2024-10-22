"use client";
import { getTipoMazos } from "@/actions/mazos/categorias/categoriasMazos";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// import { useEffect, useState } from "react";
export const CategoriasMazos = async () => {
  const categoriasMazos = await getTipoMazos();

  // const [categoriasMazos, setCategoriasMazos] = useState([]);

  // const getCategoriasMazos = async () => {
  //   try {
  //     const response = await fetch("/api/tipoMazos"); // Llama a la API interna
  //     const { items } = await response.json();
  //     setCategoriasMazos(items);
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   getCategoriasMazos();
  // }, []);

  // console.log(categoriasMazos);

  return (
    <Autocomplete
      defaultItems={categoriasMazos}
      label="Categorías de mazos"
      className="w-full"
      variant="bordered"
    >
      {(items) => (
        <AutocompleteItem key={items.value}>{items.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};
export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];
