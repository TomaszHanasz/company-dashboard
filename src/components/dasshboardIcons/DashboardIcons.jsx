import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";

export function SortableItems({ icon }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: icon.id });

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

SortableItems.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
