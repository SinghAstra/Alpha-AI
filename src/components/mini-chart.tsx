const chartPath =
  "M0 112 C26 108 32 118 52 104 S82 82 102 91 S128 100 148 72 S176 78 196 58 S224 68 244 42 S273 55 296 24 S324 38 350 12";

export function MiniChart({ muted = false }: { muted?: boolean }) {
  return (
    <div
      className={`relative h-[130px] ${muted ? "text-[#8d9993]" : "text-brand"}`}
    >
      <div
        className="absolute inset-0 opacity-[0.48]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--line) 1px, transparent 1px), linear-gradient(to right, var(--line) 1px, transparent 1px)",
          backgroundSize: "100% 33%, 20% 100%",
        }}
      />
      <svg
        viewBox="0 0 350 128"
        preserveAspectRatio="none"
        role="img"
        aria-label="Historical price pattern trending upward"
        className="relative z-[2] h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#17695b" stopOpacity=".24" />
            <stop offset="1" stopColor="#17695b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${chartPath} L350 128 L0 128 Z`} fill="url(#area)" />
        <path
          d={chartPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="350" cy="12" r="4" fill="currentColor" />
      </svg>
      {!muted && (
        <span className="absolute -right-1 top-1 z-[3] rounded bg-brand px-1.5 py-0.5 font-mono text-[8px] font-medium text-white">
          +6.4%
        </span>
      )}
    </div>
  );
}
