"use client";
import React, { useState } from "react";
import {
  IconCompassFilled,
  IconHeartFilled,
  IconHomeFilled,
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
import { IconSignout } from "@/components/icons/IconSignout";
import { IconSigin } from "@/components/icons/IconSigin";
import { signOut, useSession } from "next-auth/react";

export function MenuSidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const linksPublic = [
    {
      label: "Explorar",
      href: "/explorar",
      icon: (
        <IconCompassFilled className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
      ),
    },
  ];

  const linksPrivate = [
    {
      label: "Inicio",
      href: "/admin",
      icon: (
        <IconHomeFilled className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
      ),
    },
    {
      label: "Favoritos",
      href: "/admin/favoritos",
      icon: (
        <IconHeartFilled className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
      ),
    },
    {
      label: "Explorar",
      href: "/explorar",
      icon: (
        <IconCompassFilled className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
      ),
    },
    {
      label: "Perfil",
      href: "/admin/perfil",
      icon: (
        <IconUserFilled className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const validationLinks = !session ? linksPublic : linksPrivate;

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
              {validationLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {status === "authenticated" ? (
                <button onClick={() => signOut({ redirectTo: "/explorar" })}>
                  <SidebarLink
                    link={{
                      label: "Cerrar sesión",
                      href: "#",
                      icon: (
                        <IconSignout className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
                      ),
                    }}
                  />
                </button>
              ) : (
                <SidebarLink
                  link={{
                    label: "Iniciar sesión",
                    href: "/auth/login",
                    icon: (
                      <IconSigin className="size-8 flex-shrink-0 text-primary-foreground dark:text-neutral-200" />
                    ),
                  }}
                />
              )}
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
      <LogoFlashCard className="stroke-primary-foreground dark:stroke-neutral-200" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-primary-foreground dark:text-white"
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
      <LogoFlashCard className="stroke-primary-foreground dark:stroke-neutral-200" />
    </Link>
  );
};
