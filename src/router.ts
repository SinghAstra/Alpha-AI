import type { Mode, View } from "@/types";

const INSTITUTIONS_PREFIX = "/institutions";

export function pathFor(mode: Mode, view: View): string {
  const base = mode === "desks" ? INSTITUTIONS_PREFIX : "";
  if (view === "pricing") return `${base}/pricing`;
  if (view === "login") return `${base}/login`;
  return base || "/";
}

export function routeFromLocation(): { mode: Mode; view: View } {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const mode: Mode =
    path === INSTITUTIONS_PREFIX || path.startsWith(`${INSTITUTIONS_PREFIX}/`)
      ? "desks"
      : "traders";
  const rest = mode === "desks" ? path.slice(INSTITUTIONS_PREFIX.length) : path;

  if (rest === "/pricing") return { mode, view: "pricing" };
  if (rest === "/login") return { mode, view: "login" };
  return { mode, view: "home" };
}
