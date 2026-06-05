import { Fragment, useEffect, useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import BreadCrumbs from "../Menu/BreadCrumbs";
import Banner from "../Containers/Banner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getGmailAccount as getGmailAccountUtil,
  disconnectGmailAccount,
  getGmailConnectURL,
} from "../../utilities/accounts";
import {
  getSMTPAccount,
  saveSMTPAccount,
  deleteSMTPAccount,
} from "../../utilities/mails";
import { saveSettings } from "../../utilities/settings";
import { useServvStore } from "../../store/useServvStore";
import PageWrapper from "./PageWrapper";
import GmailConnectModalContent from "../Containers/GmailConnectModalContent";
import ModalShell from "../Modals/ModalShell";
import SelectControl from "../Controls/SelectControl";
import PageActionButton from "../Controls/PageActionButton";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import SpinnerLoader from "./SpinnerLoader";
const EmailsPage = ({ onPageSelect = () => {} }) => {
  const settings = useServvStore((s) => s.settings);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [smtpAccount, setSmtpAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const [isSMTPAccountFetched, setSMTPAccountFetched] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [gmailConfirmed, setGmailConfirmed] = useState(false);
  const [defaultProvider, setDefaultProvider] = useState("gmail");
  const [smtpForm, setSmtpForm] = useState({
    email: "",
    host: "",
    port: "",
    username: "",
    password: "",
  });
  const [smtpErrors, setSmtpErrors] = useState({});

  const SMTP_VALIDATORS = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    },
    host: {
      regex:
        /^(([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|localhost)$/,
      message: "Enter a valid hostname (e.g. smtp.example.com)",
    },
    port: {
      regex:
        /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,
      message: "Port must be a number between 1 and 65535",
    },
    username: {
      regex: /\S+/,
      message: "Username is required",
    },
  };

  const validateSmtpField = (field, value) => {
    const validator = SMTP_VALIDATORS[field];
    if (!validator) return null;
    return validator.regex.test(value) ? null : validator.message;
  };

  const validateSmtpForm = () => {
    const errors = {};
    Object.keys(SMTP_VALIDATORS).forEach((field) => {
      const error = validateSmtpField(field, smtpForm[field]);
      if (error) errors[field] = error;
    });
    if (!smtpForm.password) errors.password = "Password is required";
    setSmtpErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSmtpFieldChange = (field, value) => {
    setSmtpForm((f) => ({ ...f, [field]: value }));
    if (smtpErrors[field]) {
      const error = validateSmtpField(field, value);
      setSmtpErrors((e) => ({ ...e, [field]: error }));
    }
  };

  useEffect(() => {
    const provider = settings?.settings?.email_provider;
    if (!provider) return;
    if (provider === "smtp" || provider === "gmail") {
      setDefaultProvider(provider);
    } else {
      setDefaultProvider("gmail");
    }
  }, [settings?.settings?.email_provider]);
  const getGmailAccount = async () => {
    const { data } = await getGmailAccountUtil();
    if (data) {
      if (data.email) setAccount(data);
      setAccountFetched(true);
    }
  };
  const handleRemoveAccount = async () => {
    await disconnectGmailAccount();
    setAccount(null);
  };
  const handleRemoveSMTPAccount = async () => {
    const res = await deleteSMTPAccount();
    if (res && res.status === 200) {
      console.log(res);
      setSmtpAccount(null);
      setSmtpForm({
        email: "",
        host: "",
        port: "",
        username: "",
        password: "",
      });
      setSmtpErrors({});
      toast.success("SMTP account has been successfully disconnected");
    }
  };
  const handleSaveSettings = async () => {
    let newSettings = {
      ...settings,
      settings: { ...settings.settings, email_provider: defaultProvider },
    };
    const res = await saveSettings(newSettings);
    if (res && res?.settings?.email_provider === defaultProvider) {
      toast.success("Default provider saved successfully.");
    }
  };
  const handleSaveSMTPAccount = async () => {
    if (!validateSmtpForm()) return;
    const res = await saveSMTPAccount(smtpForm);
    if (res && res.is_valid) {
      toast.success("SMTP account has been connected successfully");
      setSMTPAccountFetched(true);
      setSmtpAccount(res);
    } else if (res.error) {
      toast.error(
        "Couldn't connect SMTP account. Check your credentials and make sure your provider allows plain password authentication.",
      );
    }
  };
  const handleGetConnectURL = async () => {
    await getGmailConnectURL();
  };
  const handleSyncSMTPAccount = async () => {
    const res = await getSMTPAccount();
    if (res && res.id) {
      setSMTPAccountFetched(true);
      setSmtpAccount(res);
    }
  };
  const getConnectedAccounts = async () => {
    setLoading(true);
    await getGmailAccount();
    await handleSyncSMTPAccount();
    setLoading(false);
  };
  useEffect(() => {
    getConnectedAccounts();
  }, []);
  const badge = () => (
    <div className="flex flex-row gap-2 items-center">
      <Badge
        background="gray"
        text={account ? "Connected" : "Not connected"}
        icon=""
        justify={"start"}
      />
      <span>{account ? account.email : "Please connect your account"}</span>
    </div>
  );
  const smtpBadge = () => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <Badge
          background="gray"
          text={smtpAccount ? "SMTP: Connected" : "SMTP: Not connected"}
          icon=""
          justify={"start"}
        />
        <span style={{ color: "black" }}>
          {smtpAccount ? smtpAccount.email : "Please connect your account"}
        </span>
      </div>
    );
  };

  const gmailBadge = () => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <Badge
          background="gray"
          text={account ? "Gmail: Connected" : "Gmail: Not connected"}
          icon=""
          justify={"start"}
        />
        <span style={{ color: "black" }}>
          {account ? account.email : "Please connect your account"}
        </span>
      </div>
    );
  };

  const handleBreadCrumbsClick = () => {};
  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <div className="flex flex-row justify-between">
              <h1 className="dashboard-title">Email</h1>
              <PageActionButton
                text="Save"
                type="primary"
                // icon={<PlusIcon className="button-icon primary" />}
                onAction={() => handleSaveSettings()}
                disabled={
                  defaultProvider === settings?.settings?.email_provider ||
                  (defaultProvider === "gmail" && !account?.email) ||
                  (defaultProvider === "smtp" && !smtpAccount?.is_valid)
                }
              />
            </div>
            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={[
                  {
                    label: "Integrations",
                    action: () => navigate("../integrations"),
                  },
                  { label: "Emails", action: () => {} },
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
        {smtpAccount && smtpAccount.id && smtpAccount.is_valid === false && (
          <Banner tone="warning" title="Verify account settings">
            <p>
              Your SMTP account needs to be reconnected. Please update your
              credentials below.
            </p>
          </Banner>
        )}
        <div className="pt-8 flex mx-auto">
          <SpinnerLoader isLoading={loading}>
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
                      {/* <span>{t("Email provider")}</span>
                    <NewSelectControl
                      value="smtp"
                      options={[
                        { key: "smtp", label: "SMTP" },
                        { key: "gmail", label: "Gmail" },
                      ]}
                      onChange={() => {}}
                      iconRight={<ChevronDownIcon />}
                      style={{ width: "100%" }}
                    /> */}
                      <span>{t("Account")}</span>
                      <SelectControl
                        value={defaultProvider}
                        options={[
                          { key: "smtp", label: smtpBadge() },
                          { key: "gmail", label: gmailBadge() },
                        ]}
                        onChange={(val) => setDefaultProvider(val)}
                        iconRight={<ChevronDownIcon className="w-6 h-6" />}
                        style={{ width: "100%" }}
                      />
                      {/* <Badge text={badge()} justify={"start"} color="gray" /> */}
                    </div>
                  )}
                </div>
                {defaultProvider === "gmail" ? (
                  <div className="card-content">
                    <h2 className="card-section-heading">{t("Gmail")}</h2>
                    <p className="section-description">
                      Automate email notifications and reminders through your
                      Gmail account to ensure smooth event communication
                    </p>
                    {isAccountFetched && !account && (
                      <a
                        href="#"
                        className="servv-button-link"
                        onClick={(e) => {
                          e.preventDefault();
                          // handleGetConnectURL();
                          setShowModal(true);
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
                ) : (
                  <div className="card-content">
                    <h2 className="card-section-heading">SMTP</h2>
                    <p className="section-description">
                      Automate email notifications and reminders through your
                      SMTP account to ensure smooth event communication
                    </p>
                    {isSMTPAccountFetched && !smtpAccount && (
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-1">
                          <label className="servv-label">{t("Email")}</label>
                          <NewInputFieldControl
                            placeholder="user@example.com"
                            value={smtpForm.email}
                            onChange={(val) =>
                              handleSmtpFieldChange("email", val)
                            }
                            width="100%"
                          />
                          {smtpErrors.email && (
                            <span className="text-red-500 text-xs mt-0.5">
                              {smtpErrors.email}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="servv-label">{t("Host")}</label>
                          <NewInputFieldControl
                            placeholder="smtp.example.com"
                            value={smtpForm.host}
                            onChange={(val) =>
                              handleSmtpFieldChange("host", val)
                            }
                            width="100%"
                          />
                          {smtpErrors.host && (
                            <span className="text-red-500 text-xs mt-0.5">
                              {smtpErrors.host}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="servv-label">{t("Port")}</label>
                          <NewInputFieldControl
                            placeholder="587"
                            value={smtpForm.port}
                            type="number"
                            onChange={(val) =>
                              handleSmtpFieldChange("port", val)
                            }
                            width="100%"
                          />
                          {smtpErrors.port && (
                            <span className="text-red-500 text-xs mt-0.5">
                              {smtpErrors.port}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="servv-label">{t("Username")}</label>
                          <NewInputFieldControl
                            placeholder="user@example.com"
                            value={smtpForm.username}
                            onChange={(val) =>
                              handleSmtpFieldChange("username", val)
                            }
                            width="100%"
                          />
                          {smtpErrors.username && (
                            <span className="text-red-500 text-xs mt-0.5">
                              {smtpErrors.username}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="servv-label">{t("Password")}</label>
                          <NewInputFieldControl
                            placeholder="••••••••"
                            value={smtpForm.password}
                            type="password"
                            onChange={(val) => {
                              setSmtpForm((f) => ({ ...f, password: val }));
                              if (smtpErrors.password) {
                                setSmtpErrors((e) => ({
                                  ...e,
                                  password: val ? null : "Password is required",
                                }));
                              }
                            }}
                            width="100%"
                          />
                          {smtpErrors.password && (
                            <span className="text-red-500 text-xs mt-0.5">
                              {smtpErrors.password}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    {isSMTPAccountFetched && !smtpAccount && (
                      <a
                        href="#"
                        className="servv-button-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSaveSMTPAccount();
                        }}
                      >
                        {t("Connect")}
                      </a>
                    )}
                    {isSMTPAccountFetched && smtpAccount && (
                      <a
                        href="#"
                        className="servv-button-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveSMTPAccount();
                        }}
                      >
                        {t("Disconnect")}
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </InlineStack>
          </SpinnerLoader>
        </div>
        {showModal && (
          <ModalShell title="Connect Gmail" onClose={() => setShowModal(false)}>
            <GmailConnectModalContent
              gmailConfirmed={gmailConfirmed}
              setGmailConfirmed={setGmailConfirmed}
              handlerOnAccountAdd={handleGetConnectURL}
              closeModal={() => setShowModal(false)}
            />
          </ModalShell>
        )}
      </div>
    </PageWrapper>
  );
};
export default EmailsPage;
