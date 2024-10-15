// app/components/ThemeSwitcher.tsx
"use client";
import { Button } from "@nextui-org/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme !== "dark" ? "dark" : "light")} isIconOnly>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
