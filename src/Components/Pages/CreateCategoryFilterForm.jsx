import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import MobileFooterActions from "../Controls/MobileFooterActions";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const CreateCategoryFilterForm = ({
  category = {},
  onCancel = () => {},
  setLoading = () => {},
}) => {
  const [categoryData, setCategoryData] = useState(category);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategroyChange = (field, value) => {
    let newCategoryData = { ...categoryData };
    newCategoryData[field] = value;
    setCategoryData(newCategoryData);
  };

  const handleCategorySave = async () => {
    if (categoryData?.name?.length === 0) return;
    let url = "/wp-json/servv-plugin/v1/filters/categories";
    if (categoryData.name && categoryData.name.length > 0) {
      setLoading(true);
      if (category && category.id) {
        delete categoryData.id;
        delete categoryData.shop_id;
        delete categoryData.created_datetime;
        url += `/${category.id}`;
      }
      await axios({
        method: category && category.id ? "PATCH" : "POST",
        url: url,
        headers: { "X-WP-Nonce": servvData.nonce },
        data: {
          ...categoryData,
          priority: isNaN(Number.parseInt(categoryData.priority))
            ? 0
            : Number.parseInt(categoryData.priority),
        },
      });
      onCancel();
    }
  };

  const isFormValid = categoryData?.name && categoryData.name.length > 0;

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1
            className="text-display-sm font-bold mt-6 text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {categoryData && categoryData.id
              ? `Category Filter "${categoryData.name}"`
              : "New Category"}
          </h1>
          <p
            className="page-header-description text-gray-600 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t("Edit Details for")}{" "}
            {categoryData && categoryData.id
              ? `${categoryData.name}`
              : "New Category"}
          </p>
        </BlockStack>

        {/* Desktop Actions - Only visible on desktop */}
        {!isMobile && (
          <InlineStack gap={2} align="right" className="hidden md:flex">
            <PageActionButton
              text="Cancel"
              type="secondary"
              onAction={onCancel}
              className="font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <PageActionButton
              text="Save"
              // icon={
              //   <InboxArrowDownIcon
              //     className={`w-5 h-5 ${
              //       !isFormValid ? "text-gray-400" : "text-white"
              //     }`}
              //   />
              // }
              type="primary"
              onAction={handleCategorySave}
              disabled={!isFormValid}
              className="font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </InlineStack>
        )}
      </PageHeader>

      <PageContent>
        <div className="pb-20 md:pb-0">
          <BlockStack gap={8} cardsLayout={true}>
            {/* Category Name - Wider on desktop */}
            <AnnotatedSection
              title="Category Name"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={categoryData?.name || ""}
                fullWidth={false}
                type="text"
                align="left"
                disabled={false}
                maxLength={100}
                onChange={(val) => handleCategroyChange("name", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Category Details - Wider on desktop */}
            <AnnotatedSection
              title="Category Details"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={categoryData?.details || ""}
                fullWidth={false}
                type="text"
                align="left"
                disabled={false}
                maxLength={200}
                onChange={(val) => handleCategroyChange("details", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Order field - only show if editing existing category */}
            {category && category.id && (
              <AnnotatedSection
                title="Order"
                description=""
                titleClassName="font-semibold text-gray-900"
                className="items-start"
              >
                <InputFieldControl
                  value={categoryData.priority || ""}
                  fullWidth={false}
                  type="text"
                  align="left"
                  disabled={false}
                  maxLength={10}
                  onChange={(val) => handleCategroyChange("priority", val)}
                  width={isMobile ? "100%" : "400px"}
                  className={`${
                    isMobile ? "w-full" : "w-96"
                  } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </AnnotatedSection>
            )}
          </BlockStack>
        </div>
      </PageContent>

      {/* Mobile Footer Actions - Only visible on mobile */}
      {isMobile && (
        <MobileFooterActions
          onSave={handleCategorySave}
          onCancel={onCancel}
          saveText="Save"
          cancelText="Cancel"
          saveDisabled={!isFormValid}
          // saveIcon={
          //   <InboxArrowDownIcon
          //     className={`w-5 h-5 ${
          //       !isFormValid ? "text-gray-400" : "text-white"
          //     }`}
          //   />
          // }
          className="font-semibold"
        />
      )}
    </Fragment>
  );
};

export default CreateCategoryFilterForm;
