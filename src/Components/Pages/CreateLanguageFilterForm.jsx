import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import MobileFooterActions from "../Controls/MobileFooterActions";

import { useState, Fragment, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { useServvStore } from "../../store/useServvStore";

const CreateLanguageFilterForm = ({ setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer
  );

  // Find existing language if editing
  const existingLanguage =
    id && filtersList.languages
      ? filtersList.languages.find((l) => String(l.id) === String(id))
      : null;

  const [languageData, setLanguageData] = useState(existingLanguage || {});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onCancel = () => navigate(-1); // Return to previous page

  const handleLanguageChange = (field, value) => {
    setLanguageData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLanguageSave = async () => {
    if (!languageData?.name) return;

    setLoading(true);

    let url = "/wp-json/servv-plugin/v1/filters/languages";
    let method = "POST";

    // Editing existing
    if (existingLanguage) {
      url += `/${existingLanguage.id}`;
      method = "PATCH";
    }

    await axios({
      method,
      url,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...languageData,
        priority: Number.parseInt(languageData.priority) || 0,
      },
    });
    await syncSingleFilterFromServer("languages");
    navigate(-1);
  };

  const isFormValid = languageData?.name?.length > 0;

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1
            className="text-display-sm mt-6 text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {existingLanguage
              ? `Language Filter "${existingLanguage.name}"`
              : "New Language"}
          </h1>

          <p
            className="page-header-description text-gray-600 text-base leading-relaxed mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {existingLanguage
              ? `Edit details for ${existingLanguage.name}`
              : "Create a new language filter"}
          </p>
        </BlockStack>

        {/* Desktop Actions */}
        {!isMobile && (
          <InlineStack gap={2} align="right" className="hidden md:flex">
            <PageActionButton
              text="Cancel"
              type="secondary"
              onAction={onCancel}
            />
            <PageActionButton
              text="Save"
              type="primary"
              onAction={handleLanguageSave}
              disabled={!isFormValid}
            />
          </InlineStack>
        )}
      </PageHeader>

      <PageContent>
        <div className="pb-20 md:pb-0">
          <BlockStack gap={8} cardsLayout>
            {/* Language Name */}
            <AnnotatedSection title="Language Name" className="items-start">
              <InputFieldControl
                value={languageData?.name || ""}
                type="text"
                align="left"
                maxLength={100}
                onChange={(val) => handleLanguageChange("name", val)}
                width={isMobile ? "100%" : "400px"}
              />
            </AnnotatedSection>

            {/* Order (only if editing) */}
            {existingLanguage && (
              <AnnotatedSection title="Order" className="items-start">
                <InputFieldControl
                  value={languageData.priority || ""}
                  type="text"
                  align="left"
                  maxLength={10}
                  onChange={(val) => handleLanguageChange("priority", val)}
                  width={isMobile ? "100%" : "400px"}
                />
              </AnnotatedSection>
            )}
          </BlockStack>
        </div>
      </PageContent>

      {/* Mobile Footer */}
      {isMobile && (
        <MobileFooterActions
          onSave={handleLanguageSave}
          onCancel={onCancel}
          saveText="Save"
          cancelText="Cancel"
          saveDisabled={!isFormValid}
        />
      )}
    </Fragment>
  );
};

export default CreateLanguageFilterForm;
