import { FaqList } from "@/components/faq-list";
import { retailFaqs } from "@/data/faqs";

export function RetailFaq() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-10 px-5 py-[90px] sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-[130px]">
      <div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          Straight answers
        </span>
        <h2 className="mt-4 mb-[18px] text-[46px] leading-none font-semibold tracking-[-0.055em]">
          Before you validate.
        </h2>
        <p className="text-xs leading-relaxed text-muted">
          Still deciding?{" "}
          <a
            href="mailto:hello@alphashots.ai"
            className="text-brand transition-colors hover:text-brand-dark"
          >
            Talk to a human
          </a>
          .
        </p>
      </div>
      <FaqList items={retailFaqs} />
    </section>
  );
}
