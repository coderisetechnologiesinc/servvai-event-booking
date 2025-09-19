import { Fragment, useEffect, useState } from "react";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import BreadCrumbs from "../Menu/BreadCrumbs";
import axios from "axios";
const ZoomPage = (props) => {
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      if (getZoomAccountResponse.data.email)
        setAccount(getZoomAccountResponse.data);

      setAccountFetched(true);
    }
  };
  const handleRemoveAccount = async () => {
    const removeZoomAccount = await axios({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    setAccount(null);
  };
  const handleGetConnectURL = async () => {
    const getAuthURLResponse = await axios(
      "/wp-json/servv-plugin/v1/zoom/url",
      {
        method: "GET",
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        redirect: "manual",
      }
    );
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(
        `${
          servvData.shopify_app
        }/zoom/connect?wordpress_url=${encodeURIComponent(
          getAuthURLResponse.data.auth_url
        )}&wordpress_return_url=${encodeURIComponent(
          window.location.origin
        )}&servv_nonce=${getAuthURLResponse.data.nonce}`,
        "_top"
      );
      // open(getAuthURLResponse.data.auth_url)
    }
  };
  useEffect(() => {
    getZoomAccount();
  }, []);
  const badge = () => (
    <div className="flex flex-row gap-2 items-center">
      <Badge
        background="gray"
        text={account ? "Connected" : "Not connected"}
        icon=""
      />
      <span>{account ? account.email : "Please connect your account"}</span>
    </div>
  );
  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">
            {t("Video Conferencing")}
          </h1>
          <BreadCrumbs
            breadcrumbs={[
              {
                label: "Integrations",
                action: () => props.onPageSelect("main"),
              },
              { label: "Calendar", action: () => {} },
            ]}
          />
          {/* <p className="page-header-description">
            {t(
              "Sync your event schedules effortlessly with Google Calendar or\r\n            Outlook to keep everyone informed."
            )}
          </p> */}
        </BlockStack>
      </PageHeader>
      <PageContent>
        <InlineStack gap={8} cardsLayout={true}>
          <Card padding={0} maxWidth="65%" align="center">
            <div
              className="service-image"
              style={{
                background: `linear-gradient(135deg, #2D8CFF, #0055FF)`,
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
              <h2 className="card-section-heading">{t("Zoom")}</h2>
              <p className="section-description">
                {t(
                  "Host and manage Zoom events effortlessly by integrating Zoom"
                )}
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
              {isAccountFetched && account && (
                <a
                  href="#"
                  className="servv-button-link"
                  onClick={(e) => {
                    e.preventDefault();
                    props.onPageSelect("settings");
                  }}
                >
                  {t("Manage")}
                </a>
              )}
            </div>
          </Card>
        </InlineStack>
      </PageContent>
    </Fragment>
  );
};
export default ZoomPage;
