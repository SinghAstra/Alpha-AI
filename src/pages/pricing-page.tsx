import { useState } from "react";
import { CheckoutModal } from "@/components/checkout-modal";
import { ComparisonTable } from "@/sections/pricing/comparison-table";
import { PricingCards } from "@/sections/pricing/pricing-cards";
import { PricingFaq } from "@/sections/pricing/pricing-faq";
import { PricingHero } from "@/sections/pricing/pricing-hero";

export function PricingPage({ onLogin }: { onLogin: () => void }) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-dvh bg-paper" id="top">
      <PricingHero billing={billing} setBilling={setBilling} />
      <PricingCards billing={billing} onLogin={onLogin} onSelect={setSelected} />
      <ComparisonTable />
      <PricingFaq />
      {selected && (
        <CheckoutModal selected={selected} onClose={() => setSelected(null)} onLogin={onLogin} />
      )}
    </main>
  );
}
