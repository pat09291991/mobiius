import { Icon } from "../ui/Icon";
import { Label } from "../ui/label";

export default function LabelIcon({
  label,
  orderBy,
  sortBy,
  updateSortBy,
}: {
  label: string;
  orderBy: string;
  sortBy: string;
  updateSortBy: (value: string, order: "asc" | "desc") => void;
}) {
  return (
    <Label
      className="text-lg md:text-xl flex items-center gap-x-1 cursor-pointer"
      onClick={() => updateSortBy(label, orderBy === "asc" ? "desc" : "asc")}
    >
      <span className="capitalize">{label}</span>
      {sortBy == label && orderBy == "desc" ? (
        <Icon className="material-icons" icon="keyboard_arrow_up" size={25} />
      ) : (
        <Icon className="material-icons" icon="keyboard_arrow_down" size={25} />
      )}
    </Label>
  );
}
