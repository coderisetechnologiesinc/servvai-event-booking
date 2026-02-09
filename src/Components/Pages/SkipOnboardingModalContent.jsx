import StepBlock from "../StepBlock";
import BlockStack from "../Containers/BlockStack";

const SkipOnboardingModalContent = ({ onConfirm, closeModal }) => (
  <StepBlock description="You can skip onboarding now and configure everything later.">
    <BlockStack gap={5}>
      {/* Info */}
      {/* <div className="p-4 border rounded-xl bg-gray-50">
        <p className="text-sm font-semibold text-gray-900">Skip onboarding?</p>
        <p className="text-sm text-gray-600">
          You can always return to settings later from the dashboard.
        </p>
      </div> */}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
          onClick={onConfirm}
        >
          Skip onboarding
        </button>
      </div>
    </BlockStack>
  </StepBlock>
);

export default SkipOnboardingModalContent;
