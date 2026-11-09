import { Icon } from "@/components/icon";
import { planFeatures } from "@/data/plans";

export function ComparisonTable() {
  return (
    <section className="bg-[#e9ebe5] px-5 py-[90px] sm:px-12 lg:px-[max(48px,calc((100vw-1088px)/2))] lg:py-[110px]">
      <div className="max-w-[730px]">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          Compare plans
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          Know exactly what you’re paying for.
        </h2>
      </div>
      <div className="mt-12 overflow-x-auto rounded-[14px] border border-line bg-surface">
        <div className="min-w-[650px]">
          <div className="grid min-h-[50px] grid-cols-[2fr_repeat(3,1fr)] items-center bg-[#f0f1ed] px-6 font-mono text-[8px] uppercase text-muted">
            <span>Capability</span>
            <b className="text-center font-semibold">Free</b>
            <b className="text-center font-semibold">Day pass</b>
            <b className="text-center font-semibold">Pro</b>
          </div>
          {planFeatures.map(([feature, free, day, pro]) => (
            <div
              key={feature}
              className="grid min-h-[62px] grid-cols-[2fr_repeat(3,1fr)] items-center border-t border-line px-6 text-[10px]"
            >
              <span>{feature}</span>
              <b className="text-center font-semibold">{free}</b>
              <b className="text-center font-semibold">{day}</b>
              <b className="text-center font-semibold text-brand">{pro}</b>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 flex items-center gap-2 text-[9px] text-muted">
        <Icon name="shield" /> Secure checkout UI preview. No payment will be processed in this
        prototype.
      </p>
    </section>
  );
}
