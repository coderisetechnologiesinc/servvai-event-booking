import axios from "axios";
import { toast } from "react-toastify";

export const getSettings = async () => {
  try {
    const getSettingsResponse = await axios
      .get("/wp-json/servv-plugin/v1/shop/info", {
        headers: { "X-WP-Nonce": servvData.nonce },
      })
      .catch((e) => {
        console.log(e);
        return { error: 401 };
      });

    if (getSettingsResponse && getSettingsResponse.data) {
      return getSettingsResponse.data;
    } else if (getSettingsResponse.status === 401) {
      return { error: 401 };
    }
  } catch (e) {
    console.log("error", e);
    if (e.code === "ERR_BAD_REQUEST" || e.code === "ERR_BAD_RESPONSE") {
      console.log(
        "We're facing an issue loading the settings. Please reactivate the plugin.",
      );
      return { error: 401 };
    }
  }
};
