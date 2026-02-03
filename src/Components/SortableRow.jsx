import React from "react";
import SortableItem from "./SortableItem";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const SortableRow = ({ id, title, subtitle, onEdit, onRemove }) => {
  return (
    <SortableItem id={id}>
      <div className="flex items-center justify-between gap-3 w-full p-3 border rounded-lg bg-white">
        {/* Text */}
        <div className="flex flex-col truncate flex-1">
          <span className="font-medium text-gray-900 truncate max-w-[300px]">
            {title}
          </span>
          {subtitle && (
            <span className="text-sm text-gray-500 truncate max-w-[300px]">
              {subtitle}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* ✅ Edit */}
          <button
            type="button"
            onClick={onEdit}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <PencilSquareIcon className="w-5 h-5 text-gray-600" />
          </button>

          {/* ✅ Remove */}
          <button
            type="button"
            onClick={onRemove}
            className="p-2 rounded-lg hover:bg-red-50"
          >
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </SortableItem>
  );
};

export default SortableRow;
