import { cn } from "@/lib/utils";
export const CardItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black/10 p-4 group-hover:border-slate-700 dark:border-white/[0.2] dark:bg-cardElementDark",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="flex h-full flex-col justify-between gap-y-3 p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
