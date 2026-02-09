// components/Settings/WorkflowSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import InlineStack from "../../Containers/InlineStack";
import N8NSettings from "../N8NSettings";

const WorkflowSettings = ({
  responsiveBlockStack,
  responsiveInlineStack,
  n8nCurentSettings,
  updateN8NSettings,
}) => {
  return (
    <BlockStack gap={8} className={responsiveBlockStack}>
      <InlineStack gap={4} cardsLayout={true} className={responsiveInlineStack}>
        <N8NSettings
          n8nSettingsData={n8nCurentSettings}
          settingsUpdate={updateN8NSettings}
        />
      </InlineStack>
    </BlockStack>
  );
};

export default WorkflowSettings;
