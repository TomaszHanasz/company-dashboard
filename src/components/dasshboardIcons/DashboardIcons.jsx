import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItems({ icon }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: icon.id, longPressTimeout: 1000 });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="menu-icon">
        <img
          src={icon.picture}
          alt={icon.name}
          className="menu__icon-picture"
        />
        {icon.name}
      </div>
    </div>
  );
}
