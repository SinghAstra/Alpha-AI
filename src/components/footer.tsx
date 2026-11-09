import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";

export function Footer({
  onDesks,
  onPricing,
  onLogin,
}: {
  onDesks: () => void;
  onPricing: () => void;
  onLogin: () => void;
}) {
  return (
    <footer className="bg-ink px-[max(24px,calc((100vw-1184px)/2))] pt-16 pb-7 text-white">
      <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-[2fr_repeat(3,1fr)] md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 text-xs text-[#bdc5c1]">Evidence before exposure.</p>
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#84918b]">
            Made for Indian markets.
          </span>
        </div>
        <div className="flex flex-col gap-3 text-[10px]">
          <b className="mb-1 font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-[#82918b]">
            Product
          </b>
          <a href="/#demo" className="transition-colors hover:text-lime">
            Validate a trade
          </a>
          <button className="cursor-pointer text-left transition-colors hover:text-lime" onClick={onPricing}>
            Pricing
          </button>
          <button className="cursor-pointer text-left transition-colors hover:text-lime" onClick={onLogin}>
            Log in
          </button>
          <button className="cursor-pointer text-left transition-colors hover:text-lime" onClick={onDesks}>
            For institutions
          </button>
        </div>
        <div className="flex flex-col gap-3 text-[10px]">
          <b className="mb-1 font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-[#82918b]">
            Resources
          </b>
          <a href="/#proof" className="transition-colors hover:text-lime">
            Methodology
          </a>
          <a href="/#proof" className="transition-colors hover:text-lime">
            Research
          </a>
          <a href="/#how" className="transition-colors hover:text-lime">
            How it works
          </a>
        </div>
        <div className="flex flex-col gap-3 text-[10px]">
          <b className="mb-1 font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-[#82918b]">
            Company
          </b>
          <a href="mailto:hello@alphashots.ai" className="transition-colors hover:text-lime">
            Contact
          </a>
          <a href="/" className="transition-colors hover:text-lime">
            Privacy
          </a>
          <a href="/" className="transition-colors hover:text-lime">
            Terms
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-2.5 border-t border-ink-2 pt-6 text-[8px] leading-relaxed text-[#83908b]">
        <Icon name="shield" size={16} />
        <p className="max-w-[680px]">
          Historical pattern analysis for educational purposes only. Not investment advice. Markets
          involve risk; past patterns do not guarantee future results.
        </p>
        <span className="ml-auto whitespace-nowrap">© 2026 Alphashots AI</span>
      </div>
    </footer>
  );
}
