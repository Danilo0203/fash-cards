"use client";
import React, { useState } from "react";
import {
  IconCompassFilled,
  IconHeartFilled,
  IconHomeFilled,
  IconLogout,
  IconUserFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SidebarBody } from "./SidebarBody";
import { SidebarLink } from "./SidebarLink";
import { Sidebar } from "./Sidebar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LogoFlashCard } from "../logo/LogoFlashCard";

export function MenuSidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const links = [
    {
      label: "Inicio",
      href: "/",
      icon: (
        <IconHomeFilled className="size-8 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Favoritos",
      href: "/favoritos",
      icon: (
        <IconHeartFilled className="size-8 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Explorar",
      href: "/explorar",
      icon: (
        <IconCompassFilled className="size-8 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Perfil",
      href: "/perfil",
      icon: (
        <IconUserFilled className="size-8 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row",
        "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <SidebarLink
                link={{
                  label: "Cerrar sesión",
                  href: "/admin/logout",
                  icon: (
                    <IconLogout className="size-8 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
                  ),
                }}
              />
            </div>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <LogoFlashCard className="stroke-neutral-700 dark:stroke-neutral-200" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-black dark:text-white"
      >
        Flash Cards
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <LogoFlashCard className="stroke-neutral-700 dark:stroke-neutral-200" />
    </Link>
  );
};
