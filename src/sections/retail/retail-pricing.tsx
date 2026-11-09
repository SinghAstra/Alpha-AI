import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Day pass",
    price: "20",
    suffix: "",
    description: "24 hours of unlimited validations.",
    cta: "Get a day pass",
    variant: "secondary" as const,
    features: ["Unlimited validations", "Full verdict detail", "No auto-renewal"],
  },
  {
    name: "Monthly",
    price: "250",
    suffix: "/ month",
    description: "For a consistent trading process.",
    cta: "Start monthly",
    variant: "lime" as const,
    featured: true,
    features: ["Everything in Day pass", "Validation history", "Watchlist context"],
  },
  {
    name: "Annual",
    price: "2,000",
    suffix: "/ year",
    description: "Two months free for committed traders.",
    cta: "Choose annual",
    variant: "secondary" as const,
    features: ["Everything in Monthly", "Priority beta access", "7-day refund window"],
  },
];

export function RetailPricing() {
  return (
    <section className="bg-[#e8ebe4] py-[90px] lg:py-[130px]" id="pricing">
      <div className="mx-auto max-w-[1184px] px-5 sm:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
            Simple pricing
          </span>
          <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
            Pay for clarity.
            <br />
            Not screen time.
          </h2>
          <p className="mx-auto max-w-[510px] text-[15px] leading-[1.7] text-muted">
            Start with two free validations every day. Upgrade when it becomes part of your process.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-3.5 lg:mt-[60px] lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border border-line bg-surface p-7",
                plan.featured && "bg-ink text-white lg:-translate-y-2",
              )}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 rounded bg-lime px-2 py-1 font-mono text-[7px] tracking-[0.07em] text-brand-dark">
                  MOST POPULAR
                </span>
              )}
              <div>
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.1em]",
                    plan.featured ? "text-lime" : "text-brand",
                  )}
                >
                  {plan.name}
                </span>
                <h3 className="mt-4 mb-1 text-[39px] font-semibold tracking-[-0.05em]">
                  <small className="align-super text-lg">₹</small>
                  {plan.price}
                  {plan.suffix && (
                    <i className="ml-1 text-[11px] font-normal not-italic tracking-normal text-muted">
                      {plan.suffix}
                    </i>
                  )}
                </h3>
                <p className="mb-7 text-[11px] text-muted">{plan.description}</p>
              </div>
              <Button variant={plan.variant} className="w-full">
                {plan.cta} <Icon name="arrow" />
              </Button>
              <ul className="mt-6 grid gap-3 border-t border-line pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[10px]">
                    <Icon name="check" className={plan.featured ? "text-lime" : "text-brand"} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-white/45 px-5 py-4 text-[11px]">
          <Icon name="spark" className="text-brand" />
          <span>
            <b>Not ready to pay?</b> Your 2 free daily validations never expire.
          </span>
          <button className="ml-auto flex w-full cursor-pointer items-center justify-center gap-2 font-bold transition-colors hover:text-brand sm:w-auto">
            Try one now <Icon name="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
