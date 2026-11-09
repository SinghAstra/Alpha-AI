import { cn } from "@/lib/utils";

export function Logo({
  onClick,
  href = "/",
  variant = "default",
  className,
}: {
  onClick?: () => void;
  href?: string;
  variant?: "default" | "light";
  className?: string;
}) {
  return (
    <a
      className={cn("flex items-center gap-2.5 text-xl font-bold tracking-[-0.045em]", className)}
      href={href}
      aria-label="Alphashots home"
      onClick={(event) => {
        if (!onClick) return;
        event.preventDefault();
        onClick();
      }}
    >
      <span
        className={cn(
          "flex size-[26px] shrink-0 items-center justify-center gap-[2px] rounded-full border",
          variant === "light" ? "border-white/55" : "border-current",
        )}
      >
        <span
          className={cn(
            "block h-[5px] w-[2px] rounded-[3px]",
            variant === "light" ? "bg-white/85" : "bg-current",
          )}
        />
        <span
          className={cn("block h-3 w-[2px] rounded-[3px]", variant === "light" ? "bg-lime" : "bg-brand")}
        />
        <span
          className={cn(
            "block h-2 w-[2px] rounded-[3px]",
            variant === "light" ? "bg-white/85" : "bg-current",
          )}
        />
      </span>
      <span>
        alphashots<span className={variant === "light" ? "text-lime" : "text-brand"}>.</span>
      </span>
    </a>
  );
}
