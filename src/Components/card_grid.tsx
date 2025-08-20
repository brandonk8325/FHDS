import type { FC } from "react";
import { AboutCard } from "./about_card";

type CardData = {
  name: string;
  image: string;
  company?: string;
  descriptor?: string;
};

type CardsGridProps = {
  cards?: CardData[];
  /** Columns at md and up */
  perRow?: number;
  /** Extra classes for outer wrapper */
  className?: string;
  /** Gap between cards (e.g., 'gap-8') */
  gapClassName?: string;
  /** Wrapper around each card (e.g., 'w-fit') */
  itemClassName?: string;
};

export const CardsGrid: FC<CardsGridProps> = ({
  cards = [],
  perRow = 5,
  className = "",
  gapClassName = "gap-6",
  itemClassName = "w-fit",
}) => {
  const cols = Number.isFinite(perRow) ? Math.max(1, Math.floor(perRow)) : 1;
  // Use min(perRow, cards.length) so wide rows don't look left-aligned with only a few cards
  const mdCols = Math.min(cols, cards.length || cols);

  return (
    <div className={`py-10 w-full px-10 ${className}`}>
      {/* One grid wrapper only.
          - Mobile: 2 cols with gaps
          - md+: template columns = repeat(mdCols, max-content), still with gaps
          We pass the repeat() via a CSS var to avoid Tailwind purging dynamic values. */}
      <div
        className={`grid grid-cols-2 ${gapClassName} justify-center md:[grid-template-columns:var(--md-cols)]`}
        style={{ ["--md-cols" as any]: `repeat(${mdCols}, max-content)` }}
      >
        {cards.map((c, i) => (
          <div key={`${c.name}-${i}`} className={itemClassName}>
            <AboutCard
              name={c.name}
              image={c.image}
              company={c.company}
              descriptor={c.descriptor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
