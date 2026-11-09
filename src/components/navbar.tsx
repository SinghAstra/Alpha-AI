import { useState } from "react";
import type { Mode, View } from "@/types";
import { pathFor } from "@/router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Navbar({
  mode,
  setMode,
  view,
  setView,
}: {
  mode: Mode;
  setMode: (mode: Mode) => void;
  view: View;
  setView: (view: View) => void;
}) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    setView("home");
    window.setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const openView = (next: View) => {
    setOpen(false);
    setView(next);
  };

  const linkClass = (active: boolean) =>
    cn(
      "cursor-pointer text-[13px] transition-colors hover:text-brand",
      active ? "font-bold text-brand" : "text-ink-2",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center gap-8 px-5 lg:px-9">
        <Logo href={pathFor(mode, "home")} onClick={() => openView("home")} />
        <div className="ml-auto flex rounded-[9px] bg-[#e6e8e1] p-[3px] lg:ml-0">
          <button
            className={cn(
              "cursor-pointer rounded-[7px] px-2.5 py-[7px] text-xs transition-colors",
              mode === "traders"
                ? "bg-surface font-bold text-ink shadow-sm"
                : "text-muted hover:text-ink",
            )}
            onClick={() => setMode("traders")}
          >
            For traders
          </button>
          <button
            className={cn(
              "cursor-pointer rounded-[7px] px-2.5 py-[7px] text-xs transition-colors",
              mode === "desks"
                ? "bg-surface font-bold text-ink shadow-sm"
                : "text-muted hover:text-ink",
            )}
            onClick={() => setMode("desks")}
          >
            For desks
          </button>
        </div>
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <button className={linkClass(false)} onClick={() => go("#how")}>
            How it works
          </button>
          <button className={linkClass(false)} onClick={() => go("#proof")}>
            Research
          </button>
          <button
            className={linkClass(view === "pricing")}
            onClick={() => openView("pricing")}
          >
            Pricing
          </button>
          <button
            className={cn(linkClass(view === "login"), "border-l border-line pl-5")}
            onClick={() => openView("login")}
          >
            Log in
          </button>
          <Button className="text-[13px]" onClick={() => go(mode === "traders" ? "#demo" : "#contact")}>
            {mode === "traders" ? "Validate a trade" : "Book a briefing"}
            <Icon name="arrow" size={16} />
          </Button>
        </div>
        <button
          className="grid size-11 cursor-pointer place-items-center rounded-lg transition-colors hover:bg-paper-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pt-3 pb-6 lg:hidden">
          <button
            className="min-h-11 cursor-pointer text-left text-sm text-ink-2 transition-colors hover:text-brand"
            onClick={() => go("#how")}
          >
            How it works
          </button>
          <button
            className="min-h-11 cursor-pointer text-left text-sm text-ink-2 transition-colors hover:text-brand"
            onClick={() => go("#proof")}
          >
            Research
          </button>
          <button
            className="min-h-11 cursor-pointer text-left text-sm text-ink-2 transition-colors hover:text-brand"
            onClick={() => openView("pricing")}
          >
            Pricing
          </button>
          <button
            className="min-h-11 cursor-pointer text-left text-sm text-ink-2 transition-colors hover:text-brand"
            onClick={() => openView("login")}
          >
            Log in
          </button>
          <Button className="mt-2 w-full" onClick={() => go(mode === "traders" ? "#demo" : "#contact")}>
            {mode === "traders" ? "Validate a trade" : "Book a briefing"}
            <Icon name="arrow" />
          </Button>
        </div>
      )}
    </header>
  );
}
