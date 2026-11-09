import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function AuthSuccess({
  onComplete,
  onPricing,
}: {
  onComplete: () => void;
  onPricing: () => void;
}) {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#e5ebe4] px-5 py-16" id="top">
      <div className="w-full max-w-[540px] rounded-[20px] border border-line bg-surface p-8 text-center shadow-[0_24px_70px_rgba(19,36,31,0.12)] sm:p-[60px]">
        <span className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-brand text-white">
          <Icon name="check" size={28} />
        </span>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-brand">
          You’re signed in
        </span>
        <h1 className="mt-7 mb-5 text-[47px] leading-[0.98] font-semibold tracking-[-3px] sm:text-[55px]">
          Welcome to
          <br />
          <em className="font-serif font-medium text-brand">Alphashots.</em>
        </h1>
        <p className="mx-auto mb-7 max-w-[390px] text-xs leading-[1.7] text-muted">
          Your two free validations are ready. Start with a setup you’re considering today.
        </p>
        <Button className="w-full" onClick={onComplete}>
          Validate a trade <Icon name="arrow" />
        </Button>
        <button
          className="mt-2 cursor-pointer text-[13px] font-bold text-ink transition-colors hover:text-brand"
          onClick={onPricing}
        >
          Explore Pro plans
        </button>
      </div>
    </main>
  );
}
