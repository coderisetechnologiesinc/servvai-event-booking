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
          "/wp-admin/admin.php?page=servvai-event-booking"
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
              <h1 className="text-display-sm font-semibold mt-6">
                Integrations
              </h1>
              <p className="page-header-description">
                Connect and manage your integrations to enhance your event
                management.
              </p>
            </BlockStack>
          </PageHeader>
          <PageContent>
            <BlockStack gap={4}>
              <InlineStack gap={8} cardsLayout={true}>
                <BlockStack
                  gap={2}
                  cardsLayout={true}
                  action={true}
                  onAction={() => handleSelectPage("calendars")}
                >
                  <div
                    className="card-image"
                    style={{
                      background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://www.onecalendar.nl/images/onecalendar.jpg"}")`,
                    }}
                  ></div>
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Calendar Integration
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Calendars</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p className="section-description">
                    Sync your event schedules effortlessly with Google Calendar
                    or Outlook to keep everyone informed.
                  </p>
                  <InlineStack align={"left"}>
                    <Badge
                      text="Google Calendar"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png"
                      type="pill-outline"
                      size="medium"
                    />
                  </InlineStack>
                </BlockStack>

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
                  <div
                    className="card-image"
                    style={{
                      background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`,
                    }}
                  ></div>
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Email Integration
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Emails</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p className="section-description">
                    Automate communications using Google Mail and Microsoft
                    Outlook, ensuring timely updates for your events.
                  </p>
                  <InlineStack align={"left"}>
                    <Badge
                      text="Gmail"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png"
                      type="pill-outline"
                      size="medium"
                    />
                  </InlineStack>
                </BlockStack>
              </InlineStack>

              <InlineStack gap={8} cardsLayout={true}>
                {settings && (
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
                    <div
                      className="card-image"
                      style={{
                        background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`,
                      }}
                    ></div>
                    <a
                      href=""
                      className="servv-button-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Zoom Integration
                    </a>
                    <InlineStack align={"left"} justify={"space"}>
                      <h2 className="card-section-heading">
                        Video Conferencing
                      </h2>
                      <ArrowUpRightIcon className="size-6" />
                    </InlineStack>
                    <p className="section-description">
                      Sync your event schedules effortlessly with Google
                      Calendar or Outlook to keep everyone informed.
                    </p>
                    <InlineStack align={"left"}>
                      <Badge
                        text="Zoom"
                        image="https://cdn.worldvectorlogo.com/logos/zoom-app.svg"
                        type="pill-outline"
                        size="medium"
                        align="center"
                      />
                    </InlineStack>
                  </BlockStack>
                )}
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
                  <div
                    className="card-image"
                    style={{
                      background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`,
                    }}
                  ></div>
                  {/* <div
                    className="card-image"
                    style={{
                      background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`,
                      maxWidth:
                        settings && settings.current_plan
                          ? "calc(33% - 1rem)"
                          : "calc(50% - 1rem)",
                    }}
                  ></div> */}
                  <a
                    href=""
                    className="servv-button-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Stripe integration
                  </a>
                  <InlineStack align={"left"} justify={"space"}>
                    <h2 className="card-section-heading">Stripe</h2>
                    <ArrowUpRightIcon className="size-6" />
                  </InlineStack>
                  <p
                    className="section-description"
                    // style={{
                    //   maxWidth:
                    //     settings && settings.current_plan
                    //       ? "calc(33% - 1rem)"
                    //       : "calc(50% - 1rem)",
                    // }}
                  >
                    Sync your event schedules effortlessly with Google Calendar
                    or Outlook to keep everyone informed.
                  </p>
                  <InlineStack align={"left"}>
                    <Badge
                      text="Stripe"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                      type="pill-outline"
                      size="medium"
                    />
                  </InlineStack>
                </BlockStack>
              </InlineStack>
            </BlockStack>
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
