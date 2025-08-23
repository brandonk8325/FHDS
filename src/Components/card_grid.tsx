import type { FC, ReactNode, CSSProperties } from "react";
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
  /** Extra classes for outer wrapper */
  className?: string;
  /** Gap between cards (e.g., 'gap-8') */
  gapClassName?: string;
  /** Fixed card width in rem (constant size across breakpoints) */
  cardWidthRem?: number; // default 18rem ≈ 288px
  /** 'about' uses AboutCard; anything else uses EventCard */
  type?: string;
};

export const CardsGrid: FC<CardsGridProps> = ({
  cards = [],
  className = "",
  gapClassName = "gap-8",
  cardWidthRem = 15,
  type = "about",
}) => {
  const isAboutLike = ["about", "chairs", "team"].includes(
    (type || "").toLowerCase()
  );

  const styleVars: CSSProperties = {
    ["--card-w" as any]: `${cardWidthRem}rem`,
  };

  return (
    <div className={`py-10 w-full ${className}`} style={styleVars}>
      {/* Flex wrap keeps constant-size items centered beautifully */}
      <div className={["flex flex-wrap justify-center", gapClassName].join(" ")}>
        {cards.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="w-[var(--card-w)] min-w-0"
          >
            <div className="w-full">
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
          </div>
        ))}
      </div>
    </div>
  );
};
