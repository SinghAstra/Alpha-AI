import { FaqList } from "@/components/faq-list";
import { pricingFaqs } from "@/data/faqs";

export function PricingFaq() {
  return (
    <section className="mx-auto grid max-w-[1088px] gap-10 px-5 py-[90px] sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-[110px]">
      <div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-brand">
          Pricing questions
        </span>
        <h2 className="mt-4 mb-4 text-[39px] font-semibold tracking-[-0.055em] sm:text-[45px]">
          No fine print.
        </h2>
        <p className="max-w-[330px] text-[11px] leading-relaxed text-muted">
          Plans are priced in INR and include applicable platform access.
        </p>
      </div>
      <FaqList items={pricingFaqs} />
    </section>
  );
}
