import { cn } from "@/lib/utils";

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-8 text-sm leading-relaxed tracking-wide", className)}>
      {children}
    </p>
  );
};
