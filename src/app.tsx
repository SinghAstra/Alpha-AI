import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { InstitutionalPage } from "@/pages/institutional-page";
import { LoginPage } from "@/pages/login-page";
import { PricingPage } from "@/pages/pricing-page";
import { RetailPage } from "@/pages/retail-page";
import { pathFor, routeFromLocation } from "@/router";
import type { Mode, View } from "@/types";

export default function App() {
  const [{ mode, view }, setRoute] = useState(routeFromLocation);

  const navigate = (nextMode: Mode, nextView: View) => {
    const path = pathFor(nextMode, nextView);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setRoute({ mode: nextMode, view: nextView });
  };

  useEffect(() => {
    const onPopState = () => setRoute(routeFromLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [mode, view]);

  const changeMode = (next: Mode) => navigate(next, "home");

  return (
    <div className={mode === "desks" ? "desk-theme" : ""}>
      {view !== "login" && (
        <Navbar
          mode={mode}
          setMode={changeMode}
          view={view}
          setView={(next) => navigate(mode, next)}
        />
      )}
      {view === "pricing" ? (
        <PricingPage onLogin={() => navigate(mode, "login")} />
      ) : view === "login" ? (
        <LoginPage
          onBack={() => navigate(mode, "home")}
          onComplete={() => navigate("traders", "home")}
          onPricing={() => navigate(mode, "pricing")}
        />
      ) : mode === "traders" ? (
        <RetailPage />
      ) : (
        <InstitutionalPage />
      )}
      {view !== "login" && (
        <Footer
          onDesks={() => changeMode("desks")}
          onPricing={() => navigate(mode, "pricing")}
          onLogin={() => navigate(mode, "login")}
        />
      )}
    </div>
  );
}
