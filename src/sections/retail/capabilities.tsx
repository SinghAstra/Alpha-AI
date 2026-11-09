import { Icon } from "@/components/icon";

export function Capabilities() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[90px] sm:px-12 lg:py-[130px]">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
            Designed for decisions
          </span>
          <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
            Less noise.
            <br />
            More signal quality.
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] leading-[1.7] text-muted">
          Every detail is designed to answer one question: does this setup deserve your risk?
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:mt-[60px] lg:grid-cols-3">
        <article className="flex min-h-[460px] flex-col justify-end rounded-2xl border border-line bg-[#eeefe9] p-7 lg:row-span-2 lg:min-h-[550px]">
          <div className="flex flex-1 items-center justify-center gap-6">
            <span className="grid size-[120px] -rotate-[20deg] place-items-center rounded-full border-[16px] border-brand border-r-[#ccd8d1] text-[41px] font-semibold tracking-[-0.06em] sm:size-[145px]">
              85<small className="text-sm">%</small>
            </span>
            <div className="flex flex-col gap-2.5 text-[10px]">
              <b className="before:mr-2 before:inline-block before:size-[7px] before:rounded-sm before:bg-brand before:align-middle">
                27 positive
              </b>
              <span className="before:mr-2 before:inline-block before:size-[7px] before:rounded-sm before:bg-[#ccd8d1] before:align-middle">
                5 negative
              </span>
            </div>
          </div>
          <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Probabilities you can audit</h3>
          <p className="mt-2 text-xs leading-[1.65] text-muted">
            See the observations behind every percentage. No magic score, no certainty theatre.
          </p>
        </article>

        <article className="flex min-h-[270px] flex-col justify-end rounded-2xl border border-line bg-[#eeefe9] p-7">
          <div className="mb-auto grid size-11 place-items-center rounded-[10px] border border-line bg-surface text-brand">
            <Icon name="clock" />
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.01em]">Your horizon, not ours</h3>
          <p className="mt-2 text-xs leading-[1.65] text-muted">
            Validate for a day, a week, or a position trade. Outcomes adjust to your actual plan.
          </p>
        </article>

        <article className="flex min-h-[270px] flex-col justify-end rounded-2xl border border-line bg-[#eeefe9] p-7">
          <div className="mb-auto grid size-11 place-items-center rounded-[10px] border border-line bg-surface text-brand">
            <Icon name="shield" />
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.01em]">Risk shown up front</h3>
          <p className="mt-2 text-xs leading-[1.65] text-muted">
            A bullish history can still be a bad trade. Drawdown and risk–reward stay in view.
          </p>
        </article>

        <article className="flex min-h-[270px] flex-col justify-end rounded-2xl bg-brand p-7 text-white lg:col-span-2">
          <p className="font-serif text-2xl italic leading-tight">
            “It doesn’t tell me what to buy. It tells me when my story has no evidence.”
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="grid size-[34px] place-items-center rounded-full bg-lime text-[9px] font-bold text-brand-dark">
              NS
            </span>
            <span className="flex flex-col text-[10px]">
              <b>Nikhil S.</b>
              <small className="mt-1 text-[#b9d3cc]">Options trader · Bengaluru</small>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
