"use client";
import React from "react";
import { Nav } from "../nav/Nav";
import { Button } from "@nextui-org/react";
import IconPlay from "@/components/icons/IconPlay";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const HeaderIDMazo = ({
  title,
  button = true,
  icon = false,
}: {
  title: string;
  button?: boolean;
  icon?: boolean;
}) => {
  const router = useRouter();
  return (
    <header>
      <div className="flex justify-between">
        <div className="mb-12 flex items-center justify-center gap-4">
          {icon && (
            <Button isIconOnly variant="light" onPress={() => router.back()}>
              <IconArrowLeft size={50} />
            </Button>
          )}
          <h2 className="text-5xl font-extrabold">{title}</h2>
        </div>

        {button && (
          <Button
            startContent={<IconPlay />}
            className="bg-white text-cardElementDark"
            radius="full"
          >
            Empiza a estudiar
          </Button>
        )}
      </div>
      <Nav />
    </header>
  );
};
