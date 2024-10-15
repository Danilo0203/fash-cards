import { useSidebar } from "@/hooks/sidebar/useSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkProps } from "@nextui-org/react";
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}
export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string; props?: LinkProps }) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn("flex items-center justify-start gap-2  group/sidebar py-2", className)}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
