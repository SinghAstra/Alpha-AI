import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { MiniChart } from "@/components/mini-chart";
import { cn } from "@/lib/utils";

const assets = ["Stocks", "Options", "Crypto"];
const symbols = ["SBIN", "RELIANCE", "NIFTY"];
const periods = ["1 day", "5 days", "2 weeks"];

export function ValidationConsole({ compact = false }: { compact?: boolean }) {
  const [asset, setAsset] = useState(assets[0]);
  const [symbol, setSymbol] = useState(symbols[0]);
  const [period, setPeriod] = useState(periods[1]);
  const [state, setState] = useState<"ready" | "loading" | "result">("ready");

  const validate = () => {
    setState("loading");
    window.setTimeout(() => setState("result"), 1050);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-[#d5ddd7] bg-surface shadow-[0_24px_70px_rgba(19,36,31,0.12)]",
        compact && "text-sm",
      )}
    >
      <div className="h-1 bg-[linear-gradient(90deg,var(--brand)_0_28%,var(--lime)_28%_47%,var(--paper-2)_47%)]" />
      <div className="flex items-start justify-between border-b border-line px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand">
            Historical pattern engine
          </span>
          <strong className="text-lg tracking-[-0.01em]">Validate a setup</strong>
        </div>
        <span className="rounded-full bg-brand-pale px-2.5 py-1.5 font-mono text-[9px] uppercase text-brand-dark">
          2 free today
        </span>
      </div>

      <div className="border-b border-line px-5 py-5 sm:px-6">
        <div>
          <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
            Asset class
          </label>
          <div className="grid grid-cols-3 rounded-[9px] bg-paper-2 p-[3px]">
            {assets.map((item) => (
              <button
                key={item}
                className={cn(
                  "min-h-[33px] cursor-pointer rounded-[7px] text-[11px] transition-colors",
                  asset === item
                    ? "bg-surface font-bold text-ink shadow-sm"
                    : "text-muted hover:text-ink",
                )}
                onClick={() => setAsset(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1.45fr_0.55fr]">
          <div>
            <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
              Symbol
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {symbols.map((item) => (
                <button
                  key={item}
                  className={cn(
                    "min-h-[33px] cursor-pointer rounded-[7px] border text-[11px] transition-colors",
                    symbol === item
                      ? "border-brand bg-brand-pale font-medium text-brand-dark"
                      : "border-line text-muted hover:border-brand/40 hover:text-ink",
                  )}
                  onClick={() => setSymbol(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="period"
              className="mb-2 block font-mono text-[9px] uppercase tracking-[0.08em] text-muted"
            >
              Holding period
            </label>
            <div className="relative">
              <select
                id="period"
                value={period}
                onChange={(event) => setPeriod(event.target.value)}
                className="h-9 w-full cursor-pointer appearance-none rounded-md border border-line bg-surface px-2.5 pr-7 text-[11px] text-ink outline-none transition-colors focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-brand/20"
              >
                {periods.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <Icon
                name="chevron"
                size={15}
                className="pointer-events-none absolute right-2 top-2.5 rotate-90 text-muted"
              />
            </div>
          </div>
        </div>
      </div>

      {state === "ready" && (
        <div className="grid min-h-[194px] items-center gap-5 px-5 py-5 sm:grid-cols-[1.15fr_0.85fr] sm:px-6">
          <div className="hidden opacity-60 sm:block">
            <MiniChart muted />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand">
              <Icon name="spark" size={15} /> Setup ready
            </span>
            <p className="mt-2 text-[11px] leading-relaxed text-muted">
              We’ll compare today’s structure with 3 years of similar {asset.toLowerCase()} patterns.
            </p>
          </div>
        </div>
      )}

      {state === "loading" && (
        <div className="flex min-h-[194px] items-center justify-center gap-4 px-5 py-5" aria-live="polite">
          <div className="relative size-11 animate-spin rounded-full border border-line">
            <span className="absolute -top-[3px] left-[18px] size-1.5 rounded-full bg-brand" />
          </div>
          <div className="flex flex-col gap-1">
            <strong className="text-[13px]">Matching market structures…</strong>
            <small className="text-[10px] text-muted">Scanning 1.28M daily observations</small>
          </div>
        </div>
      )}

      {state === "result" && (
        <div className="min-h-[194px] px-5 pt-4 pb-3 sm:px-6" aria-live="polite">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold">{symbol} · NSE</span>
              <span className="mt-0.5 text-[9px] text-muted">{period} horizon</span>
            </div>
            <span className="flex items-center gap-1.5 rounded-md bg-brand-pale px-2.5 py-1.5 font-mono text-[9px] text-brand-dark">
              <Icon name="trend" size={16} /> BUY BIAS
            </span>
          </div>
          <div className="my-2 h-[82px]">
            <MiniChart />
          </div>
          <div className="grid grid-cols-3 divide-x divide-line rounded-md border border-line">
            {[
              ["32", "close matches"],
              ["85%", "moved up"],
              ["1:2", "risk–reward"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col px-2.5 py-2">
                <strong className="text-base">{value}</strong>
                <span className="text-[8px] text-muted">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 flex gap-1.5 text-[9px] leading-snug text-ink-2">
            <Icon name="spark" size={16} className="shrink-0 text-brand" />
            Similar setups closed higher in 27 of 32 cases. The strongest overlap is in momentum and
            volume structure.
          </p>
        </div>
      )}

      <div className="flex flex-col items-stretch gap-3 border-t border-line px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:pl-6">
        <span className="flex max-w-[240px] items-start gap-1.5 text-[8px] leading-snug text-muted">
          <Icon name="shield" size={14} className="shrink-0" /> Illustrative historical analysis, not
          investment advice.
        </span>
        <Button size="sm" className="text-[11px]" onClick={validate}>
          {state === "result" ? "Run again" : "Validate this setup"}
          <Icon name="arrow" size={17} />
        </Button>
      </div>
    </div>
  );
}
