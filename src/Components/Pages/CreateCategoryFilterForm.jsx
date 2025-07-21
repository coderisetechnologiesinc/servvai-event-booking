import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import { Fragment, useState } from "react";
import axios from "axios";
const CreateCategoryFilterForm = ({
  category = {},
  onCancel = () => {},
  setLoading = () => {},
}) => {
  const [categoryData, setCategoryData] = useState(category);
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
  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">
            {categoryData && categoryData.id
              ? `Category filter "${categoryData.name}"`
              : "New Category"}
          </h1>
          <p className="page-header-description">
            Edit details for{" "}
            {categoryData && categoryData.id
              ? `${categoryData.name}`
              : "new category"}
          </p>
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Save"
            icon={
              <InboxArrowDownIcon
                className={`${
                  !categoryData ||
                  !categoryData?.name ||
                  categoryData?.name?.length === 0
                    ? "button-icon-disabled"
                    : "button-icon"
                }`}
              />
            }
            type="primary"
            onAction={() => handleCategorySave()}
            disabled={
              !categoryData ||
              !categoryData?.name ||
              categoryData?.name?.length === 0
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
          <AnnotatedSection title="Category name" description="">
            <InputFieldControl
              value={categoryData?.name || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleCategroyChange("name", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          <AnnotatedSection title="Category details" description="">
            <InputFieldControl
              value={categoryData?.details || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleCategroyChange("details", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          {category && category.id && (
            <AnnotatedSection title="Order" description="">
              <InputFieldControl
                value={categoryData.priority}
                fullWidth={false}
                type="text"
                align="right"
                disabled={false}
                maxLength={30}
                onChange={(val) => handleCategroyChange("priority", val)}
                width={"100%"}
              />
            </AnnotatedSection>
          )}
        </BlockStack>
      </PageContent>
    </Fragment>
  );
};
export default CreateCategoryFilterForm;
