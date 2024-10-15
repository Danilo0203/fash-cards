import { cn } from "@/lib/utils";

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
