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
  /** Wrapper around each card (e.g., 'w-fit' or 'w-full') */
  itemClassName?: string;
  /** 'about' uses compact centered columns; others use equal-width columns */
  type?: string;
};

export const CardsGrid: FC<CardsGridProps> = ({
  cards = [],
  perRow = 5,
  className = "",
  gapClassName = "gap-8",
  itemClassName, // we’ll set a sensible default per type below
  type = "about",
}) => {
  const t = (type || "").toLowerCase();
  const isAboutLike = t === "about" || t === "chairs" || t === "team";

  const cols = Number.isFinite(perRow) ? Math.max(1, Math.floor(perRow)) : 1;
  const mdCols = Math.min(cols, cards.length || cols);

  // Defaults per layout type
  const itemWrapper =
    itemClassName ?? (isAboutLike ? "w-fit" : "w-full");

  // Grid template per layout type
  const templateAtMd = isAboutLike
    ? "md:[grid-template-columns:repeat(var(--md-cols),max-content)]"
    : "md:[grid-template-columns:repeat(var(--md-cols),minmax(0,1fr))]";

  // Horizontal alignment per layout type
  const justifyRule = isAboutLike ? "justify-center" : "justify-stretch";

  return (
    <div className={`py-10 w-full ${className}`}>
      <div
        className={[
          "grid",
          // mobile: 1-col for non-about, 2-col for about (nice compact look)
          isAboutLike ? "grid-cols-2" : "grid-cols-1",
          templateAtMd,
          justifyRule,
          "items-start",
          gapClassName,
        ].join(" ")}
        style={{ ["--md-cols" as any]: mdCols }}
      >
        {cards.map((c, i) => (
          <div key={`${c.name}-${i}`} className={itemWrapper}>
            {isAboutLike ? (
              <AboutCard
                name={c.name}
                image={c.image}
                company={c.company}
                descriptor={c.descriptor}
              />
            ) : (
              <EventCard title={c.name} description={c.descriptor} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
