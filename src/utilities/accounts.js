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

export const getCalendarAccount = async () => {
  return wpGet("calendar/account");
};
