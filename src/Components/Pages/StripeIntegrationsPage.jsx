import { Fragment, useEffect, useState } from "react";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import {
  getStripeAccount,
  getStripeConnectURL,
  disconnectStripeAccount,
  getDisconnectedStripeAccounts,
  updateStripeSettings,
  getStripeSettings,
} from "../../utilities/stripe";
import SelectControl from "../Controls/SelectControl";
import { currenciesList } from "../../utilities/currencies";
import PageActionButton from "../Controls/PageActionButton";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import he from "he";
const StripeIntegrationsPage = (props) => {
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [connectedAccountsFetched, setConnectedAccountsFetched] =
    useState(false);
  const [connectUrl, setConnectUrl] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const fetchAccount = async () => {
    const account = await getStripeAccount(servvData.nonce);
    if (account && account.id) {
      setAccount(account);
    }
    setAccountFetched(true);
    const settings = await getStripeSettings(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  const handleConnectExistingAccount = async (account_id) => {
    const url = await getStripeConnectURL(servvData.nonce, account_id);
    if (url) {
      const returnURL = encodeURIComponent(window.location.origin);
      const connectURL = encodeURIComponent(url.auth_url);
      props.setLoading(false);

      open(
        `${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${connectURL}&wordpress_return_url=${returnURL}`,
        "_top"
      );
    }
  };

  const connectNewAccount = async () => {
    const connectUrl = await getStripeConnectURL(servvData.nonce);
    const returnURL = encodeURIComponent(window.location.origin);
    const connectURL = encodeURIComponent(connectUrl.auth_url);
    open(
      `${
        servvData.shopify_app
      }/payments/stripe/connect?wordpress_url=${encodeURIComponent(
        connectURL
      )}&wordpress_return_url=${returnURL}`,
      "_top"
    );
  };

  const renderExistingAccounts = () => {
    return (
      <div className="flex flex-col gap-1">
        {connectedAccounts.map((account) => {
          const accountText = (
            <div className="flex flex-row justify-start items-center gap-2">
              {account.account_id && (
                <Badge
                  text={account.account_id}
                  align={"start"}
                  color="success"
                />
              )}
              {account.email && account.email.trim().length > 0 && (
                <Badge text={account.email} align={"start"} color="success" />
              )}
              {account.name && account.name.trim.length > 0 && (
                <Badge text={account.name} align={"start"} color="brand" />
              )}
            </div>
          );
          return (
            <div
              className="w-full flex flex-row gap-2 border border-gray-25 shadow-sm rounded-lg p-2"
              onClick={() => {
                handleConnectExistingAccount(account.account_id);
              }}
            >
              {accountText}
            </div>
          );
        })}
      </div>
    );
  };

  const handleGetConnectURL = async () => {
    props.setLoading(true);
    const existingAccounts = await getDisconnectedStripeAccounts(
      servvData.nonce
    );
    // const url = await getStripeConnectURL(servvData.nonce);
    // setConnectUrl(url.auth_url);
    props.setLoading(false);
    if (existingAccounts.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
    } else {
      props.setLoading(true);
      const url = await getStripeConnectURL(servvData.nonce);
      setConnectUrl(url.auth_url);
      if (url)
        open(
          `${
            servvData.shopify_app
          }/stripe/connect?wordpress_url=${encodeURIComponent(
            url.auth_url
          )}&wordpress_return_url=${encodeURIComponent(
            window.location.origin
          )}`,
          "_top"
        );
    }
  };

  const handleRemoveAccount = async () => {
    props.setLoading(true);
    const res = await disconnectStripeAccount(servvData.nonce);
    if (res === 200) {
      setAccount(null);
    }
    props.setLoading(false);
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  const badge = () => (
    <div className="flex flex-row gap-2 items-center">
      {account.charges_enabled && (
        <Badge
          background="gray"
          text={account ? "Connected" : "Not connected"}
          icon=""
        />
      )}
      {account && !account.charges_enabled && (
        <Badge background="gray" text={"Connection is not completed"} icon="" />
      )}
      <span>{account ? account.email : "Please connect your account"}</span>
    </div>
  );
  const handleSelectChange = (currency) => {
    const newCurrency = currency.split(" - ")[0];
    setSelectedCurrency(newCurrency);
  };
  const currencySelect = () => {
    let currencies = [];
    if (currenciesList) {
      currencies = currenciesList.map((currency) => {
        let sequence = currency.symbol;

        return currency.abbreviation + " - " + he.decode(sequence);
      });
    }

    return (
      <SelectControl
        options={currencies}
        selected={
          currencies.filter(
            (currency) => currency.indexOf(selectedCurrency) >= 0
          )[0]
        }
        onSelectChange={handleSelectChange}
      />
    );
  };
  const handleCurrencySave = async () => {
    if (selectedCurrency) {
      props.setLoading(true);
      await updateStripeSettings(servvData.nonce, selectedCurrency);
      props.setLoading(false);
    }
  };
  return (
    <Fragment>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm mt-6">{t("Stripe")}</h1>
          {/* <p className="page-header-description">
            {t(
              "Sync your event schedules effortlessly with Google Calendar or\r\n            Outlook to keep everyone informed."
            )}
          </p> */}
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Save"
            // icon={<InboxArrowDownIcon className="button-icon" />}
            type="primary"
            onAction={() => handleCurrencySave()}
          />
        </InlineStack>
      </PageHeader>
      <PageContent>
        <InlineStack gap={8} cardsLayout={true}>
          <Card padding={0} maxWidth={"65%"} align="center">
            <div
              className="service-image"
              style={{
                background: `linear-gradient(135deg, #008CDD, #00C6FF)`,
              }}
            >
              {account && (
                <div className="connected-account bg-gradient-to-b from-transparent to-black/40">
                  <span>{t("Account")}</span>
                  <Badge text={badge()} color="gray" justify={"start"} />
                </div>
              )}
              {/* {<div className="connected-account bg-gradient-to-b from-transparent to-black/40">
                <span>Currency</span>
                <Badge text={currencySelect()} color="gray" justify={"start"} />
              </div>} */}
            </div>
            <div className="card-content">
              <h2 className="card-section-heading">{t("Stripe")}</h2>
              <p className="section-description">
                {/* {t(
                  "Sync and manage your Google Calendar account and settings."
                )} */}
                Accept secure payments for your events with Stripe, ensuring a
                seamless checkout experience for attendees
              </p>
              {account && account.charges_enabled && currencySelect()}
              {connectedAccountsFetched && connectedAccounts.length > 0 && (
                <Fragment>
                  <p className="servv-button-link text-gray-700">
                    {t("Connect existing account")}
                  </p>
                  {renderExistingAccounts()}
                </Fragment>
              )}
              {isAccountFetched && !account && (
                <a
                  href="#"
                  className="servv-button-link"
                  onClick={
                    connectedAccountsFetched && connectedAccounts.length > 0
                      ? (e) => {
                          e.preventDefault();
                          connectNewAccount();
                        }
                      : (e) => {
                          e.preventDefault();
                          handleGetConnectURL();
                        }
                  }
                >
                  {connectedAccountsFetched && connectedAccounts.length > 0
                    ? "Connect new account"
                    : "Connect"}
                </a>
              )}
              {isAccountFetched && account && !account.charges_enabled && (
                <a
                  href="#"
                  className="servv-button-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleConnectExistingAccount(account.account_id);
                  }}
                >
                  {t("Resume integration")}
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
              {/* {isAccountFetched && account && (
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
              )} */}
            </div>
          </Card>
        </InlineStack>
      </PageContent>
    </Fragment>
  );
};
export default StripeIntegrationsPage;
