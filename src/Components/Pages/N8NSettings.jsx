import { useState, useEffect, Fragment } from "react";
import AnnotatedSection from "../Containers/AnnotatedSection";
import SelectControl from "../Controls/SelectControl";
import InputFieldControl from "../Controls/InputFieldControl";
import CheckboxControl from "../Controls/CheckboxControl";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import { Block } from "@mui/icons-material";

const N8NSettings = ({ n8nSettingsData = {}, settingsUpdate = () => {} }) => {
  const selectOptions = ["POST", "GET", "PUT", "PATCH", "DELETE"];
  const responsiveBlockStack = "w-full min-w-0 items-center";
  const responsiveInput = "w-full min-w-0";

  // const convertTitle = (title) => {
  //   return title.charAt(0).toUpperCase() + title.split("_").join(" ").slice(1);
  // };
  const handleValueChange = (key, val) => {
    let currValues = n8nSettingsData;

    if (!isNaN(Number.parseInt(val))) {
      currValues[key] = Number.parseInt(val) === 1 ? false : true;
    } else if (typeof val === "boolean") {
      currValues[key] = !currValues[key];
    } else {
      currValues[key] = val;
    }
    settingsUpdate(currValues);
  };
  const renderN8NSettings = () => {
    return (
      <div className="flex flex-col w-full gap-16">
        <div className="flex flex-col gap-4">
          {/* <span className="font-semibold border-b pb-1">Triggers</span> */}
          <AnnotatedSection
            className={`${responsiveInput} items-center`}
            title={"Event Created Trigger"}
            description={
              "Enable this to trigger the workflow whenever a new event is created."
            }
          >
            <CheckboxControl
              checked={
                typeof n8nSettingsData.event_created_active === "boolean"
                  ? n8nSettingsData.event_created_active
                  : Number.parseInt(n8nSettingsData.event_created_active) === 1
              }
              onChange={() =>
                handleValueChange(
                  "event_created_active",
                  n8nSettingsData.event_created_active
                )
              }
            />
          </AnnotatedSection>
          <AnnotatedSection
            className={`${responsiveInput} items-center`}
            title={"New Booking Trigger"}
            description={
              "Enable this to trigger the workflow whenever a new booking is made."
            }
          >
            <CheckboxControl
              checked={
                typeof n8nSettingsData.new_booking_active === "boolean"
                  ? n8nSettingsData.new_booking_active
                  : Number.parseInt(n8nSettingsData.new_booking_active) === 1
              }
              onChange={() =>
                handleValueChange(
                  "new_booking_active",
                  n8nSettingsData.new_booking_active
                )
              }
            />
          </AnnotatedSection>
          <AnnotatedSection
            className={`${responsiveInput} items-center`}
            title={"Canceled Booking Trigger"}
            description={
              "Enable this to trigger the workflow whenever a booking is canceled."
            }
          >
            <CheckboxControl
              checked={
                typeof n8nSettingsData.canceled_booking_active === "boolean"
                  ? n8nSettingsData.canceled_booking_active
                  : Number.parseInt(n8nSettingsData.canceled_booking_active) ===
                    1
              }
              onChange={() =>
                handleValueChange(
                  "canceled_booking_active",
                  n8nSettingsData.canceled_booking_active
                )
              }
            />
          </AnnotatedSection>
        </div>
        <BlockStack gap={4}>
          <span className="font-semibold border-b pb-1 w-full self-end">
            Triggers settings
          </span>
          <AnnotatedSection
            className={responsiveInput}
            title={"Event Created Wrokflow Settings"}
            description={
              "Configure how n8n should handle new event creation. Define the HTTP method, the endpoint URL and the secret used to verify requests."
            }
          >
            <BlockStack gap={2}>
              <div className="flex flex-row w-full items-end gap-2 mb-2">
                <div className="flex-none">
                  <SelectControl
                    options={selectOptions}
                    selected={n8nSettingsData.event_created_method || null}
                    onSelectChange={(newVal) =>
                      handleValueChange("event_created_method", newVal)
                    }
                    style={{ padding: "10px" }}
                  />
                </div>
                <div className="flex-1">
                  <InputFieldControl
                    className={responsiveBlockStack}
                    align="left"
                    value={n8nSettingsData.event_created_url}
                    onChange={(newVal) =>
                      handleValueChange("event_created_url", newVal)
                    }
                    placeholder="Endpoint URL"
                  />
                </div>
              </div>
              <div className="flex-1">
                <InputFieldControl
                  className={responsiveBlockStack}
                  align="left"
                  value={n8nSettingsData.event_created_secret}
                  onChange={(newVal) =>
                    handleValueChange("event_created_secret", newVal)
                  }
                  placeholder="Secret"
                />
              </div>
            </BlockStack>
          </AnnotatedSection>
          <AnnotatedSection
            className={responsiveInput}
            title={"New Booking Workflow Settings"}
            description={
              "Configure how n8n should handle new bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests."
            }
          >
            <BlockStack gap={2}>
              <div className="flex flex-row w-full items-end gap-2 mb-2">
                <div className="flex-none">
                  <SelectControl
                    options={selectOptions}
                    selected={n8nSettingsData.new_booking_method || null}
                    onSelectChange={(newVal) =>
                      handleValueChange("new_booking_method", newVal)
                    }
                    style={{ padding: "10px" }}
                  />
                </div>
                <div className="flex-1">
                  <InputFieldControl
                    className={responsiveBlockStack}
                    align="left"
                    value={n8nSettingsData.new_booking_url}
                    onChange={(newVal) =>
                      handleValueChange("new_booking_url", newVal)
                    }
                    placeholder="Endpoint URL"
                  />
                </div>
              </div>
              <div className="flex-1">
                <InputFieldControl
                  className={responsiveBlockStack}
                  align="left"
                  value={n8nSettingsData.canceled_booking_secret}
                  onChange={(newVal) =>
                    handleValueChange("canceled_booking_secret", newVal)
                  }
                  placeholder="Secret"
                />
              </div>
            </BlockStack>
          </AnnotatedSection>
          <AnnotatedSection
            className={responsiveInput}
            title={"Canceled Booking Workflow Settings"}
            description={
              "Configure how n8n should handle canceled bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests."
            }
          >
            <BlockStack gap={2}>
              <div className="flex flex-row w-full items-end gap-2 mb-2">
                <div className="flex-none">
                  <SelectControl
                    options={selectOptions}
                    selected={n8nSettingsData.canceled_booking_method || null}
                    onSelectChange={(newVal) =>
                      handleValueChange("canceled_booking_method", newVal)
                    }
                    style={{ padding: "10px" }}
                  />
                </div>
                <div className="flex-1">
                  <InputFieldControl
                    className={responsiveBlockStack}
                    align="left"
                    value={n8nSettingsData.canceled_booking_url}
                    onChange={(newVal) =>
                      handleValueChange("canceled_booking_url", newVal)
                    }
                    placeholder="Endpoint URL"
                  />
                </div>
              </div>
              <div className="flex-1">
                <InputFieldControl
                  className={responsiveBlockStack}
                  align="left"
                  value={n8nSettingsData.new_booking_secret}
                  onChange={(newVal) =>
                    handleValueChange("new_booking_secretn", newVal)
                  }
                  placeholder="Secret"
                />
              </div>
            </BlockStack>
          </AnnotatedSection>
        </BlockStack>
      </div>
    );
    // return Object.keys(n8nSettingsData).map((setting) => {
    //   if (
    //     setting === "canceled_booking_active" ||
    //     setting === "event_created_active" ||
    //     setting === "new_booking_active"
    //   ) {
    //     return (
    //       <AnnotatedSection
    //         className={responsiveInput}
    //         title={convertTitle(setting)}
    //       >
    //         <CheckboxControl
    //           checked={
    //             typeof n8nSettingsData[setting] === "boolean"
    //               ? n8nSettingsData[setting]
    //               : Number.parseInt(n8nSettingsData[setting]) === 1
    //           }
    //           onChange={() =>
    //             handleValueChange(setting, n8nSettingsData[setting])
    //           }
    //         />
    //       </AnnotatedSection>
    //     );
    //   } else {
    //     return (
    //       <AnnotatedSection
    //         title={convertTitle(setting)}
    //         className={responsiveBlockStack}
    //       >
    //         <InputFieldControl
    //           className={responsiveBlockStack}
    //           align="left"
    //           value={n8nSettingsData[setting]}
    //           onChange={(newVal) => handleValueChange(setting, newVal)}
    //         />
    //       </AnnotatedSection>
    //     );
    //   }
    // });
  };
  return (
    <Fragment>
      <div className="flex flex-col w-full">{renderN8NSettings()}</div>
    </Fragment>
  );
};
export default N8NSettings;
