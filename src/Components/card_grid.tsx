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
  type?: string;
};

export const CardsGrid: FC<CardsGridProps> = ({
  cards = [],
  perRow = 5,
  className = "",
  gapClassName = "gap-6",
  itemClassName = "w-full",
  type = "About",
}) => {
  const cols = Number.isFinite(perRow) ? Math.max(1, Math.floor(perRow)) : 1;
  const mdCols = Math.min(cols, cards.length || cols);

  return (
    <div className={`py-10 w-full px-10 ${className}`}>
      <div
        className={[
          "grid",
          type === "about" ? "grid-cols-2" : "grid-cols-1",
          "md:[grid-template-columns:repeat(var(--md-cols),minmax(0,1fr))]",
          "items-stretch",               // stretch items to row height
          gapClassName,
          "justify-center",
        ].join(" ")}
        style={{ ["--md-cols" as any]: mdCols }}
      >
        {cards.map((c, i) => (
          <div key={`${c.name}-${i}`} className={`${itemClassName} h-full`}>
            {type === "about" ? (
              <div className="h-full">
                <AboutCard
                  name={c.name}
                  image={c.image}
                  company={c.company}
                  descriptor={c.descriptor}
                />
              </div>
            ) : (
              <EventCard title={c.name} description={c.descriptor} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
