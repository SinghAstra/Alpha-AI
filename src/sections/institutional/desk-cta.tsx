import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function DeskCta() {
  return (
    <section className="bg-[#264e9f] px-5 py-[90px] text-center text-white lg:py-[115px]" id="contact">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-lime">
        For options, market-making & HFT desks
      </span>
      <h2 className="mt-5 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
        Bring us one execution problem.
      </h2>
      <p className="mx-auto mb-7 max-w-[600px] text-[13px] leading-[1.7] text-[#c4d2ef]">
        We’ll bring the research team, a scoped data plan, and a frank view on whether the overlay can
        help.
      </p>
      <Button variant="secondary" className="border-0 bg-white text-brand-dark hover:bg-white">
        Book a 30-minute briefing <Icon name="arrow" />
      </Button>
      <small className="mt-5 block font-mono text-[8px] uppercase tracking-[0.08em] text-[#a8bbe3]">
        India / Singapore · Research-led, no generic sales deck
      </small>
    </section>
  );
}
