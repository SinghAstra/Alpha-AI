import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.11em]",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-brand shadow-[0_0_0_4px_var(--brand-pale)]" />
      {children}
    </span>
  );
}
