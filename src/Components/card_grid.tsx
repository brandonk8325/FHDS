import type { FC, ReactNode } from "react";
import { AboutCard } from "./about_card";
import { EventCard } from "./events_card";

type CardData = {
  name: string;
  image?: string;
  company?: string;
  descriptor?: ReactNode;
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
  type?: string
};

export const CardsGrid: FC<CardsGridProps> = ({
  cards = [],
  perRow = 5,
  className = "",
  gapClassName = "gap-6",
  itemClassName = "w-fit",
  type = "About"
}) => {
  const cols = Number.isFinite(perRow) ? Math.max(1, Math.floor(perRow)) : 1;
  const mdCols = Math.min(cols, cards.length || cols);

  return (
    <div className={`py-10 w-full px-10 ${className}`}>
      <div
        className={`grid ${type =="about" ? "grid-cols-2" : "grid-cols-1"} ${gapClassName} justify-center md:[grid-template-columns:var(--md-cols)]`}
        style={{ ["--md-cols" as any]: `repeat(${mdCols}, max-content)` }}
      >
        {cards.map((c, i) => (
          <div key={`${c.name}-${i}`} className={itemClassName}>
            {type=="about" ? <AboutCard
              name={c.name}
              image={c.image}
              company={c.company}
              descriptor={c.descriptor}
            />
            : <EventCard title = {c.name} description = {c.descriptor}/>}
          </div>
        ))}
      </div>
    </div>
  );
};
