import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalShell = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-[640px] rounded-2xl shadow-xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalShell;
