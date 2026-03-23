import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="w-full">
      <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
        <span {...listeners} className="cursor-grab text-gray-400 select-none">
          ☰
        </span>
        {children}
      </div>
    </div>
  );
};

export default SortableItem;
