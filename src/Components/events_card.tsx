import type { ReactNode } from "react";

type EventCardProps = {
  title?: string;
  description: ReactNode;
};

export function EventCard({ title = "title", description }: EventCardProps) {
  return (
    <div className="h-full w-full border-1 border-black rounded-lg bg-darkgreen flex flex-col">
      <div className="p-5 flex flex-col h-full">
        <h5 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
          {title}
        </h5>
        <hr className="pb-5" />
        <div className="font-normal text-neutral-300 flex-1">{description}</div>
      </div>
    </div>
  );
}

