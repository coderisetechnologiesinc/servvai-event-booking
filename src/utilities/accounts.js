import axios from "axios";

const wpGet = async (endpoint) => {
  try {
    const response = await axios.get(`/wp-json/servv-plugin/v1/${endpoint}`, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (response.status === 200) {
      return { data: response.data, error: null };
    }

    return { data: null, error: "Unexpected status" };
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return { data: null, error: err.message };
  }
};

export const getZoomAccount = async () => {
  return wpGet("zoom/account");
};

export const getStripeAccount = async () => {
  return wpGet("stripe/account");
};

export const getGmailAccount = async () => {
  return wpGet("gmail/account");
};

export const disconnectGmailAccount = async () => {
  const response = await axios.delete("/wp-json/servv-plugin/v1/gmail/account", {
    headers: { "X-WP-Nonce": servvData.nonce },
  });
  return response;
};

export const getGmailConnectURL = async () => {
  const response = await axios.get("/wp-json/servv-plugin/v1/gmail/url", {
    headers: { "X-WP-Nonce": servvData.nonce },
  });
  if (response?.status === 200) {
    open(
      `${servvData.shopify_app}/mail/connect?wordpress_url=${encodeURIComponent(
        response.data.auth_url,
      )}&wordpress_return_url=${encodeURIComponent(
        window.location.origin,
      )}&servv_nonce=${response.data.nonce}`,
      "_top",
    );
  }
};

export const getCalendarAccount = async () => {
  return wpGet("calendar/account");
};

export const getCalendarConnectURL = async () => {
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
  }
};

export const getZoomConnectURL = async () => {
  const getAuthURLResponse = await axios("/wp-json/servv-plugin/v1/zoom/url", {
    method: "GET",
    headers: {
      "X-WP-Nonce": servvData.nonce,
    },
    redirect: "manual",
  });
  if (getAuthURLResponse && getAuthURLResponse.status === 200) {
    open(
      `${servvData.shopify_app}/zoom/connect?wordpress_url=${encodeURIComponent(
        getAuthURLResponse.data.auth_url,
      )}&wordpress_return_url=${encodeURIComponent(
        window.location.origin,
      )}&servv_nonce=${getAuthURLResponse.data.nonce}`,
      "_top",
    );
  }
};
