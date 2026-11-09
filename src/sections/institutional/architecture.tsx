import { Icon } from "@/components/icon";

const nodes = [
  ["01 · MIRROR", "Market + execution data", "Read-only"],
  ["02 · OVERLAY", "Alphashots ML", "Regime-aware"],
  ["03 · OUTPUT", "Scores + flags", "API / Stream"],
];

export function Architecture() {
  return (
    <section className="bg-ink px-5 py-[90px] text-white sm:px-12 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-[max(48px,calc((100vw-1184px)/2))] lg:py-[120px]">
      <div className="max-w-[650px]">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-lime">
          A read-only intelligence layer
        </span>
        <h2 className="mt-4 mb-[18px] text-[39px] leading-[1.03] font-semibold tracking-[-2px] sm:text-[clamp(40px,4vw,58px)] sm:tracking-[-3px]">
          Fits around the desk.
          <br />
          Never inside the order path.
        </h2>
        <p className="max-w-[440px] text-sm leading-[1.75] text-[#aeb9b4]">
          Mirror market and execution data in. Receive risk scores and flags out. Alphashots never
          touches orders.
        </p>
        <ul className="mt-8 grid gap-3.5">
          {["Deployment measured in weeks", "Venue and strategy-level controls", "Full decision audit trail"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2.5 text-xs">
                <Icon name="check" className="text-lime" /> {item}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-2.5 lg:mt-0">
        {nodes.map(([label, title, note], index) => (
          <div key={label} className="flex items-center gap-2.5">
            <div
              className={`flex min-h-[110px] w-[145px] flex-col rounded-[10px] border p-4 ${
                index === 1 ? "border-[#e8eefb] bg-[#e8eefb] text-ink" : "border-[#3c4b46]"
              }`}
            >
              <small className="font-mono text-[7px] text-[#8e9a96]">{label}</small>
              <b className="mt-auto text-[13px]">{title}</b>
              <span className="mt-1.5 text-[8px] text-[#8e9a96]">{note}</span>
            </div>
            {index < nodes.length - 1 && <Icon name="arrow" className="text-[#788680]" />}
          </div>
        ))}
        <div className="flex w-full flex-wrap gap-2 pt-2 lg:pl-[155px]">
          {["Execution desk", "Risk systems", "Analytics"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#3c4b46] px-3 py-1.5 text-[8px] text-[#adb7b3]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
