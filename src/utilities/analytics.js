import axios from "axios";

const headers = () => ({ "X-WP-Nonce": servvData.nonce });

export const getAnalyticsRevenue = async (from = null, to = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/revenue";
  if (from && to) url += `?from=${from}&to=${to}`;
  const response = await axios.get(url, { headers: headers() });
  return response.data;
};

export const getAnalyticsRegistrants = async (year = null, month = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/registrants";
  if (year != null && month != null) url += `?date_year=${year}&date_month=${month}`;
  const response = await axios.get(url, { headers: headers() });
  return response.data;
};

export const getAnalyticsTypes = async (year = null, month = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/types";
  if (year != null && month != null) url += `?date_year=${year}&date_month=${month}`;
  const response = await axios.get(url, { headers: headers() });
  return response.data;
};

export const getAnalyticsEvents = async () => {
  const [happened, cancelled, active] = await Promise.all([
    axios.get("/wp-json/servv-plugin/v1/analytics/happened", { headers: headers() }),
    axios.get("/wp-json/servv-plugin/v1/analytics/cancelled", { headers: headers() }),
    axios.get("/wp-json/servv-plugin/v1/analytics/active", { headers: headers() }),
  ]);
  return {
    happened: happened.data,
    cancelled: cancelled.data,
    active: active.data,
  };
};
