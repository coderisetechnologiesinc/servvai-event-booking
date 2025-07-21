import * as notificationVars from "@/variables/notifications";
import moment from "../../servicesShared/moment-timezone-extended.js";
import forEach from "lodash.foreach";

export { getCurrencySymbol } from "../../servicesShared/currencies.js";

export const processError = (error, callback = () => {}) => {
  const errorResponseData = {
    open: true,
    status: 1,
    message: notificationVars.COMMON_ERROR_NOTICE,
  };

  if (!error || !error.response) {
    callback();
    return errorResponseData;
  }

  switch (error.response.status) {
    case 402:
      errorResponseData.message =
        error.response.data && error.response.data.description
          ? error.response.data.description
          : `${notificationVars.PLAN_IS_NOT_VALID_ERROR_NOTICE} (Error ${error.response.status})`;
      callback();
      return errorResponseData;
    case 428:
      errorResponseData.message =
        error.response.data && error.response.data.description
          ? error.response.data.description
          : `${notificationVars.ZOOM_ACCOUNT_ERROR_NOTICE} (Error ${error.response.status})`;
      callback();
      return errorResponseData;
    default:
      errorResponseData.message =
        error.response.data && error.response.data.description
          ? error.response.data.description
          : `${notificationVars.COMMON_ERROR_NOTICE} (Error ${error.response.status})`;
      callback();
      return errorResponseData;
  }
};

export const convertFromUtcToLocal = (rawTime, timezone) => {
  return moment(rawTime)
    .tz(timezone)
    .format("YYYY-MM-DDTHH:mm:ss");
};

export const convertEventsDates = (rawEventsList) => {
  const convertedEvents = [];

  forEach(rawEventsList, (event) => {
    convertedEvents.push({
      ...event,
      start_time:
        event.start_time && event.timezone
          ? convertFromUtcToLocal(event.start_time, event.timezone)
          : event.start_time,
    });
  });

  return convertedEvents;
};

export const getDurationDecorated = (rawDuration = "", labelsList = []) => {
  if (rawDuration.length === 0) return "";

  let compiledDuration = "";

  const hoursRaw = Number.parseInt(rawDuration, 10) / 60;
  const hours = Math.trunc(hoursRaw);

  const restMinutes =
    hours > 0 ? Number.parseInt(rawDuration, 10) - hours * 60 : rawDuration;

  if (hours > 0) {
    compiledDuration = `${hours} ${hours > 1 ? labelsList[1] : labelsList[0]} `;
  }
  if (restMinutes > 0) {
    compiledDuration += `${restMinutes} ${
      restMinutes > 1 ? labelsList[3] : labelsList[2]
    }`;
  }

  return compiledDuration;
};

export const truncateString = (str, max = 10) => {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? " ..." : "";

  return array.slice(0, max).join(" ") + ellipsis;
};
export const getDateFormat = (format = "LL") => {
  switch (format) {
    case "us":
      return "ddd, MMM DD, YYYY";
    case "eur":
      return "ddd, DD MMM YYYY";
    case "dd/mm/yyyy":
      return "DD/MM/YYYY";
    case "mm/dd/yyyy":
      return "MM/DD/YYYY";
    case "yyyy/mm/dd":
      return "YYYY/MM/DD";
    default:
      return "ddd, MMM DD, YYYY";
  }
};
export const getItemDateTimeDataFormatted = (
  item = {
    start_time: moment().format("YYYY-MM-DDThh:mm:ssZ"),
    timezone: "America/Denver",
    duration: 60,
  },
  lang,
  format = "LL"
) => {
  const eventTimeWithTimezone = moment.tz(item.start_time, item.timezone);
  eventTimeWithTimezone.locale(lang);

  let lsCountdown = null;

  if (item.is_live_shopping) {
    const currentTime = moment.tz(item.timezone);
    const diff = eventTimeWithTimezone.diff(currentTime, "minutes");

    if (diff >= 0) {
      const hoursTotal = Math.floor(diff / 60);
      const days = Math.floor(hoursTotal / 24);
      const hoursRest = hoursTotal - days * 24;
      const minutes = diff - hoursRest * 60 - days * 24 * 60;

      lsCountdown = {
        hours: hoursRest,
        days,
        minutes,
      };
    }
  }

  return {
    date: eventTimeWithTimezone.format("D"),
    day: eventTimeWithTimezone.format("ddd"),
    month: eventTimeWithTimezone.format("MMM"),
    year: eventTimeWithTimezone.format("YYYY"),
    timeZone: moment.tz(item.timezone).format("zz"),
    timeFull: `${eventTimeWithTimezone.format(
      "h:mma"
    )} - ${eventTimeWithTimezone
      .clone()
      .add(item.duration, "minutes")
      .format("h:mma")} ${moment.tz(item.timezone).format("zz")}`,

    timeFullCard: `${eventTimeWithTimezone.format(
      "YYYY"
    )}, ${eventTimeWithTimezone.format("ddd")} - ${eventTimeWithTimezone.format(
      "D"
    )} ${eventTimeWithTimezone.format("MMM")}, ${moment
      .tz(item.timezone)
      .format("zz")}`,
    timeSimple: eventTimeWithTimezone.format("h:mm"),
    timeSimple24: eventTimeWithTimezone.format("HH:mm"),
    timeDayPart: eventTimeWithTimezone.format("a"),
    dateFull: `${eventTimeWithTimezone.format(format)}`,
    dateFullAsia: `${eventTimeWithTimezone.format(format)}`,
    lsCountdown,
  };
};
