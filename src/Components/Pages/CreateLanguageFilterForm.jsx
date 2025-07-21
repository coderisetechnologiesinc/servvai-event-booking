import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import { useState, Fragment } from "react";
import axios from "axios";
import PageWrapper from "./PageWrapper";
const CreateLanguageFilterForm = ({
  language = {},
  onCancel = () => {},
  setLoading = () => {},
}) => {
  const [languageData, setLanguageData] = useState(language);
  const handleLanguageChange = (field, value) => {
    let newLanguageData = { ...languageData };
    newLanguageData[field] = value;

    setLanguageData(newLanguageData);
  };
  const handleLanguageSave = async () => {
    if (languageData.name && languageData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/languages";
      if (language && language.id) {
        delete languageData.id;
        delete languageData.shop_id;
        delete languageData.created_datetime;
        url += `/${language.id}`;
      }
      await axios({
        method: language && language.id ? "PATCH" : "POST",
        url: url,
        headers: { "X-WP-Nonce": servvData.nonce },
        data: {
          ...languageData,
          priority: isNaN(Number.parseInt(languageData.priority))
            ? 0
            : Number.parseInt(languageData.priority),
        },
      });
      onCancel();
    }
  };
  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">
            {languageData && languageData.id
              ? `Language filter "${languageData.name}"`
              : "New Language"}
          </h1>
          <p className="page-header-description">
            Edit details for{" "}
            {languageData && languageData.id
              ? `${languageData.name}`
              : "new language"}
          </p>
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Save"
            icon={
              <InboxArrowDownIcon
                className={`${
                  !languageData ||
                  !languageData?.name ||
                  languageData?.name?.length === 0
                    ? "button-icon-disabled"
                    : "button-icon"
                }`}
              />
            }
            type="primary"
            onAction={() => handleLanguageSave()}
            disabled={
              !languageData ||
              !languageData?.name ||
              languageData?.name?.length === 0
            }
          />
          <PageActionButton
            text="Cancel"
            type="secondary"
            onAction={() => onCancel()}
          />
        </InlineStack>
      </PageHeader>
      <PageContent>
        <BlockStack gap={8} cardsLayout={true}>
          <AnnotatedSection title="Language name" description="">
            <InputFieldControl
              value={languageData?.name || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleLanguageChange("name", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          {languageData && languageData.id && (
            <AnnotatedSection title="Order" description="">
              <InputFieldControl
                value={languageData.priority}
                fullWidth={false}
                type="text"
                align="right"
                disabled={false}
                maxLength={30}
                onChange={(val) => handleLanguageChange("priority", val)}
                width={"100%"}
              />
            </AnnotatedSection>
          )}
        </BlockStack>
      </PageContent>
    </Fragment>
  );
};
export default CreateLanguageFilterForm;
