import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function PricingCards({
  billing,
  onLogin,
  onSelect,
}: {
  billing: "monthly" | "annual";
  onLogin: () => void;
  onSelect: (plan: string) => void;
}) {
  const paidPrice = billing === "monthly" ? "₹250" : "₹2,000";
  const paidSuffix = billing === "monthly" ? "/ month" : "/ year";

  return (
    <section className="mx-auto grid max-w-[1184px] gap-3.5 px-5 pt-6 pb-24 sm:px-12 lg:grid-cols-3">
      <article className="flex min-h-[500px] flex-col rounded-[17px] border border-line bg-surface p-7">
        <div className="min-h-[172px]">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-brand">Free</span>
          <h2 className="mt-4 mb-2 text-[43px] leading-none font-semibold tracking-[-0.06em]">₹0</h2>
          <p className="text-[11px] leading-relaxed text-muted">For checking the occasional setup.</p>
        </div>
        <Button variant="secondary" onClick={onLogin}>
          Create free account <Icon name="arrow" />
        </Button>
        <div className="my-6 border-t border-line" />
        <b className="text-[10px]">What’s included</b>
        <ul className="mt-5 mb-7 grid gap-3.5">
          {["2 validations every day", "Stocks, indices, and crypto", "Core match statistics"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2 text-[10px]">
                <Icon name="check" className="text-brand" /> {item}
              </li>
            ),
          )}
        </ul>
        <small className="mt-auto text-[8px] leading-relaxed text-muted">
          No card required. Free tier does not expire.
        </small>
      </article>

      <article className="flex min-h-[500px] flex-col rounded-[17px] border border-line bg-[#ebede7] p-7">
        <div className="min-h-[172px]">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-brand">Day pass</span>
          <h2 className="mt-4 mb-2 text-[43px] leading-none font-semibold tracking-[-0.06em]">₹20</h2>
          <p className="text-[11px] leading-relaxed text-muted">
            Unlimited evidence for the next 24 hours.
          </p>
        </div>
        <Button variant="secondary" onClick={() => onSelect("Day pass · ₹20")}>
          Get a day pass <Icon name="arrow" />
        </Button>
        <div className="my-6 border-t border-line" />
        <b className="text-[10px]">Everything in Free, plus</b>
        <ul className="mt-5 mb-7 grid gap-3.5">
          {["Unlimited validations", "Complete verdict explanations", "No auto-renewal"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[10px]">
              <Icon name="check" className="text-brand" /> {item}
            </li>
          ))}
        </ul>
        <small className="mt-auto text-[8px] leading-relaxed text-muted">
          Ideal for earnings days or active sessions.
        </small>
      </article>

      <article className="relative flex min-h-[500px] flex-col rounded-[17px] border border-ink bg-ink p-7 text-white shadow-[0_25px_60px_rgba(23,33,30,0.18)] lg:-translate-y-2">
        <span className="absolute top-5 right-5 rounded bg-lime px-2 py-1.5 font-mono text-[7px] tracking-[0.07em] text-brand-dark">
          {billing === "annual" ? "BEST VALUE" : "MOST POPULAR"}
        </span>
        <div className="min-h-[172px]">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-lime">
            Alphashots Pro
          </span>
          <h2 className="mt-4 mb-2 text-[43px] leading-none font-semibold tracking-[-0.06em]">
            {paidPrice}
            <i className="ml-1 text-[11px] font-normal not-italic tracking-normal text-muted">
              {paidSuffix}
            </i>
          </h2>
          <p className="text-[11px] leading-relaxed text-muted">
            {billing === "monthly"
              ? "For a consistent validation process."
              : "A full year of evidence-first decisions."}
          </p>
        </div>
        <Button variant="lime" onClick={() => onSelect(`Pro ${billing} · ${paidPrice}`)}>
          Choose Pro <Icon name="arrow" />
        </Button>
        <div className="my-6 border-t border-[#3c4945]" />
        <b className="text-[10px]">Everything in Day pass, plus</b>
        <ul className="mt-5 mb-7 grid gap-3.5">
          {[
            "Saved validation history",
            "Watchlist and position context",
            "Priority access to new markets",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[10px]">
              <Icon name="check" className="text-lime" /> {item}
            </li>
          ))}
        </ul>
        <small className="mt-auto text-[8px] leading-relaxed text-muted">
          {billing === "annual" ? "7-day refund window applies." : "Cancel any time from your account."}
        </small>
      </article>
    </section>
  );
}
