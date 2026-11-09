import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Pill } from "@/components/pill";
import { ValidationConsole } from "@/components/validation-console";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-[1400px] overflow-hidden px-5 pt-[70px] pb-[86px] sm:px-12 lg:grid lg:grid-cols-[0.83fr_1.17fr] lg:items-center lg:gap-[68px] lg:pt-[100px]">
      <div className="pointer-events-none absolute -top-[250px] -left-[300px] size-[650px] rounded-full bg-[radial-gradient(circle,rgba(211,241,139,0.2),transparent_63%)]" />
      <div className="relative z-10">
        <Pill>Built on 31.08M market observations</Pill>
        <h1 className="mt-7 mb-5 text-[55px] leading-[0.91] font-semibold tracking-[-3.5px] sm:text-[clamp(60px,6vw,90px)] sm:tracking-[-5.5px]">
          Don’t guess.
          <br />
          <em className="font-serif font-medium text-brand">Validate.</em>
        </h1>
        <p className="max-w-[500px] text-[15px] leading-[1.7] text-ink-2 sm:text-[17px]">
          See how your trade setup performed every other time it appeared — before you put money
          behind it.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Button
            className="w-full sm:w-auto"
            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Validate for free <Icon name="arrow" />
          </Button>
          <button className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 border-b border-line py-2 text-[13px] font-bold transition-colors hover:border-brand hover:text-brand">
            See how matching works <Icon name="external" size={15} />
          </button>
        </div>
        <div className="mt-9 flex items-center gap-3 text-[11px] leading-snug text-muted">
          <span className="flex">
            {["AK", "RM", "VS"].map((initials, index) => (
              <i
                key={initials}
                className={`grid size-[29px] place-items-center rounded-full border-2 border-paper bg-[#d7ded8] text-[8px] font-bold not-italic text-brand-dark ${
                  index === 0 ? "" : "-ml-1.5"
                }`}
              >
                {initials}
              </i>
            ))}
          </span>
          <span>
            <b className="text-ink-2">2 free validations daily</b>
            <br />
            No card. No trade calls.
          </span>
        </div>
      </div>
      <div id="demo" className="mt-12 w-full lg:mt-0">
        <ValidationConsole />
      </div>
    </section>
  );
}
