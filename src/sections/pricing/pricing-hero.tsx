import { Pill } from "@/components/pill";
import { cn } from "@/lib/utils";

export function PricingHero({
  billing,
  setBilling,
}: {
  billing: "monthly" | "annual";
  setBilling: (billing: "monthly" | "annual") => void;
}) {
  return (
    <section className="px-5 pt-[70px] pb-12 text-center sm:px-6 lg:pt-[95px]">
      <Pill>Start with 2 free validations every day</Pill>
      <h1 className="mx-auto mt-6 mb-[18px] max-w-[900px] text-[51px] leading-[0.98] font-semibold tracking-[-3px] sm:text-[clamp(52px,6vw,78px)] sm:tracking-[-4.5px]">
        A small price for a
        <br />
        <em className="font-serif font-medium text-brand">better decision.</em>
      </h1>
      <p className="mx-auto max-w-[590px] text-sm leading-[1.7] text-muted">
        No brokerage tie-ins. No hidden platform fees. Just historical evidence when you need it.
      </p>
      <div
        className="mt-8 inline-flex rounded-[10px] border border-line bg-[#e8eae4] p-1"
        aria-label="Billing frequency"
      >
        {(["monthly", "annual"] as const).map((value) => (
          <button
            key={value}
            className={cn(
              "min-h-[39px] cursor-pointer rounded-[7px] px-4 text-[11px] transition-colors",
              billing === value
                ? "bg-surface font-bold text-ink shadow-sm"
                : "text-muted hover:text-ink",
            )}
            onClick={() => setBilling(value)}
          >
            {value === "monthly" ? "Monthly" : "Annual"}
            {value === "annual" && (
              <span className="ml-1.5 font-mono text-[7px] uppercase text-brand">Save 33%</span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
