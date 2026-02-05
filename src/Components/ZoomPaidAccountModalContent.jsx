import React, { Fragment } from "react";

import BlockStack from "./Containers/BlockStack";
import CheckboxControl from "./Controls/CheckboxControl";
import StepBlock from "./StepBlock";

const ZoomPaidAccountModalContent = ({
  zoomConfirmed,
  setZoomConfirmed,
  handlerOnZoomAccountAdd,
  closeModal,
}) => {
  return (
    <Fragment>
      {/* ===================================================== */}
      {/* ✅ ZOOM REQUIREMENT NOTE */}
      {/* ===================================================== */}
      <StepBlock
      // title="Connect Zoom"
      // description="Zoom integration requires a paid Zoom account."
      >
        <BlockStack gap={5}>
          {/* ✅ Info Card */}
          <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">
              Paid Zoom account required
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              To connect Zoom, you must use a{" "}
              <span className="font-medium text-gray-900">
                paid Zoom account
              </span>
              . Free Zoom accounts are not supported for this integration.
            </p>
          </div>

          {/* ✅ Confirmation Checkbox */}
          <CheckboxControl
            label={
              <span className="text-sm font-medium text-gray-800">
                I understand and confirm that I am using a paid Zoom account
              </span>
            }
            checked={zoomConfirmed}
            onChange={() => setZoomConfirmed(!zoomConfirmed)}
          />

          {/* ✅ Actions */}
          <div className="flex justify-end gap-3 pt-2">
            {/* Cancel */}
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Connect */}
            <button
              type="button"
              disabled={!zoomConfirmed}
              onClick={() => {
                handlerOnZoomAccountAdd();
                closeModal();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                zoomConfirmed
                  ? "bg-[#7a5af8] text-white hover:bg-[#6845f5]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Connect Zoom
            </button>
          </div>
        </BlockStack>
      </StepBlock>
    </Fragment>
  );
};

export default ZoomPaidAccountModalContent;
