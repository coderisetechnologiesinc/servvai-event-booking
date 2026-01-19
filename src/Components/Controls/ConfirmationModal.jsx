import { XMarkIcon } from "@heroicons/react/24/outline";

const ConfirmationModal = ({ data }) => {
  const {
    open = false,
    title = "Please confirm your action",
    text = "Delete selected element",
    item = null,
    onAccept = () => {},
    onCancel = () => {},
  } = data;

  if (!open) return null;

  return (
    <div
      className="absolute inset-0 bg-black/40 rounded-[15px] z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg p-4 w-11/12 max-w-[65%] max-h-[90%] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 relative">
          <span className="dashboard-title">{title}</span>

          <div
            className="servv-create-form-close"
            onClick={onCancel}
            aria-label="Close"
          >
            <XMarkIcon className="servv-create-form-close-icon" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p>{text}</p>
          {item && (
            <p className="font-semibold text-gray-900 break-words">{item}</p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="servv_button servv_button--secondary servv_button--md"
          >
            Cancel
          </button>

          <button
            onClick={onAccept}
            className="servv_button servv_button--primary servv_button--md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
