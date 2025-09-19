import ButtonGroup from "../Controls/ButtonGroup";
import { Fragment, useEffect, useState } from "react";
const NotificationsSection = ({
  notifications,
  onChange,
  googleCalendar,
  connectedMailAccount,
  calendarAccountFetched,
  mailAccountFetched,
}) => {
  const notificationsOptions = ["On", "Off"];

  // useEffect(() => {
  //     getAccountsInfo()
  // }, [])
  // console.log(notifications);

  return (
    <Fragment>
      <div className="section-container border-b">
        <div className="section-heading">{t("Notifications")}</div>
        {/* <ButtonGroup
          title="Calendar notifications"
          buttons={notificationsOptions}
          disabled={
            !calendarAccountFetched ||
            (calendarAccountFetched && !googleCalendar)
          }
          active={
            notifications.google_calendar && googleCalendar
              ? notificationsOptions[0]
              : notificationsOptions[1]
          }
          onChange={() => {
            onChange("google_calendar", !notifications.google_calendar);
          }}
        /> */}
        <ButtonGroup
          title="Email notifications"
          buttons={notificationsOptions}
          active={
            !notifications.disable_emails && connectedMailAccount
              ? notificationsOptions[0]
              : notificationsOptions[1]
          }
          disabled={
            !mailAccountFetched || (mailAccountFetched && !connectedMailAccount)
          }
          onChange={() => {
            onChange("disable_emails", !notifications.disable_emails);
          }}
        />
      </div>
    </Fragment>
  );
};
export default NotificationsSection;
