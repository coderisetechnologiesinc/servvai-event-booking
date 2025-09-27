import PageActionButton from "./PageActionButton";

const MobileFooterActions = ({
  onSave,
  onCancel,
  saveText = "Save",
  cancelText = "Cancel",
  saveDisabled = false,
  saveIcon = null,
  loading = false,
  className = "",
}) => {
  return (
    <>
      {/* Mobile Fixed Footer - Only visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 safe-area-pb">
        <div className="flex gap-3 w-full max-w-md mx-auto">
          <PageActionButton
            text={cancelText}
            type="secondary"
            onAction={onCancel}
            disabled={loading}
            className={`flex-1 min-h-[44px] text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${className}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <PageActionButton
            text={saveText}
            icon={saveIcon}
            type="primary"
            onAction={onSave}
            disabled={saveDisabled || loading}
            className={`flex-1 min-h-[44px] text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-colors duration-200 ${className}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>
      {/* Mobile Content Spacer */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default MobileFooterActions;