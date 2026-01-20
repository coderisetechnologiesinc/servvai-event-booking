import { create } from "zustand";
import { persist } from "zustand/middleware";

import { getSettings } from "../utilities/settings";
import { getFilters, getFilterType } from "../utilities/filters";
import {
  getZoomAccount,
  getStripeAccount,
  getGmailAccount,
  getCalendarAccount,
} from "../utilities/accounts";

export const useServvStore = create(
  persist(
    (set, get) => ({
      settings: null,
      filtersList: {},
      filtersHash: null,

      zoomConnected: false,
      stripeConnected: false,
      stripeCurrency: "CAD",
      gmailConnected: false,
      calendarConnected: false,
      timeFormat: "hh:mm a",
      loading: false,
      errorMessage: null,

      fetchSettings: async () => {
        set({ loading: true, errorMessage: null });

        try {
          const res = await getSettings();

          if (res && !res.errorCode) {
            set({
              settings: res,
              loading: false,
            });
          } else {
            set({
              loading: false,
              errorMessage: "We're facing an issue loading the settings.",
            });
          }
        } catch (e) {
          console.error("Error loading settings", e);
          set({
            loading: false,
            errorMessage: "We're facing an issue loading the settings.",
          });
        }
      },

      syncAccountsAfterEvents: async () => {
        try {
          const zoom = await getZoomAccount();
          set({ zoomConnected: !!zoom?.data?.id });

          const stripe = await getStripeAccount();
          set({ stripeConnected: !!stripe?.data?.id });
          set({ stripeCurrency: stripe?.data?.currency });

          const gmail = await getGmailAccount();
          set({ gmailConnected: !!gmail?.data?.id });

          const calendar = await getCalendarAccount?.();
          set({ calendarConnected: !!calendar?.data?.id });
        } catch (e) {
          console.error("Account sync error", e);
        }
      },
      syncSingleFilterFromServer: async (filterId) => {
        const { settings, filtersList } = get();
        if (!settings?.current_plan?.id || !filterId) return;

        try {
          const result = await getFilterType(filterId);

          if (!result?.data) return;

          const newFiltersList = {
            ...filtersList,
            [filterId]: result.data,
          };

          const newHash = JSON.stringify(newFiltersList);

          set({
            filtersList: newFiltersList,
            filtersHash: newHash,
          });
        } catch (e) {
          console.error("Single filter sync error:", e);
        }
      },

      syncFiltersFromServer: async () => {
        const { settings, filtersHash } = get();
        if (!settings?.current_plan?.id) return;

        try {
          const serverFilters = await getFilters(settings.current_plan.id);
          const newHash = JSON.stringify(serverFilters);

          if (newHash !== filtersHash) {
            set({
              filtersList: serverFilters,
              filtersHash: newHash,
            });
          }
        } catch (e) {
          console.error("Filter sync error:", e);
        }
      },

      getCachedFilters: () => get().filtersList,
    }),

    {
      name: "servv-store",
      partialize: (state) => ({
        filtersList: state.filtersList,
        filtersHash: state.filtersHash,
        zoomConnected: state.zoomConnected,
        stripeConnected: state.stripeConnected,
        gmailConnected: state.gmailConnected,
        calendarConnected: state.calendarConnected,
      }),
    },
  ),
);
