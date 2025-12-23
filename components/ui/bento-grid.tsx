import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({ children, className }: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-zinc-900 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}
