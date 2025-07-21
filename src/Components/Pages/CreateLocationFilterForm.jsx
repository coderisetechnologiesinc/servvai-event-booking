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
import moment from "moment";
import TimeInputControl from "../Controls/TimeInputControl";
const CreateLocationFilterForm = ({
  location = {},
  onCancel = () => {},
  setLoading = () => {},
  timeFormat = "hh:mm a",
}) => {
  const [locationData, setLocationData] = useState(location);
  const handleLocationChange = (field, value) => {
    let newLocationData = { ...locationData };

    newLocationData[field] = value;

    setLocationData(newLocationData);
  };
  const handleLocationSave = async () => {
    if (locationData.name && locationData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/locations";
      if (location && location.id) {
        delete locationData.id;
        delete locationData.shop_id;
        delete locationData.created_datetime;

        url += `/${location.id}`;
      }
      await axios({
        method: location && location.id ? "PATCH" : "POST",
        url: url,
        headers: { "X-WP-Nonce": servvData.nonce },
        data: {
          ...locationData,
          priority: isNaN(Number.parseInt(locationData.priority))
            ? 0
            : Number.parseInt(locationData.priority),
        },
      });
      onCancel();
    }
  };
  const getStartTime = () => {
    if (locationData?.operational_hours) {
      return moment(locationData.operational_hours.split(" - ")[0], "hh:mm a");
    }
    return moment();
  };

  const getEndTime = () => {
    if (locationData?.operational_hours) {
      return moment(locationData.operational_hours.split(" - ")[1], "hh:mm a");
    }
    return moment();
  };

  const handleStartTimeChange = (newVal, variant) => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let startTime, endTime;

    if (currentOperationalHours.length > 0) {
      startTime = moment(
        currentOperationalHours.split(" - ")[0],
        "hh:mm a"
      ).format("hh:mm a");
      endTime = moment(
        currentOperationalHours.split(" - ")[1],
        "hh:mm a"
      ).format("hh:mm a");
    } else {
      startTime = moment().format("hh:mm a");
      endTime = moment().format("hh:mm a");
    }

    if (variant === "start") {
      startTime = moment(newVal, "hh:mm a").format("hh:mm a");
    }
    if (variant === "end") {
      endTime = moment(newVal, "hh:mm a").format("hh:mm a");
    }

    console.log("start time", startTime);
    console.log("end time", endTime);
    let newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">
            {" "}
            {locationData && locationData.id
              ? `Location filter "${locationData.name}"`
              : "New Location"}
          </h1>
          <p className="page-header-description">
            Edit details for{" "}
            {locationData && locationData.id
              ? `${locationData.name}`
              : "new location"}
          </p>
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Save"
            icon={
              <InboxArrowDownIcon
                className={`${
                  !locationData ||
                  !locationData?.name ||
                  locationData?.name?.length === 0
                    ? "button-icon-disabled"
                    : "button-icon"
                }`}
              />
            }
            type="primary"
            onAction={() => handleLocationSave()}
            disabled={
              !locationData ||
              !locationData?.name ||
              locationData?.name?.length === 0
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
          <AnnotatedSection title="Location name" description="">
            <InputFieldControl
              value={locationData?.name || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleLocationChange("name", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          <AnnotatedSection title="Location details" description="">
            <InputFieldControl
              value={locationData?.details || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleLocationChange("details", val)}
              width={"100%"}
            />
          </AnnotatedSection>
          {/* <AnnotatedSection
            title="Operational hours"
            description="Edit the name for your filter."
          >
            <InputFieldControl
              value={locationData?.operational_hours || ""}
              fullWidth={false}
              type="text"
              align="right"
              disabled={false}
              maxLength={30}
              onChange={(val) => handleLocationChange("operational_hours", val)}
            />
          </AnnotatedSection> */}
          <AnnotatedSection title="Operational hours" description="">
            <InlineStack gap={2} align="right" justify="space">
              <TimeInputControl
                label="Start time"
                time={getStartTime()}
                onChange={(val) => handleStartTimeChange(val, "start")}
                timeFormat={timeFormat}
                align="start"
              />
              <TimeInputControl
                label="End time"
                time={getEndTime()}
                onChange={(val) => handleStartTimeChange(val, "end")}
                timeFormat={timeFormat}
                align="end"
              />
            </InlineStack>
          </AnnotatedSection>
          {location && location.id && (
            <AnnotatedSection title="Order" description="">
              <InputFieldControl
                value={locationData.priority}
                fullWidth={false}
                type="text"
                align="right"
                disabled={false}
                maxLength={30}
                onChange={(val) => handleLocationChange("priority", val)}
                width={"100%"}
              />
            </AnnotatedSection>
          )}
        </BlockStack>
      </PageContent>
    </Fragment>
  );
};
export default CreateLocationFilterForm;
