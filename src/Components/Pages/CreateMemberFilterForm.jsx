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
import PageWrapper from "./PageWrapper";

const CreateMemberFilterForm = ({ setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );

  // Load existing member if editing
  const existingMember =
    id && filtersList.members
      ? filtersList.members.find((m) => String(m.id) === String(id))
      : null;

  const [memberData, setMemberData] = useState(existingMember || {});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const validateEmail = (email) => {
    if (!email) return ""; // optional field
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ""
      : "Invalid email address";
  };

  const validatePhone = (phone) => {
    if (!phone) return ""; // optional field
    return /^\+?[\d\s\-().]{7,20}$/.test(phone) ? "" : "Invalid phone number";
  };

  const handleMemberChange = (field, value) => {
    setMemberData((prev) => ({ ...prev, [field]: value }));

    if (field === "email") {
      setShowErrors(false);
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (field === "phone") {
      setShowErrors(false);
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const isFormValid =
    memberData?.name?.length > 0 && !errors.email && !errors.phone;
  // Track window size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onCancel = () => navigate(-1);

  // const handleMemberChange = (field, value) => {
  //   setMemberData((prev) => ({ ...prev, [field]: value }));
  // };

  const handleMemberSave = async () => {
    if (!memberData.name || !isFormValid) {
      setShowErrors(true);
      return;
    }

    setLoading(true);

    let url = "/wp-json/servv-plugin/v1/filters/members";
    let method = "POST";

    if (existingMember) {
      url += `/${existingMember.id}`;
      method = "PATCH";
    }

    await axios({
      method,
      url,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...memberData,
        priority: Number.parseInt(memberData.priority) || 0,
      },
    });
    await syncSingleFilterFromServer("members");
    navigate(-1);
  };

  // const isFormValid = memberData?.name?.length > 0;

  return (
    <PageWrapper>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + description */}
          <div className="dashboard-heading">
            <h1 className="dashboard-title text-gray-900">
              {existingMember
                ? `Member Filter "${existingMember.name}"`
                : "New Member"}
            </h1>

            <p className="dashboard-description mt-4 text-gray-600 text-base leading-relaxed">
              {existingMember
                ? `Edit details for ${existingMember.name}`
                : "Create a new member filter"}
            </p>
          </div>

          {/* RIGHT: actions (desktop only) */}
          <div className="dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap">
            <PageActionButton
              text="Cancel"
              type="secondary"
              onAction={onCancel}
            />
            <PageActionButton
              text="Save"
              type="primary"
              disabled={memberData?.name?.length === 0 || !memberData.name}
              onAction={handleMemberSave}
            />
          </div>
        </div>

        <div className="header-line" />

        <PageContent className="py-0 my-0">
          <div className="pb-20 md:pb-0">
            <BlockStack gap={8} cardsLayout>
              {/* Member Name */}
              <AnnotatedSection title="Member Name" className="items-start">
                <InputFieldControl
                  align="left"
                  value={memberData?.name || ""}
                  type="text"
                  maxLength={100}
                  onChange={(val) => handleMemberChange("name", val)}
                  width={isMobile ? "100%" : "400px"}
                />
              </AnnotatedSection>

              {/* Email */}
              <AnnotatedSection title="Member Email" className="items-start">
                <InputFieldControl
                  value={memberData?.email || ""}
                  type="email"
                  align="left"
                  maxLength={100}
                  onChange={(val) => handleMemberChange("email", val)}
                  width={isMobile ? "100%" : "400px"}
                />
                {showErrors && errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </AnnotatedSection>

              {/* Phone */}
              <AnnotatedSection title="Phone" className="items-start">
                <InputFieldControl
                  value={memberData?.phone || ""}
                  type="tel"
                  align="left"
                  maxLength={50}
                  onChange={(val) => handleMemberChange("phone", val)}
                  width={isMobile ? "100%" : "400px"}
                />
                {showErrors && errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </span>
                )}
              </AnnotatedSection>

              {/* Description */}
              <AnnotatedSection title="Description" className="items-start">
                <InputFieldControl
                  value={memberData?.description || ""}
                  type="text"
                  align="left"
                  maxLength={200}
                  onChange={(val) => handleMemberChange("description", val)}
                  width={isMobile ? "100%" : "400px"}
                />
              </AnnotatedSection>

              {/* Order (edit mode only) */}
              {existingMember && (
                <AnnotatedSection title="Order" className="items-start">
                  <InputFieldControl
                    value={memberData.priority || ""}
                    type="text"
                    align="left"
                    maxLength={10}
                    onChange={(val) => handleMemberChange("priority", val)}
                    width={isMobile ? "100%" : "400px"}
                  />
                </AnnotatedSection>
              )}
            </BlockStack>
          </div>
        </PageContent>

        {isMobile && (
          <MobileFooterActions
            onSave={handleMemberSave}
            onCancel={onCancel}
            saveText="Save"
            cancelText="Cancel"
            saveDisabled={!isFormValid}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default CreateMemberFilterForm;
