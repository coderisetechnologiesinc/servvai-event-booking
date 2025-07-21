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
        )}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`,
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
            Video Conferencing
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
          <p className="page-header-description">
            Sync your event schedules effortlessly with Google Calendar or
            Outlook to keep everyone informed.
          </p>
        </BlockStack>
      </PageHeader>
      <PageContent>
        <InlineStack gap={8} cardsLayout={true}>
          <Card padding={0} maxWidth="65%" align="center">
            <div
              className="service-image"
              style={{
                background: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              }}
            >
              {account && (
                <div className="connected-account bg-gradient-to-b from-transparent to-black/40">
                  <span>Account</span>
                  <Badge text={badge()} justify={"start"} color="gray" />
                </div>
              )}
            </div>
            <div className="card-content">
              <h2 className="card-section-heading">Zoom</h2>
              <p className="section-description">
                Sync and manage your Google Calendar account and settings.
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
                  Connect
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
                  Disconnect
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
                  Manage
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
