import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Pill } from "@/components/pill";
import { RiskPanel } from "@/sections/institutional/risk-panel";

export function DeskHero() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 pt-[70px] pb-[86px] sm:px-12 lg:grid-cols-2 lg:gap-16 lg:pt-[95px]">
      <div>
        <Pill>Execution risk intelligence</Pill>
        <h1 className="mt-7 mb-5 text-[52px] leading-[0.98] font-semibold tracking-[-3.5px] sm:text-[clamp(52px,5.2vw,74px)]">
          Know when the market
          <br />
          stops behaving <em className="font-serif font-medium text-brand">normally.</em>
        </h1>
        <p className="max-w-[500px] text-[15px] leading-[1.7] text-ink-2 sm:text-[17px]">
          ML overlays that flag adverse selection, slippage, and regime shifts before they accumulate
          into execution loss.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Button
            className="w-full sm:w-auto"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a research briefing <Icon name="arrow" />
          </Button>
          <button className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 border-b border-line py-2 text-[13px] font-bold transition-colors hover:border-brand hover:text-brand">
            Read the SSRN paper <Icon name="external" />
          </button>
        </div>
      </div>
      <RiskPanel />
    </section>
  );
}
