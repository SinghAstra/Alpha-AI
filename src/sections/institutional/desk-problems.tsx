import { Icon } from "@/components/icon";
import { institutionalProblems } from "@/data/institutional";

export function DeskProblems() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[90px] sm:px-12 lg:py-[130px]" id="how">
      <div className="max-w-[680px]">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          The hidden cost layer
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          Execution losses rarely arrive
          <br />
          with a warning.
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">Our overlay is built to change that.</p>
      </div>
      <div className="mt-12 grid border-y border-line lg:mt-[60px] lg:grid-cols-2 xl:grid-cols-4">
        {institutionalProblems.map(([number, title, text]) => (
          <article
            key={number}
            className="flex min-h-[260px] flex-col border-b border-line p-6 last:border-b-0 xl:border-r xl:border-b-0 xl:last:border-r-0"
          >
            <span className="font-mono text-[9px] text-muted">{number}</span>
            <h3 className="mt-auto text-[19px] font-semibold">{title}</h3>
            <p className="mt-2 text-[11px] leading-[1.7] text-muted">{text}</p>
            <Icon name="arrow" className="mt-4 text-brand" />
          </article>
        ))}
      </div>
    </section>
  );
}
