import React, { Fragment } from "react";

import BlockStack from "../Containers/BlockStack";
import CheckboxControl from "../Controls/CheckboxControl";
import StepBlock from "../StepBlock";

const GmailConnectModalContent = ({
  gmailConfirmed,
  setGmailConfirmed,
  handlerOnAccountAdd,
  closeModal,
}) => {
  return (
    <Fragment>
      {/* ===================================================== */}
      {/* ✅ IMPORTANT NOTE */}
      {/* ===================================================== */}
      <StepBlock
        // title="Connect Gmail"
        description="Before connecting, please confirm the required permission."
      >
        <BlockStack gap={5}>
          {/* ✅ Info Card */}
          <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">
              Important note
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Please ensure that you select the checkbox for the{" "}
              <span className="font-medium text-gray-900">
                “Send email on your behalf”
              </span>{" "}
              permission when connecting Gmail.
            </p>

            {/* ✅ Screenshot Preview */}
            <img
              alt="Gmail permission"
              src={`${servvData.pluginUrl}/public/assets/images/GmailPermission.png`}
              className="w-full rounded-lg border object-cover"
            />
          </div>

          {/* ✅ Confirmation Checkbox */}
          <CheckboxControl
            label={
              <span className="text-sm font-medium text-gray-800">
                I have read the note above
              </span>
            }
            checked={gmailConfirmed}
            onChange={() => setGmailConfirmed(!gmailConfirmed)}
          />

          {/* ✅ Modal Actions */}
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
              disabled={!gmailConfirmed}
              onClick={() => {
                handlerOnAccountAdd();
                closeModal();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                gmailConfirmed
                  ? "bg-[#7a5af8] text-white hover:bg-[#6845f5]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Connect
            </button>
          </div>
        </BlockStack>
      </StepBlock>
    </Fragment>
  );
};

export default GmailConnectModalContent;
