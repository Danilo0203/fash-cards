import IconDelete from "@/components/icons/IconDelete";
import IconEdit from "@/components/icons/IconEdit";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const CardFooter = ({
  className,
  children,
  favorito,
}: {
  className?: string;
  children: React.ReactNode;
  favorito?: boolean;
}) => {
  const pathname = usePathname();
  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t-1 border-slate-400 pt-1 dark:border-white/50 dark:text-textElementDark/85",
        className,
      )}
    >
      {children}
      <div>
        {pathname.includes("favoritos") || pathname.includes("explorar") ? (
          <Button isIconOnly variant="light" onClick={(e) => handleButton(e)}>
            {favorito ? (
              <IconHeartFilled className="h-4 w-4 fill-red-600" />
            ) : (
              <IconHeart className="h-4 w-4 fill-white" />
            )}
          </Button>
        ) : (
          <>
            <Button
              isIconOnly
              variant="light"
              color="danger"
              onClick={(e) => handleButton(e)}
            >
              <IconDelete className="h-4 w-4 text-textElementDark/85" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              color="warning"
              onClick={(e) => handleButton(e)}
            >
              <IconEdit className="h-4 w-4 text-textElementDark/85" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
