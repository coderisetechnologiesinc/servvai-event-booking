import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCommonStore = defineStore("common", () => {
  const settings = ref(null);
  const settingsFetched = ref(null);

  const googleAnalyticsId = computed(() => {
    if (!settings.value) return null;
    try {
      const widgetStyle =
        typeof settings.value.widget_style_settings === "string"
          ? JSON.parse(settings.value.widget_style_settings)
          : settings.value.widget_style_settings;

      return widgetStyle?.google_analytics_id ?? null;
    } catch {
      return null;
    }
  });

  async function fetchWidgetSettings() {
    if (window.__SERVV_STATIC__?.settings) {
      settings.value = window.__SERVV_STATIC__.settings;
      settingsFetched.value = true;
      return;
    }
    const SETTINGS_KEY = "servv_widget_settings";
    const SETTINGS_TTL = 5 * 60 * 1000;
    // if (window.__SERVV_SETTINGS__) {
    //   settings.value = window.__SERVV_SETTINGS__;
    //   settingsFetched.value = true;
    //   return;
    // }
    try {
      // const cached = localStorage.getItem(SETTINGS_KEY)
      // if (cached) {
      //   try {
      //     const { value, expiry } = JSON.parse(cached)
      //     if (expiry && Date.now() < expiry) {
      //       settings.value = value
      //       return
      //     } else {
      //       localStorage.removeItem(SETTINGS_KEY)
      //     }
      //   } catch {
      //     localStorage.removeItem(SETTINGS_KEY)
      //   }
      // }
      const root = document.querySelector("#platformwidget-wrapper");

      if (!root) return;

      const params = new URLSearchParams();
      params.append(
        "security",
        window.__SERVV_STATIC__?.nonce || servvPlatformAjax?.nonce,
      );
      params.append("action", "servv_get_shop_settings");

      const response = await axios.post(servvPlatformAjax?.ajax_url, params);

      if (response.status !== 200) return;

      const settingsData = response.data || {};

      settings.value = settingsData;
      settingsFetched.value = true;

      localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({
          value: settingsData,
          expiry: Date.now() + SETTINGS_TTL,
        }),
      );
    } catch (e) {
      console.log("Widget settings fetch error:", e);
    }
  }

  return {
    settings,
    settingsFetched,
    fetchWidgetSettings,
    googleAnalyticsId,
  };
});
