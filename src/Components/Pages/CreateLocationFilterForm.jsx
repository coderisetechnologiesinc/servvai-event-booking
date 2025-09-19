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
import moment from "moment";
import TimeInputControl from "../Controls/TimeInputControl";

const CreateLocationFilterForm = ({
  location = {},
  onCancel = () => {},
  setLoading = () => {},
  timeFormat = "hh:mm a",
}) => {
  const [locationData, setLocationData] = useState(location);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      const timeParts = locationData.operational_hours.split(" - ");
      if (timeParts.length > 0) {
        return moment(timeParts[0], "hh:mm a");
      }
    }
    return moment("09:00", "HH:mm");
  };

  const getEndTime = () => {
    if (locationData?.operational_hours) {
      const timeParts = locationData.operational_hours.split(" - ");
      if (timeParts.length > 1) {
        return moment(timeParts[1], "hh:mm a");
      }
    }
    return moment("17:00", "HH:mm");
  };

  const handleStartTimeChange = (newVal) => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let endTime;

    if (currentOperationalHours.length > 0) {
      const timeParts = currentOperationalHours.split(" - ");
      endTime =
        timeParts.length > 1
          ? timeParts[1]
          : moment("17:00", "HH:mm").format("hh:mm a");
    } else {
      endTime = moment("17:00", "HH:mm").format("hh:mm a");
    }

    const startTime = moment(newVal).format("hh:mm a");
    const newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };

  const handleEndTimeChange = (newVal) => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let startTime;

    if (currentOperationalHours.length > 0) {
      const timeParts = currentOperationalHours.split(" - ");
      startTime =
        timeParts.length > 0
          ? timeParts[0]
          : moment("09:00", "HH:mm").format("hh:mm a");
    } else {
      startTime = moment("09:00", "HH:mm").format("hh:mm a");
    }

    const endTime = moment(newVal).format("hh:mm a");
    const newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };

  const isFormValid = locationData?.name && locationData.name.length > 0;

  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1
            className="text-display-sm font-bold mt-6 text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {locationData && locationData.id
              ? `Location Filter "${locationData.name}"`
              : "New Location"}
          </h1>
          <p
            className="page-header-description text-gray-600 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t("Edit Details for")}{" "}
            {locationData && locationData.id
              ? `${locationData.name}`
              : "New Location"}
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
              onAction={handleLocationSave}
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
            {/* Location Name - Wider on desktop */}
            <AnnotatedSection
              title="Location Name"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={locationData?.name || ""}
                fullWidth={false}
                type="text"
                align="left"
                maxLength={100}
                onChange={(val) => handleLocationChange("name", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Location Details - Wider on desktop */}
            <AnnotatedSection
              title="Location Details"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <InputFieldControl
                value={locationData?.details || ""}
                fullWidth={false}
                type="text"
                align="left"
                maxLength={200}
                onChange={(val) => handleLocationChange("details", val)}
                width={isMobile ? "100%" : "400px"}
                className={`${
                  isMobile ? "w-full" : "w-96"
                } px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </AnnotatedSection>

            {/* Operational Hours - Aligned with other fields */}
            <AnnotatedSection
              title="Operational Hours"
              description=""
              titleClassName="font-semibold text-gray-900"
              className="items-start"
            >
              <div
                className="operational-hours-container"
                style={{ width: isMobile ? "100%" : "400px" }}
              >
                <div
                  className={`time-inputs-wrapper ${
                    isMobile ? "flex flex-col gap-4" : "flex flex-row gap-4"
                  }`}
                >
                  <div className="flex-1">
                    <TimeInputControl
                      label="Start Time"
                      time={getStartTime()}
                      onChange={handleStartTimeChange}
                      timeFormat={timeFormat}
                      align="start"
                      className="font-medium"
                    />
                  </div>
                  <div className="flex-1">
                    <TimeInputControl
                      label="End Time"
                      time={getEndTime()}
                      onChange={handleEndTimeChange}
                      timeFormat={timeFormat}
                      align="end"
                      className="font-medium"
                    />
                  </div>
                </div>
              </div>
            </AnnotatedSection>

            {/* Order field - only show if editing existing location */}
            {location && location.id && (
              <AnnotatedSection
                title="Order"
                description=""
                titleClassName="font-semibold text-gray-900"
                className="items-start"
              >
                <InputFieldControl
                  value={locationData.priority || ""}
                  fullWidth={false}
                  type="text"
                  align="left"
                  maxLength={10}
                  onChange={(val) => handleLocationChange("priority", val)}
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
          onSave={handleLocationSave}
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

export default CreateLocationFilterForm;
