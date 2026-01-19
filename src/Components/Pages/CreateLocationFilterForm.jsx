import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import MobileFooterActions from "../Controls/MobileFooterActions";
import TimeInputControl from "../Controls/TimeInputControl";
import PageWrapper from "./PageWrapper";
import { Fragment, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { useServvStore } from "../../store/useServvStore";

const CreateLocationFilterForm = ({
  setLoading = () => {},
  timeFormat = "hh:mm a",
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );

  const existingLocation =
    id && filtersList.locations
      ? filtersList.locations.find((l) => String(l.id) === String(id))
      : null;

  const [locationData, setLocationData] = useState(existingLocation || {});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onCancel = () => navigate(-1);

  const handleLocationChange = (field, value) => {
    setLocationData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLocationSave = async () => {
    if (!locationData?.name) return;

    setLoading(true);

    let url = "/wp-json/servv-plugin/v1/filters/locations";
    let method = "POST";

    if (existingLocation) {
      url += `/${existingLocation.id}`;
      method = "PATCH";
    }

    await axios({
      method,
      url,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...locationData,
        priority: Number.parseInt(locationData.priority) || 0,
      },
    });
    await syncSingleFilterFromServer("locations");

    navigate(-1);
  };

  /** ------------------ Operational Hours Helpers ------------------ **/
  const getStartTime = () => {
    if (locationData?.operational_hours) {
      const [start] = locationData.operational_hours.split(" - ");
      return moment(start, timeFormat);
    }
    return moment("09:00", "HH:mm");
  };

  const getEndTime = () => {
    if (locationData?.operational_hours) {
      const parts = locationData.operational_hours.split(" - ");
      return moment(parts[1], timeFormat);
    }
    return moment("17:00", "HH:mm");
  };

  const handleStartTimeChange = (newVal) => {
    const start = moment(newVal).format(timeFormat);
    const end =
      locationData.operational_hours?.split(" - ")[1] ||
      moment("17:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };

  const handleEndTimeChange = (newVal) => {
    const end = moment(newVal).format(timeFormat);
    const start =
      locationData.operational_hours?.split(" - ")[0] ||
      moment("09:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };

  const isFormValid = locationData?.name?.length > 0;

  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + description */}
          <div className="dashboard-heading">
            <h1 className="dashboard-title text-gray-900">
              {existingLocation
                ? `Location Filter "${existingLocation.name}"`
                : "New Location"}
            </h1>

            <p className="dashboard-description text-gray-600 mt-4 text-base leading-relaxed">
              {existingLocation
                ? `Edit details for ${existingLocation.name}`
                : "Create a new location filter"}
            </p>
          </div>

          {/* RIGHT: actions (desktop only) */}
          {!isMobile && (
            <div className="dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap">
              <PageActionButton
                text="Cancel"
                type="secondary"
                onAction={onCancel}
              />

              <PageActionButton
                text="Save"
                type="primary"
                onAction={handleLocationSave}
                disabled={!isFormValid}
              />
            </div>
          )}
        </div>

        <div className="header-line" />

        <PageContent className="py-0 my-0">
          <div className="pb-20 md:pb-0">
            <BlockStack gap={8} cardsLayout>
              {/* Location Name */}
              <AnnotatedSection title="Location Name" className="items-start">
                <InputFieldControl
                  value={locationData?.name || ""}
                  type="text"
                  align="left"
                  maxLength={100}
                  onChange={(val) => handleLocationChange("name", val)}
                  width={isMobile ? "100%" : "400px"}
                />
              </AnnotatedSection>

              {/* Location Details */}
              <AnnotatedSection
                title="Location Details"
                className="items-start"
              >
                <InputFieldControl
                  value={locationData?.details || ""}
                  type="text"
                  align="left"
                  maxLength={200}
                  onChange={(val) => handleLocationChange("details", val)}
                  width={isMobile ? "100%" : "400px"}
                />
              </AnnotatedSection>

              {/* Operational Hours */}
              <AnnotatedSection
                title="Operational Hours"
                className="items-start"
              >
                <div style={{ width: isMobile ? "100%" : "400px" }}>
                  <div
                    className={`${
                      isMobile ? "flex-col" : "flex-row"
                    } flex gap-4`}
                  >
                    <TimeInputControl
                      label="Start Time"
                      time={getStartTime()}
                      onChange={handleStartTimeChange}
                      timeFormat={timeFormat}
                    />
                    <TimeInputControl
                      label="End Time"
                      time={getEndTime()}
                      onChange={handleEndTimeChange}
                      timeFormat={timeFormat}
                    />
                  </div>
                </div>
              </AnnotatedSection>

              {/* Order (edit only) */}
              {existingLocation && (
                <AnnotatedSection title="Order" className="items-start">
                  <InputFieldControl
                    value={locationData.priority || ""}
                    type="text"
                    align="left"
                    maxLength={10}
                    onChange={(val) => handleLocationChange("priority", val)}
                    width={isMobile ? "100%" : "400px"}
                  />
                </AnnotatedSection>
              )}
            </BlockStack>
          </div>
        </PageContent>

        {/* Mobile footer */}
        {isMobile && (
          <MobileFooterActions
            onSave={handleLocationSave}
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

export default CreateLocationFilterForm;
