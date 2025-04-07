import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { JSX, ReactNode } from "react";
type Props<TData> = {
  column: Column<TData, unknown>;
  children: ReactNode;
};
function SortComponent<TData>({ column, children }: Props<TData>): JSX.Element {
  return (
    <Button
      className="w-max px-0"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default SortComponent;
