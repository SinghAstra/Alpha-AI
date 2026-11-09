import { Icon } from "@/components/icon";

const steps = [
  {
    number: "01",
    icon: "layers" as const,
    title: "Describe the setup",
    text: "Pick an asset, symbol, and how long you plan to hold. That’s it.",
    note: "Usually under 10 seconds",
  },
  {
    number: "02",
    icon: "spark" as const,
    title: "Find its market twins",
    text: "Our engine scans price, momentum, and volume to surface comparable periods.",
    note: "Across 3 years of data",
  },
  {
    number: "03",
    icon: "trend" as const,
    title: "Read the evidence",
    text: "Get the sample size, win rate, risk–reward, and a plain-English verdict.",
    note: "Never a black-box score",
    success: true,
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[90px] sm:px-12 lg:py-[130px]" id="how">
      <div className="max-w-[680px]">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          From hunch to evidence
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          A second opinion,
          <br />
          built from market memory.
        </h2>
        <p className="max-w-[510px] text-[15px] leading-[1.7] text-muted">
          Alphashots turns the setup in front of you into a question history can answer.
        </p>
      </div>
      <div className="mt-12 grid border-t border-line lg:mt-[70px] lg:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="border-b border-line py-7 last:border-b-0 lg:mr-8 lg:border-r lg:border-b-0 lg:py-8 lg:pr-10 lg:last:mr-0 lg:last:border-r-0"
          >
            <span className="font-mono text-[9px] text-muted">{step.number}</span>
            <div
              className={`mt-6 mb-6 grid size-12 place-items-center rounded-xl lg:mt-[38px] lg:mb-[29px] ${
                step.success ? "bg-brand text-white" : "bg-brand-pale text-brand"
              }`}
            >
              <Icon name={step.icon} />
            </div>
            <h3 className="text-lg font-semibold tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-2 min-h-[60px] text-xs leading-[1.65] text-muted">{step.text}</p>
            <small className="font-mono text-[8px] uppercase tracking-[0.08em] text-brand">
              {step.note}
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}
