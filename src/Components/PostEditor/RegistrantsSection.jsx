import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import Registrant from "./Registrant";
import { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import ListPagination from "../Controls/ListPagination";
const RegistrantsSection = ({
  registrants,
  onChange,
  onDelete,
  handleSelectRegistrants,
  selectedRegistrants,
  handleDeleteMultipleRegistrants,
  registrantsPagination,
  onNext,
  onPrev,
  handleResendNotifications,
  handleResendNotificationsToAll,
  disabled = true,
}) => {
  const [firstNameValue, setFirstName] = useState("");
  const [lastNameValue, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const onStatusChange = (id) => {
    let newRegistrants = [...registrants];
    let registrantIndex = newRegistrants.findIndex(
      (reg) => reg.id === id || reg.tempId === id
    );
    let registrant = newRegistrants[registrantIndex];
    // console.log(registrant);
    if (registrant.status) {
      if (registrant.status === "create") registrant.status = "delete";
      onChange(registrant);
    } else {
      onDelete(id);
    }
  };

  const handleRegistrantAdd = () => {
    let newRegistrant = {};
    newRegistrant["tempId"] = uuid();
    newRegistrant["firstName"] = firstNameValue;
    newRegistrant["lastName"] = lastNameValue;
    newRegistrant["email"] = email;
    newRegistrant["status"] = "create";
    let newRegistrants = [...registrants];
    newRegistrants.push(newRegistrant);
    setFirstName("");
    setLastName("");
    setEmail("");
    onChange(newRegistrant);
  };

  const renderRegistrants = () => {
    if (registrants.length > 0)
      return registrants.map((registrant) => {
        return (
          <Registrant
            id={registrant.id || registrant.tempId}
            firstName={registrant.firstName}
            lastName={registrant.lastName}
            email={registrant.email}
            status={registrant.status}
            onStatusChange={onStatusChange}
            onSelect={handleSelectRegistrants}
            selected={
              selectedRegistrants.indexOf(registrant.id) >= 0 ||
              selectedRegistrants.indexOf(registrant.tempId) >= 0
            }
          />
        );
      });
    else return <p>This event doesn't have any registrants yet</p>;
  };

  const isResentdToAllAvailable = () => {
    return registrants.filter((reg) => reg.id).length > 0 && !disabled;
  };
  const isResendAvailable = () => {
    const filtered = registrants.filter((reg) =>
      selectedRegistrants.includes(reg.id)
    );
    return filtered.length > 0 && !disabled;
  };

  return (
    <div className="section-container border-b">
      <div className="section-heading">Registrants</div>
      <fieldset className="input-container-col">
        {!disabled && (
          <BlockStack gap={4}>
            {/* <legend className="section-description">First Name</legend> */}
            <InlineStack gap={1}>
              <div className="input-container-col">
                <label className="section-description">First Name</label>
                <InputFieldControl
                  value={firstNameValue}
                  onChange={(val) => setFirstName(val)}
                  type="text"
                  width={"100%"}
                  align="left"
                />
              </div>
              <div className="input-container-col">
                <label className="section-description">Last Name</label>
                <InputFieldControl
                  value={lastNameValue}
                  onChange={(val) => setLastName(val)}
                  type="text"
                  width={"100%"}
                  align="left"
                />
              </div>
            </InlineStack>
            <div className="input-container-col">
              <label className="section-description">Email</label>
              <InputFieldControl
                value={email}
                onChange={(val) => setEmail(val)}
                type="text"
                width={"100%"}
                align="left"
              />
            </div>
            <InlineStack align="right">
              <button
                className="flex flex-row gap-2 items-center p-2 rounded-lg border-solid border border-gray-300 bg-white text-gray-900 text-sm disabled:text-gray-300 disabled:border-gray-100"
                onClick={() => handleRegistrantAdd()}
                disabled={
                  email.length === 0 ||
                  firstNameValue.length === 0 ||
                  lastNameValue.length === 0
                }
              >
                Add Registrant
              </button>
            </InlineStack>
          </BlockStack>
        )}
      </fieldset>
      <BlockStack gap={2}>{renderRegistrants()}</BlockStack>
      <InlineStack align="right" gap={2}>
        {selectedRegistrants.length > 0 && isResendAvailable() && (
          <Fragment>
            <button
              className="flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50"
              onClick={() =>
                handleDeleteMultipleRegistrants(selectedRegistrants)
              }
              disabled={!isResendAvailable()}
            >
              Delete Registrants
            </button>

            <button
              className="flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50"
              onClick={() => handleResendNotifications(selectedRegistrants)}
              disabled={!isResendAvailable()}
            >
              Resend notifications
            </button>
          </Fragment>
        )}
        {registrants.length > 0 && isResentdToAllAvailable() && (
          <button
            className="flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50"
            onClick={() => handleResendNotificationsToAll()}
            disabled={!isResentdToAllAvailable()}
          >
            Resend notifications to All
          </button>
        )}
      </InlineStack>
      {registrantsPagination && registrantsPagination.pageCount > 1 && (
        <ListPagination
          hasNext={
            registrantsPagination.pageNumber < registrantsPagination.pageCount
          }
          hasPrev={registrantsPagination.pageNumber > 1}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
    </div>
  );
};
export default RegistrantsSection;
