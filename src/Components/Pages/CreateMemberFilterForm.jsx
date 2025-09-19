import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import MobileFooterActions from "../Controls/MobileFooterActions";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import { useState, Fragment, useEffect } from "react";
import axios from "axios";

const CreateMemberFilterForm = ({
  member = {},
  onCancel = () => {},
  setLoading = () => {},
}) => {
  const [memberData, setMemberData] = useState(member);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMemberChange = (field, value) => {
    let newMemberData = { ...memberData };
    newMemberData[field] = value;
    setMemberData(newMemberData);
  };

  const handleMemberSave = async () => {
    if (memberData.name && memberData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/members";
      if (member && member.id) {
        url += `/${member.id}`;
        delete memberData.id;
        delete memberData.shop_id;
        delete memberData.created_datetime;
      }
      await axios({
        method: member && member.id ? "PATCH" : "POST",
        url: url,
        headers: { "X-WP-Nonce": servvData.nonce },
        data: {
          ...memberData,
          priority: isNaN(Number.parseInt(memberData.priority))
            ? 0
            : Number.parseInt(memberData.priority),
        },
      });
      onCancel();
    }
  };

  const isFormValid = memberData?.name && memberData.name.length > 0;

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1
            className="text-display-sm font-bold mt-6 text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {memberData && memberData.id
              ? `Member Filter "${memberData.name}"`
              : "New Member"}
          </h1>
          <p
            className="page-header-description text-gray-600 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t("Edit Details for")}{" "}
            {memberData && memberData.id ? `${memberData.name}` : "New Member"}
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
              onAction={handleMemberSave}
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
            {/* Member Name - Wider on desktop */}
            <AnnotatedSection
              title="Member Name"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={memberData?.name || ""}
                fullWidth={false}
                type="text"
                align="left"
                disabled={false}
                maxLength={100}
                onChange={(val) => handleMemberChange("name", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Member Email - Wider on desktop */}
            <AnnotatedSection
              title="Member Email"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={memberData?.email || ""}
                fullWidth={false}
                type="email"
                align="left"
                disabled={false}
                maxLength={100}
                onChange={(val) => handleMemberChange("email", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Phone - Wider on desktop */}
            <AnnotatedSection
              title="Phone"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={memberData?.phone || ""}
                fullWidth={false}
                type="tel"
                align="left"
                disabled={false}
                maxLength={50}
                onChange={(val) => handleMemberChange("phone", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Description - Wider on desktop */}
            <AnnotatedSection
              title="Description"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={memberData?.description || ""}
                fullWidth={false}
                type="text"
                align="left"
                disabled={false}
                maxLength={200}
                onChange={(val) => handleMemberChange("description", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Order field - only show if editing existing member */}
            {member && member.id && (
              <AnnotatedSection
                title="Order"
                description=""
                titleClassName="font-semibold text-gray-900"
                className="items-start"
              >
                <InputFieldControl
                  value={memberData?.priority || ""}
                  fullWidth={false}
                  type="text"
                  align="left"
                  disabled={false}
                  maxLength={10}
                  onChange={(val) => handleMemberChange("priority", val)}
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
          onSave={handleMemberSave}
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

export default CreateMemberFilterForm;
