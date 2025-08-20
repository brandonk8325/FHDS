import { Table, TableBody, TableRow, TableCell } from "flowbite-react";

type ComTableProps = {
  names?: string[];
  rows?: number;
  cols?: number;
  cellClassName?: string;
  colGapClassName?: string; // controls spacing between columns
};

export function ComTable({
  names = [],
  rows = 1,
  cols = 1,
  cellClassName = "whitespace-nowrap font-medium",
  colGapClassName = "gap-x-8", // default uniform gap
}: ComTableProps) {
  const r = Math.max(1, Math.floor(rows));
  const c = Math.max(1, Math.floor(cols));
  const total = r * c;

  // Clean + size the data to exactly rows*cols
  const cleaned = (names ?? []).map((n) =>
    typeof n === "string" ? n.trim() : String(n ?? "")
  );
  const sized = [
    ...cleaned.slice(0, total),
    ...Array(Math.max(0, total - cleaned.length)).fill("\u00A0"), // non-breaking space
  ];

  // Chunk into rows
  const grid = Array.from({ length: r }, (_, i) =>
    sized.slice(i * c, (i + 1) * c)
  );

  return (
    <div className="overflow-x-auto bg-[#f6eee3]">
      <Table className="border-1 border-black">
        <TableBody className="divide-y">
          {grid.map((row, rowIdx) => (
            <TableRow key={`row-${rowIdx}`} className="text-black">
              <div
                className={`grid ${colGapClassName}`}
                style={{ gridTemplateColumns: `repeat(${c}, minmax(0,1fr))` }}
              >
                {row.map((name, colIdx) => (
                  <TableCell
                    key={`cell-${rowIdx}-${colIdx}`}
                    className={cellClassName}
                  >
                    {name}
                  </TableCell>
                ))}
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
