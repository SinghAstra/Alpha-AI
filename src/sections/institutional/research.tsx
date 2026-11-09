import { Icon } from "@/components/icon";

export function Research() {
  return (
    <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-[90px] sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-[130px]">
      <div className="flex aspect-square w-full max-w-[350px] flex-col items-center justify-center justify-self-center rounded-full border border-line bg-[#e6e9e4]">
        <span className="font-mono text-[8px] text-muted">CVaR99 EFFICIENCY</span>
        <strong className="text-[75px] font-semibold tracking-[-0.08em] text-brand">
          25.85<small className="text-[28px]">×</small>
        </strong>
        <p className="text-[10px] text-muted">at a 0.1% prediction gate</p>
      </div>
      <div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          Research, not theatre
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          31.08 million observations.
          <br />
          One measurable objective.
        </h2>
        <p className="text-[13px] leading-[1.7] text-muted">
          Our SSRN research evaluates execution-risk prediction under extreme class imbalance, where
          accuracy is easy and usefulness is hard.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="flex min-h-[43px] cursor-pointer items-center gap-2 rounded-lg border border-line bg-surface px-4 text-[10px] font-bold transition-colors hover:border-brand hover:text-brand">
            Read methodology <Icon name="external" />
          </button>
          <button className="flex min-h-[43px] cursor-pointer items-center gap-2 rounded-lg border border-line bg-surface px-4 text-[10px] font-bold transition-colors hover:border-brand hover:text-brand">
            Request technical appendix <Icon name="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
