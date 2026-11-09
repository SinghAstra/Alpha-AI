import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Pill } from "@/components/pill";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#dce8df] px-5 py-[90px] text-center">
      <div className="absolute top-[-95px] left-[calc(50%-280px)] size-[560px] rounded-full border border-brand/15" />
      <div className="absolute top-[-195px] left-[calc(50%-380px)] size-[760px] rounded-full border border-brand/15" />
      <div className="relative z-10">
        <Pill>Your next trade deserves evidence</Pill>
        <h2 className="mt-6 mb-[18px] text-[50px] leading-[0.98] font-semibold tracking-[-0.055em] sm:text-[clamp(48px,6vw,75px)]">
          Keep the conviction.
          <br />
          <em className="font-serif font-medium text-brand">Check the odds.</em>
        </h2>
        <p className="text-[13px] text-muted">Two validations a day, free. No card required.</p>
        <Button
          className="mt-5"
          onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
        >
          Validate your first trade <Icon name="arrow" />
        </Button>
      </div>
    </section>
  );
}
