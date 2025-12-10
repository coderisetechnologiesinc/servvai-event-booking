import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import MobileFooterActions from "../Controls/MobileFooterActions";

import { Fragment, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { useServvStore } from "../../store/useServvStore";

const CreateCategoryFilterForm = ({ setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer
  );
  // Try to find existing category if ID is provided
  const existingCategory =
    id && filtersList.categories
      ? filtersList.categories.find((c) => String(c.id) === String(id))
      : null;

  const [categoryData, setCategoryData] = useState(existingCategory || {});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onCancel = () => navigate(-1); // Go back

  const handleCategroyChange = (field, value) => {
    setCategoryData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategorySave = async () => {
    if (!categoryData?.name) return;

    setLoading(true);

    let url = "/wp-json/servv-plugin/v1/filters/categories";
    let method = "POST";

    // Editing existing
    if (existingCategory) {
      url += `/${existingCategory.id}`;
      method = "PATCH";
    }

    await axios({
      method,
      url,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...categoryData,
        priority: Number.parseInt(categoryData.priority) || 0,
      },
    });
    await syncSingleFilterFromServer("categories");
    navigate(-1);
  };

  const isFormValid = categoryData?.name?.length > 0;

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm mt-6 text-gray-900">
            {existingCategory
              ? `Category Filter "${existingCategory.name}"`
              : "New Category"}
          </h1>

          <p className="page-header-description text-gray-600 mb-6">
            {existingCategory
              ? `Edit details for ${existingCategory.name}`
              : "Create a new category filter"}
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
              onAction={handleCategorySave}
              disabled={!isFormValid}
            />
          </InlineStack>
        )}
      </PageHeader>

      <PageContent>
        <div className="pb-20 md:pb-0">
          <BlockStack gap={8} cardsLayout>
            {/* Category Name */}
            <AnnotatedSection title="Category Name" className="items-start">
              <InputFieldControl
                value={categoryData?.name || ""}
                type="text"
                align="left"
                maxLength={100}
                onChange={(val) => handleCategroyChange("name", val)}
                width={isMobile ? "100%" : "400px"}
              />
            </AnnotatedSection>

            {/* Category Details */}
            <AnnotatedSection title="Category Details" className="items-start">
              <InputFieldControl
                value={categoryData?.details || ""}
                type="text"
                align="left"
                maxLength={200}
                onChange={(val) => handleCategroyChange("details", val)}
                width={isMobile ? "100%" : "400px"}
              />
            </AnnotatedSection>

            {/* Order field - only if editing */}
            {existingCategory && (
              <AnnotatedSection title="Order" className="items-start">
                <InputFieldControl
                  value={categoryData.priority || ""}
                  type="text"
                  align="left"
                  maxLength={10}
                  onChange={(val) => handleCategroyChange("priority", val)}
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
          onSave={handleCategorySave}
          onCancel={onCancel}
          saveText="Save"
          cancelText="Cancel"
          saveDisabled={!isFormValid}
        />
      )}
    </Fragment>
  );
};

export default CreateCategoryFilterForm;
