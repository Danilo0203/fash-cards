"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CardItem } from "./cardItem/CardItem";
import { CardTitle } from "./cardItem/CardTitle";
import { CardDescription } from "./cardItem/CardDescription";
import Link from "next/link";
import { CardFooter } from "./cardItem/CardFooter";

export const Grid = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    footer: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.15,
                    delay: 0.2,
                  },
                }}
              />
            )}
          </AnimatePresence>
          <CardItem>
            <div className="flex flex-col gap-y-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <CardFooter> {item.footer} </CardFooter>
          </CardItem>
        </Link>
      ))}
    </div>
  );
};
