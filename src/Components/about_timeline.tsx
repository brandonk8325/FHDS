type Step = { year: string; text: string };

export default function AbtTimeline({
  maxWidth = "max-w-none",
  steps = [],
  // kept for mobile; desktop uses card min/max below
  stepWidth = "10rem",
  colSpace = "2rem",
  iconPx = 28,
  railPx = 3,
  cardMinPx = 128,          // NEW: desktop min width per column/card
  cardMaxPx = 320,          // NEW: desktop max width per card
  cardClassName = "text-sm bg-neutral-800 text-white text-center rounded-xl px-3 py-3 shadow",
}: {
  maxWidth?: string;
  steps?: Step[];
  stepWidth?: string;
  colSpace?: string;
  iconPx?: number;
  railPx?: number;
  cardMinPx?: number;
  cardMaxPx?: number;
  cardClassName?: string;
}) {
  const vars: React.CSSProperties = {
    ["--step-w" as any]: stepWidth,
    ["--col-pad" as any]: `calc(${colSpace} / 2)`,
    ["--icon" as any]: `${iconPx}px`,
    ["--rail" as any]: `${railPx}px`,
    ["--card-min" as any]: `${cardMinPx}px`,
    ["--card-max" as any]: `${cardMaxPx}px`,
  };

  return (
    <>
      {/* Mobile unchanged */}
      <div className="block md:hidden relative py-4" style={vars}>
        <ul>
          {steps.map((s, i) => (
            <li key={s.year} className="relative pl-12 py-4 min-h-[96px]">
              {i !== 0 && (
                <div
                  className="absolute left-[13px] top-0 bg-black"
                  style={{ width: "var(--rail)", height: "calc(50% - (var(--icon) / 2))" }}
                />
              )}
              {i !== steps.length - 1 && (
                <div
                  className="absolute left-[13px] bottom-0 bg-black"
                  style={{ width: "var(--rail)", height: "calc(50% - (var(--icon) / 2))" }}
                />
              )}
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center"
                style={{ width: "var(--icon)", height: "var(--icon)" }}
              >
                <svg viewBox="0 0 20 20" style={{ width: "var(--icon)", height: "var(--icon)" }}>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="mb-2 text-xl font-semibold text-black">{s.year}</div>
              <div className={`inline-block ${cardClassName}`}>{s.text}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop / Tablet */}
      <div className={`hidden md:block mx-auto ${maxWidth}`} style={vars}>
        <div
          className="grid"
          style={{
            // Adaptive columns per step; no gutters so the rail is continuous
            gridTemplateColumns: `repeat(${steps.length}, minmax(var(--card-min), auto))`,
            columnGap: "0px", // IMPORTANT: keeps the line continuous
          }}
        >
          {/* Row 1: Years (visual spacing via padding) */}
          {steps.map((s) => (
            <div key={s.year} className="flex justify-center items-end px-[var(--col-pad)]">
              <div className="text-black text-center">{s.year}</div>
            </div>
          ))}

          {/* Row 2: Rail + icon — NO padding so lines meet perfectly */}
          {steps.map((s, i) => (
            <div key={s.year} className="px-0">
              <div
                className="grid items-center h-10"
                style={{ gridTemplateColumns: "1fr var(--icon) 1fr" }}
              >
                {/* Left piece */}
                <div className={i === 0 ? "" : "bg-black"} style={{ height: "var(--rail)" }} />
                {/* Icon */}
                <div className="flex items-center justify-center">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{ width: "var(--icon)", height: "var(--icon)" }}
                  >
                    <svg viewBox="0 0 20 20" style={{ width: "var(--icon)", height: "var(--icon)" }}>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                {/* Right piece */}
                <div
                  className={i === steps.length - 1 ? "" : "bg-black"}
                  style={{ height: "var(--rail)" }}
                />
              </div>
            </div>
          ))}

          {/* Row 3: Cards (visual spacing via padding) */}
          {steps.map((s) => (
            <div key={s.year} className="flex justify-center items-start mt-3 px-[var(--col-pad)]">
              <div
                className={`inline-block ${cardClassName}`}
                style={{
                  minWidth: "var(--card-min)",
                  maxWidth: "var(--card-max)",
                }}
              >
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
