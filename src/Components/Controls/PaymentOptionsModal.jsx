const PaymentOptionsModal = ({
  open = false,
  title = "Payment option",
  text = "Select a payment option (monthly or annual)",
  price = 0,
  priceAnnual = 0,
  fee = 0,
  onAcceptMonthly = () => {},
  onAcceptAnnual = () => {},
  onCancel = () => {},
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6 flex flex-col gap-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{text}</p>
        <p className="text-gray-600 font-semibold">Price monthly: ${price}</p>
        <p className="text-gray-600 font-semibold">
          Price annual: ${priceAnnual}
        </p>
        <p className="text-gray-600 font-semibold">Application Fee: ${fee} %</p>
        <div className="flex flex-row justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onAcceptMonthly}
            className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-700"
          >
            Monthly
          </button>
          <button
            onClick={onAcceptAnnual}
            className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-700"
          >
            Annual
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsModal;
