import { Icon } from "@/components/icon";
import { MiniChart } from "@/components/mini-chart";

const proofPoints = [
  "Sample size before confidence",
  "Outcome distribution, not one forecast",
  "Risk context on every verdict",
];

const metrics = [
  ["MATCHES", "32"],
  ["CLOSED UP", "85%"],
  ["MEDIAN MOVE", "+6.4%"],
  ["RISK–REWARD", "1:2"],
];

export function Spotlight() {
  return (
    <section className="overflow-hidden bg-ink px-5 py-[90px] text-white sm:px-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-[max(48px,calc((100vw-1184px)/2))] lg:py-[110px]">
      <div className="max-w-[650px]">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-lime">
          The verdict is the product
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          One clear answer.
          <br />
          All the evidence behind it.
        </h2>
        <p className="max-w-[440px] text-sm leading-[1.75] text-[#aeb9b4]">
          Not another charting terminal. Alphashots compresses thousands of comparable moments into
          the five numbers that matter now.
        </p>
        <ul className="mt-8 grid gap-3.5">
          {proofPoints.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-xs">
              <Icon name="check" className="text-lime" /> {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-12 rounded-[17px] bg-[#f7f8f3] p-4 text-ink shadow-[0_35px_90px_rgba(0,0,0,0.3)] sm:p-6 lg:mt-0 lg:-rotate-1">
        <div className="flex justify-between border-b border-line pb-3.5 font-mono text-[8px] text-muted">
          <span>VALIDATION / 00482</span>
          <span className="inline-flex items-center before:mr-1.5 before:inline-block before:size-1.5 before:rounded-full before:bg-brand">
            Analysis complete
          </span>
        </div>
        <div className="flex items-start justify-between pt-6 pb-1">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] text-muted">SBIN · 1D · NSE</span>
            <strong className="text-[23px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[28px]">
              Historical
              <br />
              edge detected.
            </strong>
          </div>
          <span className="grid size-[58px] rotate-[5deg] place-content-center rounded-full bg-brand text-center text-[15px] font-bold text-white sm:size-[69px]">
            BUY
            <br />
            <small className="text-[8px] tracking-[0.1em]">BIAS</small>
          </span>
        </div>
        <div className="my-2 h-[110px] sm:h-[145px]">
          <MiniChart />
        </div>
        <div className="grid grid-cols-4 border-y border-line">
          {metrics.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1 py-3.5 pr-0.5">
              <span className="font-mono text-[7px] text-muted">{label}</span>
              <b className="text-[15px] sm:text-lg">{value}</b>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2 text-[9px] leading-relaxed text-muted">
          <Icon name="spark" className="text-brand" />
          <span>
            <span className="font-bold whitespace-nowrap text-ink">Why this verdict</span> 27 of 32
            comparable setups rose over the next 5 sessions. Volume confirmation is stronger than in
            78% of matches.
          </span>
        </p>
      </div>
    </section>
  );
}
