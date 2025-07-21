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
import CheckboxControl from "../Controls/CheckboxControl";
const CreateMemberFilterForm = ({
  member = {},
  onCancel = () => {},
  setLoading = () => {},
}) => {
  const [memberData, setMemberData] = useState(member);
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
  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">
            {memberData && memberData.id
              ? `Member filter "${memberData.name}"`
              : "New Member"}
          </h1>
          <p className="page-header-description">
            Edit details for{" "}
            {memberData && memberData.id ? `${memberData.name}` : "new member"}
          </p>
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Save"
            icon={
              <InboxArrowDownIcon
                className={`${
                  !memberData ||
                  !memberData?.name ||
                  memberData?.name?.length === 0
                    ? "button-icon-disabled"
                    : "button-icon"
                }`}
              />
            }
            type="primary"
            onAction={() => handleMemberSave()}
            disabled={
              !memberData || !memberData?.name || memberData?.name?.length === 0
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
          <AnnotatedSection title="Member name" description="">
            <InputFieldControl
              value={memberData?.name || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleMemberChange("name", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          <AnnotatedSection title="Member email" description="">
            <InputFieldControl
              value={memberData?.email || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleMemberChange("email", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          <AnnotatedSection title="Phone" description="">
            <InputFieldControl
              value={memberData?.phone || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleMemberChange("phone", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          <AnnotatedSection title="Description" description="">
            <InputFieldControl
              value={memberData?.description || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleMemberChange("description", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          {/* {!member && (
            <AnnotatedSection title="Description" description="">
              <CheckboxControl
                label={"Check to send email"}
                checked={memberData?.send_welcome_email || false}
                onChange={(val) =>
                  handleMemberChange("send_welcome_email", val.target.checked)
                }
              />
            </AnnotatedSection>
          )} */}
          {member && member.id && (
            <AnnotatedSection title="Order" description="">
              <InputFieldControl
                value={memberData?.priority}
                fullWidth={false}
                type="text"
                align="right"
                disabled={false}
                maxLength={30}
                onChange={(val) => handleMemberChange("priority", val)}
                width={"100%"}
              />
            </AnnotatedSection>
          )}
        </BlockStack>
      </PageContent>
    </Fragment>
  );
};
export default CreateMemberFilterForm;
