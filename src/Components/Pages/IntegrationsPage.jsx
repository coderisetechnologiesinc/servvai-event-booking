import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import CalendarsPage from "./CalendarsPage";
import Badge from "../Containers/Badge";
import { useState, Fragment, useEffect } from "react";
import EmailsPage from "./EmailsPage";
import ZoomPage from "./ZoomPage";
import ZoomSettingsPage from "./ZoomSettingsPage";
import StripeIntegrationsPage from "./StripeIntegrationsPage";
import PageWrapper from "./PageWrapper";
const IntegrationsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  settings,
}) => {
  const [selectedPage, setSelectedPage] = useState("main");
  const [loading, setLoading] = useState(false);
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    if (resetSelectedSubpage) {
      setSelectedPage("main");
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
  useEffect(() => {
    const parsedUrl = new URL(window.location);
    const params = new URLSearchParams(parsedUrl.search);
    const section = params.get("section");
    if (section && section === "stripe-integration") {
      setSelectedPage("stripe");
      window.history.pushState(
        {},
        "",
        window.location.origin +
          `${servvData.adminUrl}?page=servvai-event-booking`
      );
    }
  }, []);
  const isFeatureAvailable = settings?.current_plan?.id === 2;
  // const isFeatureAvailable = true;
  // console.log(isFeatureAvailable);
  return (
    <PageWrapper loading={loading}>
      {selectedPage === "main" && (
        <Fragment>
          <PageHeader>
            <BlockStack>
              <h1 className="text-display-sm mt-6">Integrations</h1>
              <p className="page-header-description">
                Connect and manage your integrations to enhance your event
                management
              </p>
            </BlockStack>
          </PageHeader>
          <PageContent>
            <div className="flex flex-wrap gap-4 max-md:flex-col max-md:flex-nowrap">
              <div
                className={`flex-grow flex-shrink basis-[30%] max-w-[30%] max-md:max-w-full border rounded-xl border-gray-200 shadow-lg p-[1.5rem]`}
              >
                <BlockStack
                  gap={2}
                  cardsLayout={true}
                  action={true}
                  onAction={() => handleSelectPage("calendars")}
                >
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Calendars
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Calendars</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p className="section-description mb-2">
                    Keep your team and attendees aligned by syncing events
                    directly with Google Calendar
                  </p>
                  <InlineStack align={"left"}>
                    <Badge
                      text="Google Calendar"
                      type="pill-outline"
                      size="medium"
                    />
                  </InlineStack>
                </BlockStack>
              </div>
              <div
                className={`flex-grow flex-shrink basis-[30%] max-w-[30%] max-md:max-w-full border rounded-xl border-gray-200 shadow-lg p-[1.5rem] ${
                  !isFeatureAvailable ? "opacity-[0.5]" : ""
                }`}
              >
                <BlockStack
                  gap={2}
                  action={true}
                  cardsLayout={true}
                  onAction={
                    isFeatureAvailable
                      ? () => handleSelectPage("gmail")
                      : () => {}
                  }
                  disabled={!isFeatureAvailable}
                >
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Emails
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Emails</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p className="section-description mb-2">
                    Automate email notifications and reminders through your
                    Gmail account to ensure smooth event communication
                  </p>
                  <InlineStack align={"left"}>
                    <Badge text="Gmail" type="pill-outline" size="medium" />
                  </InlineStack>
                </BlockStack>
              </div>

              {settings && (
                <div
                  className={`flex-grow flex-shrink basis-[30%] max-w-[30%] max-md:max-w-full border rounded-xl border-gray-200 shadow-lg p-[1.5rem] ${
                    !isFeatureAvailable ? "opacity-[0.5]" : ""
                  }`}
                >
                  <BlockStack
                    gap={2}
                    cardsLayout={true}
                    onAction={
                      isFeatureAvailable
                        ? () => handleSelectPage("zoom")
                        : () => {}
                    }
                    disabled={!isFeatureAvailable}
                  >
                    <a
                      href=""
                      className="servv-button-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Video Conferencing
                    </a>
                    <InlineStack align={"left"} justify={"space"}>
                      <h2 className="card-section-heading">
                        Video Conferencing
                      </h2>
                      <ArrowUpRightIcon className="size-6" />
                    </InlineStack>
                    <p className="section-description mb-2">
                      Host and manage Zoom events effortlessly by integrating
                      Zoom
                    </p>
                    <InlineStack align={"left"}>
                      <Badge
                        text="Zoom"
                        type="pill-outline"
                        size="medium"
                        align="center"
                      />
                    </InlineStack>
                  </BlockStack>
                </div>
              )}
              <div
                className={`flex-grow flex-shrink basis-[30%] max-w-[30%] max-md:max-w-full border rounded-xl border-gray-200 shadow-lg p-[1.5rem]  ${
                  !isFeatureAvailable ? "opacity-[0.5]" : ""
                }`}
              >
                <BlockStack
                  action={true}
                  gap={2}
                  cardsLayout={true}
                  disabled={!isFeatureAvailable}
                  onAction={
                    isFeatureAvailable
                      ? () => handleSelectPage("stripe")
                      : () => {}
                  }
                >
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Stripe
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Stripe</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p
                    className="section-description mb-2"
                    // style={{
                    //   maxWidth:
                    //     settings && settings.current_plan
                    //       ? "calc(33% - 1rem)"
                    //       : "calc(50% - 1rem)",
                    // }}
                  >
                    Accept secure payments for your events with Stripe, ensuring
                    a seamless checkout experience for attendees
                  </p>
                  <InlineStack align={"left"}>
                    <Badge text="Stripe" type="pill-outline" size="medium" />
                  </InlineStack>
                </BlockStack>
              </div>
            </div>
          </PageContent>
        </Fragment>
      )}
      {selectedPage === "calendars" && (
        <CalendarsPage onPageSelect={handleSelectPage} />
      )}
      {selectedPage === "gmail" && (
        <EmailsPage onPageSelect={handleSelectPage} />
      )}
      {selectedPage === "stripe" && (
        <StripeIntegrationsPage
          loading={loading}
          setLoading={setLoading}
          onPageSelect={setSelectedPage}
        />
      )}
      {selectedPage === "zoom" && <ZoomPage onPageSelect={setSelectedPage} />}
      {selectedPage === "settings" && (
        <ZoomSettingsPage onPageSelect={handleSelectPage} />
      )}
    </PageWrapper>
  );
};
export default IntegrationsPage;
