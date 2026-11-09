import { ProofStrip } from "@/components/proof-strip";
import { Capabilities } from "@/sections/retail/capabilities";
import { FinalCta } from "@/sections/retail/final-cta";
import { Hero } from "@/sections/retail/hero";
import { HowItWorks } from "@/sections/retail/how-it-works";
import { RetailFaq } from "@/sections/retail/retail-faq";
import { RetailPricing } from "@/sections/retail/retail-pricing";
import { Spotlight } from "@/sections/retail/spotlight";

export function RetailPage() {
  return (
    <main id="top">
      <Hero />
      <ProofStrip />
      <HowItWorks />
      <Spotlight />
      <Capabilities />
      <RetailPricing />
      <RetailFaq />
      <FinalCta />
    </main>
  );
}
