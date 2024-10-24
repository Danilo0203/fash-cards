import { CardFooter, cn, Link } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import { CardDescription } from "../gridCards/cardItem/CardDescription";
import { CardItem } from "../gridCards/cardItem/CardItem";
import { CardTitle } from "../gridCards/cardItem/CardTitle";
import { AnimatePresence, motion } from "framer-motion";

export const CardsSekeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
        <CardItem>
          <div className="flex flex-col gap-12">
            <Skeleton>
              <div className={cn("mt-4 font-bold tracking-wide")}></div>
            </Skeleton>
            <Skeleton>
              <div
                className={cn("mt-4 text-sm leading-relaxed tracking-wide")}
              ></div>
            </Skeleton>
          </div>
          <div
            className={cn(
              "flex items-center justify-between border-t-1 border-slate-400 pt-1 dark:border-white/50 dark:text-textElementDark/85",
            )}
          >
            <div className="my-4 flex w-full items-end justify-end gap-4">
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
            </div>
          </div>
        </CardItem>
        <CardItem>
          <div className="flex flex-col gap-12">
            <Skeleton>
              <div className={cn("mt-4 font-bold tracking-wide")}></div>
            </Skeleton>
            <Skeleton>
              <div
                className={cn("mt-4 text-sm leading-relaxed tracking-wide")}
              ></div>
            </Skeleton>
          </div>
          <div
            className={cn(
              "flex items-center justify-between border-t-1 border-slate-400 pt-1 dark:border-white/50 dark:text-textElementDark/85",
            )}
          >
            <div className="my-4 flex w-full items-end justify-end gap-4">
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
            </div>
          </div>
        </CardItem>
        <CardItem>
          <div className="flex flex-col gap-12">
            <Skeleton>
              <div className={cn("mt-4 font-bold tracking-wide")}></div>
            </Skeleton>
            <Skeleton>
              <div
                className={cn("mt-4 text-sm leading-relaxed tracking-wide")}
              ></div>
            </Skeleton>
          </div>
          <div
            className={cn(
              "flex items-center justify-between border-t-1 border-slate-400 pt-1 dark:border-white/50 dark:text-textElementDark/85",
            )}
          >
            <div className="my-4 flex w-full items-end justify-end gap-4">
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
              <Skeleton>
                <div className="p-4"></div>
              </Skeleton>
            </div>
          </div>
        </CardItem>
      </div>
    </>
  );
};
