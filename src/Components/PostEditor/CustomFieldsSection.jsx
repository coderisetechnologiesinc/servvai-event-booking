import InputFieldControl from "../Controls/InputFieldControl";
const CustomFieldsSection = ({
  customFields,
  onChange,
  meetingType = "offline",
}) => {
  const {
    custom_field_1_name,
    custom_field_1_value,
    custom_field_2_name,
    custom_field_2_value,
  } = customFields;
  const handleCustomFieldsChange = (field, value) => {
    onChange(field, value);
  };
  // console.log(meetingType);
  return (
    <div className="section-container border-b-2 border-gray-200">
      <div className="section-heading">Additional notes</div>
      <p className="text-gray-600 font-regular text-sm">
        Add items to bring or other info for attendees. Included in email
        notifications.
      </p>
      {meetingType === "online" && (
        <div className="input-container-row items-center">
          <div className="input-container-col w-full">
            <div className="section-description">Title</div>
            <InputFieldControl
              value={custom_field_1_name}
              onChange={(val) =>
                handleCustomFieldsChange("custom_field_1_name", val)
              }
              fullWidth={true}
              type="text"
              align="left"
            />
          </div>
          <div className="input-container-col w-full">
            <div className="section-description">Description</div>
            <InputFieldControl
              value={custom_field_1_value}
              onChange={(val) =>
                handleCustomFieldsChange("custom_field_1_value", val)
              }
              fullWidth={true}
              type="text"
              align="left"
            />
          </div>
        </div>
      )}
      <div className="input-container-row items-center">
        <div className="input-container-col w-full">
          <div className="section-description">Title</div>
          <InputFieldControl
            value={custom_field_2_name}
            onChange={(val) =>
              handleCustomFieldsChange("custom_field_2_name", val)
            }
            fullWidth={true}
            type="text"
            align="left"
          />
        </div>
        <div className="input-container-col w-full">
          <div className="section-description">Description</div>
          <InputFieldControl
            value={custom_field_2_value}
            onChange={(val) =>
              handleCustomFieldsChange("custom_field_2_value", val)
            }
            fullWidth={true}
            type="text"
            align="left"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomFieldsSection;
