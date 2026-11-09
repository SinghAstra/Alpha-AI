export function ProofStrip() {
  const cells = [
    ["20K+", "traders validating decisions"],
    ["31.08M", "research observations"],
    ["SSRN", "published methodology"],
    ["25.85×", "CVaR99 efficiency*"],
  ];

  return (
    <section
      id="proof"
      className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-[1.25fr_repeat(4,1fr)]"
    >
      <div className="col-span-2 flex min-h-[92px] flex-col justify-center bg-paper px-6 py-5 lg:col-span-1">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
          Evidence, not adjectives
        </span>
      </div>
      {cells.map(([value, label]) => (
        <div key={label} className="flex min-h-[92px] flex-col justify-center bg-paper px-6 py-5">
          <strong className="text-lg font-bold">{value}</strong>
          <span className="mt-1 text-[10px] text-muted">{label}</span>
        </div>
      ))}
    </section>
  );
}
