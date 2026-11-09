const flags = [
  ["bg-danger", "Toxic flow probability", "68%"],
  ["bg-amber", "Hedge lag sensitivity", "+23 bps"],
  ["bg-[#4eab84]", "Feed health", "Normal"],
];

export function RiskPanel() {
  return (
    <div className="rounded-[15px] bg-ink p-6 text-white shadow-[0_24px_70px_rgba(19,36,31,0.12)]">
      <div className="flex justify-between border-b border-[#32403b] pb-4 font-mono text-[8px] text-[#809089]">
        <span>EXECUTION RISK / LIVE SIMULATION</span>
        <span>14:32:08 IST</span>
      </div>
      <div className="flex justify-between py-6">
        <div className="flex flex-col">
          <small className="font-mono text-[8px] text-[#8f9d98]">ADVERSE SELECTION RISK</small>
          <strong className="text-[45px] font-semibold tracking-[-0.06em]">0.72</strong>
          <span className="text-[10px] text-amber">Elevated · +18% vs baseline</span>
        </div>
        <div className="size-[72px] rotate-[25deg] rounded-full border-[7px] border-amber border-l-[#35443f]" />
      </div>
      <div className="h-[140px] border-y border-[#32403b] py-3.5 text-amber">
        <svg viewBox="0 0 500 140" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0 110 C45 105 52 112 85 98 S130 106 160 88 S210 92 240 70 S285 82 320 45 S350 65 382 35 S428 56 460 18 S480 28 500 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0 105 C80 100 140 100 210 95 S330 88 500 82"
            fill="none"
            stroke="currentColor"
            strokeDasharray="5 5"
            opacity=".35"
          />
        </svg>
      </div>
      <div className="grid gap-3 pt-5">
        {flags.map(([dot, label, value]) => (
          <span key={label} className="flex flex-col gap-1 text-[8px] text-[#8d9b96]">
            <span className="flex items-center gap-2">
              <i className={`inline-block size-1.5 rounded-full ${dot}`} /> {label}
              <b className="ml-auto text-[11px] text-white">{value}</b>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
