import { ProofStrip } from "@/components/proof-strip";
import { Architecture } from "@/sections/institutional/architecture";
import { DeskCta } from "@/sections/institutional/desk-cta";
import { DeskHero } from "@/sections/institutional/desk-hero";
import { DeskProblems } from "@/sections/institutional/desk-problems";
import { Research } from "@/sections/institutional/research";

export function InstitutionalPage() {
  return (
    <main id="top">
      <DeskHero />
      <ProofStrip />
      <DeskProblems />
      <Architecture />
      <Research />
      <DeskCta />
    </main>
  );
}
