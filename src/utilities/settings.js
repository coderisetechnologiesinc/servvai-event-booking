import axios from "axios";
import { toast } from "react-toastify";

export const getSettings = async () => {
  try {
    const getSettingsResponse = await axios.get(
      "/wp-json/servv-plugin/v1/shop/info",
      {
        headers: { "X-WP-Nonce": servvData.nonce },
      }
    );
    if (getSettingsResponse && getSettingsResponse.data) {
      return getSettingsResponse.data;
    }
  } catch (e) {
    if (e.code === 401) {
      toast(
        "We're facing an issue loading the settings. Please reactivate the plugin."
      );
    }
    return null;
  }
};
