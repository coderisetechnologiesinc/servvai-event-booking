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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 flex flex-col gap-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{text}</p>
        <p className="text-gray-600 font-semibold">{item && item}</p>
        <div className="flex flex-row justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
