import { Fragment, useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import BreadCrumbs from "../Menu/BreadCrumbs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageWrapper from "./PageWrapper";
const CalendarsPage = ({ onPageSelect }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/calendar/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (
      getCalendarAccountResponse &&
      getCalendarAccountResponse.status === 200
    ) {
      if (getCalendarAccountResponse.data && getCalendarAccountResponse.data.id)
        setAccount(
          getCalendarAccountResponse.data
            ? getCalendarAccountResponse.data
            : null,
        );
    }
    setAccountFetched(true);
  };
  const handleRemoveAccount = async () => {
    const removeCalendarAccount = await axios({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/calendar/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    setAccount(null);
  };
  const handleGetConnectURL = async () => {
    const getAuthURLResponse = await axios(
      "/wp-json/servv-plugin/v1/calendar/url",
      {
        method: "GET",
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        redirect: "manual",
      },
    );

    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(
        `${
          servvData.shopify_app
        }/calendar/connect?wordpress_url=${encodeURIComponent(
          getAuthURLResponse.data.auth_url,
        )}&wordpress_return_url=${encodeURIComponent(
          window.location.origin,
        )}&servv_nonce=${getAuthURLResponse.data.nonce}`,
        "_top",
      );
      // open(getAuthURLResponse.data.auth_url)
    }
  };
  useEffect(() => {
    const CalendarAuthResponse = getCalendarAccount();
  }, []);
  const handleBreadCrumbsClick = () => {};

  const badge = () => (
    <div className="flex flex-row gap-2 items-start">
      <Badge
        background="gray"
        text={account ? "Connected" : "Not connected"}
        icon=""
        align={"left"}
        justify="start"
      />
      <span className="self-center">
        {account
          ? account.google_calendar_email
          : "Please connect your account"}
      </span>
    </div>
  );
  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">{t("Calendars")}</h1>
            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={[
                  {
                    label: "Integrations",
                    action: () => navigate("../integrations"),
                  },
                  { label: "Calendar", action: () => {} },
                ]}
                onBreadCrumbClick={handleBreadCrumbsClick}
              />
            </div>
            {/* <p className="page-header-description">
            {t(
              "Sync your event schedules effortlessly with Google Calendar or\r\n            Outlook to keep everyone informed."
            )}
          </p> */}
          </div>
        </div>
        <PageContent>
          <InlineStack gap={8} cardsLayout={true}>
            <Card padding={0} maxWidth="85%" align="center">
              <div
                className="servv-service-image"
                style={{
                  background: `linear-gradient(to bottom, transparent, #ECE4F6)`,
                }}
              >
                {account && (
                  <div className="connected-account bg-gradient-to-b from-transparent to-black/40">
                    <span>{t("Account")}</span>
                    <Badge text={badge()} justify={"start"} color="gray" />
                  </div>
                )}
              </div>
              <div className="card-content">
                <h2 className="card-section-heading">{t("Google Calendar")}</h2>
                <p className="section-description">
                  {/* {t(
                  "Sync and manage your Google Calendar account and settings."
                )} */}
                  Keep your team and attendees aligned by syncing events
                  directly with Google Calendar
                </p>
                {isAccountFetched && !account && (
                  <a
                    href="#"
                    className="servv-button-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleGetConnectURL();
                    }}
                  >
                    {t("Connect")}
                  </a>
                )}
                {isAccountFetched && account && (
                  <a
                    href="#"
                    className="servv-button-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveAccount();
                    }}
                  >
                    {t("Disconnect")}
                  </a>
                )}
              </div>
            </Card>
          </InlineStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};
export default CalendarsPage;
