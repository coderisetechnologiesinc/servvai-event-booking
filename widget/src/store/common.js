import API from "@/services/api";
import axios from "axios";
import {
  setTranslationMessages,
  setCurrentLanguage,
  detectPageLanguage,
} from "@/services/i18n";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    apiAccessValid: false,
    apiAccessToken: null,
    apiUrl: null,
    openItemsList: "bundles", // bundles | events
    // openItemsList: 'events', // bundles | events
    openDesktopCalendar: true,
    openMobileCalendar: false,
    openMobileFilters: false,
    modalDialogOpen: false,
    windowSize: "desktop",
    eventsPorgressiveView: "grid",
    widgetNotice: {
      open: false,
      status: 0,
      message: "",
    },
    widgetSettings: {
      currency: "",
      show_widget: false,
      shop_auth_page: "",
      widget_page_size: 0,
      show_logo: false,
      hide_time_zone: false,
      widget_style_settings: {
        widget_header: "",
        toggle_wgt_button_text: "",
        event_more_details_label: "",
        currency_format: "sign",
        time_format_24_hours: false,
        show_calendar: true,
        permanently_open_calendar: true,
        ew_available_lists: ["events", "bundles"],
        ew_default_list: "events", // events | bundles
        ew_bundle_events_list_visible: true,
        ew_bundle_events_list_open: true,
        ew_bundle_events_list_title_visible: true,
        // show_filtered_widget: false,
        available_filters: [
          "locations",
          "languages",
          "categories",
          "members",
          "teams",
        ],
        show_event_details_open: false,
        show_widget_title: false,
        show_event_images: true,
        on_page_wgt_container_padding: "",
        show_events_list_separator_badge: true,
        filter_label_locations: "Location",
        filter_label_languages: "Language",
        filter_label_categories: "Category",
        filter_label_members: "Member",
        filter_label_teams: "Team",

        ew_events_list_view: "grid", // list || grid
        ew_events_grid_fluid_mode: true,
        ew_card_description_display_words_limit: 9,
        ew_list_item_description_display_words_limit: 9,
        ew_events_list_page_size_default: 10,
        ew_bundles_list_page_size_default: 10,
        ew_show_language_selector: true,
      },
      widget_view_mode: "",
      timezone: "America/New_York",
    },
    storeDataShopify: {},
    translations: {},
    widgetsDefaultLanguage: "en",
    widgetsCurrentLanguage: "",
    shopParams: {},
    apiHeaders: {
      "SERVV-SHOP-TYPE": "shopify",
      "SERVV-SHOP-DOMAIN": "",
      "SERVV-CUSTOMER-ID": "",
      "SERVV-CUSTOMER-EMAIl": "",
      "SERVV-CUSTOMER-FIRST-NAME": "",
      "SERVV-CUSTOMER-LAST-NAME": "",
      "SERVV-SIGNATURE": "",
    },
    isUserValid: true,
    isStepsCompleted: false,
    currentMonth: { year: null, month: null },
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setApiAccessValid(state, payload) {
      state.apiAccessValid = payload;
    },
    setApiAccessToken(state, payload) {
      state.apiAccessToken = payload;
    },
    setApiUrl(state, payload) {
      state.apiUrl = payload;
    },
    setWidgetNotice(state, payload) {
      state.widgetNotice = payload;
    },
    setWindowSize(state, size) {
      state.windowSize = size >= 768 ? "desktop" : "mobile";
    },
    setStepsComplete(state, payload) {
      state.isStepsCompleted = payload;
    },
    setEventProgressiveView(state, payload) {
      state.eventsPorgressiveView = payload;
    },
    setTranslations(state, payload) {
      setTranslationMessages(payload || {});
      detectPageLanguage((detectedLang) => {
        // moment.locale(detectedLang || state.widgetsDefaultLanguage);
        state.widgetsCurrentLanguage = detectedLang;
        setCurrentLanguage(detectedLang || state.widgetsDefaultLanguage);
      });
      state.translations = payload;
    },
    setWidgetsDefaultLanguage(state, payload) {
      state.widgetsDefaultLanguage = payload;
    },
    setWidgetsCurrentLanguage(state, payload) {
      // setCurrentLanguage(payload || 'en');
      // moment.locale(payload || state.widgetsDefaultLanguage);
      state.widgetsCurrentLanguage = payload;
      setCurrentLanguage(payload);
    },
    setWidgetSettings(state, payload) {
      state.widgetSettings = { ...state.widgetSettings, ...payload };
    },
    setStoreDataShopify(state, payload) {
      state.storeDataShopify = payload;
    },
    setShopParams(state, payload) {
      state.shopParams = payload;
    },
    setApiHeaders(state, payload) {
      state.apiHeaders = payload;
    },
    setModalDialogOpen(state, payload) {
      state.modalDialogOpen = payload;
    },
    setCustomerState(state, payload) {
      state.isUserValid = !!(
        payload.customerId.length > 0 && payload.customerEmail.length > 0
      );
    },
    setMonthDate(state, payload) {
      state.currentMonth.year = payload.year;
      state.currentMonth.month = payload.month;
    },
    setOpenDesktopCalendar(state, payload) {
      state.openDesktopCalendar = payload;
    },
    setOpenMobileCalendar(state, payload) {
      state.openMobileCalendar = payload;
    },
    setOpenMobileFilters(state, payload) {
      state.openMobileFilters = payload;
    },
    setOpenItemsList(state, payload) {
      state.openItemsList = payload;
    },
    setEventsListViewMode(state, payload) {
      let currentView =
        state.widgetSettings.widget_style_settings.ew_events_list_view !==
        "progressive"
          ? payload
          : "progressive";
      state.widgetSettings = {
        ...state.widgetSettings,
        widget_style_settings: {
          ...state.widgetSettings.widget_style_settings,
          ew_events_list_view: currentView,
        },
      };
      if (currentView === "progressive") {
        state.eventsPorgressiveView = payload;
      }
    },
  },
  actions: {
    processShopParams({ commit, state }, params) {
      commit("setShopParams", params);
      // commit('setCustomerState', params);
      commit("setApiHeaders", {
        ...state.apiHeaders,
        "SERVV-SHOP-DOMAIN": params.shopDomain || "",
        "SERVV-CUSTOMER-ID": params.customerId || "",
        "SERVV-CUSTOMER-EMAIl": params.customerEmail || "",
        "SERVV-CUSTOMER-FIRST-NAME": params.customerFirstName || "",
        "SERVV-CUSTOMER-LAST-NAME": params.customerLastName || "",
        "SERVV-SIGNATURE": params.signature || "",
      });
    },
    async fetchWidgetSettings({ commit, dispatch, state }) {
      try {
        const root = document.querySelector("#widget-wrapper");
        let accessToken = null;
        let response = null;
        let params = null;
        // if (root && root.dataset.nonce) {
        //   accessToken = root.dataset.nonce;
        //   commit("setApiAccessToken", accessToken);
        // }
        if (root) {
          params = new URLSearchParams();
          params.append("security", servvAjax.nonce);
          params.append("action", "servv_get_shop_settings");
          response = await axios.post(servvAjax.ajax_url, params);
          if (response.status === 200) {
            response.data = {
              ...response.data,
              show_widget: true,
              widget_view_mode: "plain",
            };
          }
        }

        if (response.status === 200) {
          let parsedWgtViewSettings = JSON.parse(
            response.data.widget_style_settings || "{}"
          );

          if (typeof parsedWgtViewSettings === "string") {
            parsedWgtViewSettings = JSON.parse(parsedWgtViewSettings || "{}");
          }

          const settingsData =
            {
              ...response.data,
              widget_style_settings: {
                ...state.widgetSettings.widget_style_settings,
                ...parsedWgtViewSettings,
                ew_redirect_to_product_page: true,
                ew_show_top_filters: false,
              },
            } || {};

          commit(
            "setIsEventsByDateMode",
            settingsData.widget_style_settings.show_calendar,
            { root: true }
          );
          commit("setWidgetSettings", settingsData);
          if (
            settingsData.widget_style_settings.ew_events_list_view ===
            "progressive"
          ) {
            commit("setEventProgressiveView", "grid");
          } else if (
            settingsData.widget_style_settings.ew_events_list_view !==
            "progressive"
          ) {
            commit("setEventProgressiveView", "grid");
          }

          let themeAppExtensionViewModeSetting = null;
          try {
            let themeAppExtensionViewModeSelector = document.querySelector(
              "#servv-widget-view-mode"
            );
            if (
              themeAppExtensionViewModeSelector &&
              themeAppExtensionViewModeSelector !== "default"
            ) {
              themeAppExtensionViewModeSetting =
                themeAppExtensionViewModeSelector.value;
            }
          } catch (e) {
            console.log("View mode specified in the app.");
          }
          if (
            themeAppExtensionViewModeSetting &&
            themeAppExtensionViewModeSetting !== "default"
          ) {
            commit("setWidgetSettings", {
              ...settingsData,
              widget_style_settings: {
                ...settingsData.widget_style_settings,
                ew_events_list_view: themeAppExtensionViewModeSetting,
                ew_show_filters_on_top: false,
              },
            });
          }
          commit(
            "setWidgetsDefaultLanguage",
            settingsData.widget_style_settings.widgets_default_language
          );
          commit(
            "setWidgetsCurrentLanguage",
            settingsData.widget_style_settings.widgets_default_language
          );
          commit(
            "setTranslations",
            settingsData.widget_style_settings.translations
          );

          commit(
            "setOpenItemsList",
            settingsData.widget_style_settings.ew_default_list
          );
          let eventsPerPageFromExtension = null;
          try {
            let eventsPerPageSelector = document.querySelector(
              "#servv-events-per-page"
            );
            if (
              eventsPerPageSelector &&
              eventsPerPageSelector.value.length > 0
            ) {
              eventsPerPageFromExtension = eventsPerPageSelector.value;
            }
          } catch (e) {
            console.log("Page size specified in the app.");
          }
          if (
            eventsPerPageFromExtension &&
            eventsPerPageFromExtension !== "nil"
          ) {
            commit(
              "events/setEventsPageSize",
              Number.parseInt(eventsPerPageFromExtension),
              {
                root: true,
              }
            );

            commit(
              "bundles/setBundlesPageSize",
              Number.parseInt(eventsPerPageFromExtension),
              { root: true }
            );
          } else {
            commit(
              "events/setEventsPageSize",
              settingsData.widget_style_settings
                .ew_events_list_page_size_default || 10,
              { root: true }
            );

            commit(
              "bundles/setBundlesPageSize",
              settingsData.widget_style_settings
                .ew_bundles_list_page_size_default || 10,
              { root: true }
            );
          }
          // if (!state.widgetsCurrentLanguage) {
          //   commit(
          //     'setWidgetsCurrentLanguage',
          //     settingsData.widget_style_settings.widgets_default_language
          //   );
          // }
          // dispatch(
          //   "events/fetchFilteredEventsDates",
          //   { date: moment().format("YYYY-MM") },
          //   { root: true }
          // );
          const selectedCollections = document.querySelectorAll(
            ".servv-event-collection"
          );
          if (selectedCollections.length > 0) {
            let collections = [];
            selectedCollections.forEach((collection) => {
              collections.push(Number.parseInt(collection.id));
            });
            if (collections.length > 0)
              commit("events/setCollectionsMode", true, { root: true });
          }
          commit("setLoading", false);
          commit("setApiAccessValid", true);
        }
      } catch (e) {
        console.log(e);
        commit("setApiAccessValid", false);
      }
    },
    async fetchStoreDataShopifyApi({ commit }) {
      try {
        const response = await API({
          url: "/admin/api/2020-10/shop.json",
          method: "GET",
        });
        if (response.status === 200 && response.data && response.data.shop) {
          commit("setStoreDataShopify", response.data.shop);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    translations(state) {
      return state.translations;
    },
    apiAccessValid(state) {
      return state.apiAccessValid;
    },
    widgetNotice(state) {
      return state.widgetNotice;
    },
    widgetSettings(state) {
      return state.widgetSettings;
    },
    shopParams(state) {
      return state.shopParams;
    },
    isUserValid(state) {
      return state.isUserValid;
    },
    modalDialogOpen(state) {
      return state.modalDialogOpen;
    },
    openItemsList(state) {
      return state.openItemsList;
    },
    openMobileCalendar(state) {
      return state.openMobileCalendar;
    },
    openDesktopCalendar(state) {
      return state.openDesktopCalendar;
    },
    openMobileFilters(state) {
      return state.openMobileFilters;
    },
    widgetsCurrentLanguage(state) {
      return state.widgetsCurrentLanguage;
    },
    widgetsDefaultLanguage(state) {
      return state.widgetsDefaultLanguage;
    },
    windowSize(state) {
      return state.windowSize;
    },
    isStepsCompleted(state) {
      return state.isStepsCompleted;
    },
    currentMonth(state) {
      return { year: state.currentMonth.year, month: state.currentMonth.month };
    },
    eventsPorgressiveView(state) {
      return state.eventsPorgressiveView;
    },
    isFiltersPanelVisible(state) {
      return (
        state.widgetSettings.widget_style_settings.available_filters.indexOf(
          "teams"
        ) >= 0 ||
        state.widgetSettings.widget_style_settings.available_filters.indexOf(
          "members"
        ) >= 0 ||
        state.widgetSettings.widget_style_settings.available_filters.indexOf(
          "locations"
        ) >= 0 ||
        state.widgetSettings.widget_style_settings.available_filters.indexOf(
          "languages"
        ) >= 0 ||
        state.widgetSettings.widget_style_settings.available_filters.indexOf(
          "categories"
        ) >= 0
      );
    },
  },
};
