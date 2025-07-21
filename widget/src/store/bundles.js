import API from "@/services/api";
import { processError } from "@/services/utils";
import moment from "moment-timezone";

export default {
  namespaced: true,
  state: {
    pageSize: 10,
    bundles: {
      bundles: [],
      page_count: 0,
      page_number: 0,
      page_size: 10,
      total_records: 0,
      listIsEmpty: false,
    },
    filteredBundlesDatesList: [],
    singleBundle: null,
  },
  mutations: {
    setBundlesList(state, payload) {
      state.bundles = payload;
    },
    setBundlesPageSize(state, size = 10) {
      state.pageSize = size;
    },
    setSingleBundle(state, payload) {
      state.singleBundle = payload;
    },
    setFilteredBundlesDatesList(state, list) {
      state.filteredBundlesDatesList = list;
    },
  },
  actions: {
    async fetchBundlesList(
      { commit, dispatch, state, rootState },
      { page = 1, firstFetch = false, pageSize = state.pageSize } = {}
    ) {
      try {
        const response = await API({
          url: `${window.SVV_API_URL}/widget/filter/bundles?page=${
            firstFetch ? 1 : page
          }&page_size=${pageSize}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        if (response.status === 200 && response.data) {
          const bundlesListForState = {
            ...response.data,
            listIsEmpty: response.data.bundles.length === 0,
          };
          dispatch("fetchFilteredBundlesDates", { emptySearch: true });
          commit("setBundlesList", bundlesListForState);
          commit("common/setLoading", false, { root: true });
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);

        const bundlesListForState = {
          bundles: [],
          page_count: 0,
          page_number: 0,
          page_size: state.pageSize,
          total_records: 0,
          listIsEmpty: false,
        };

        commit("setBundlesList", bundlesListForState);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    async fetchFilteredBundlesDates(
      { commit, dispatch, rootState },
      { date = false, emptyList = false, emptySearch = false } = {}
    ) {
      try {
        if (emptyList) {
          commit("setFilteredBundlesDatesList", []);
          return [];
        }
        const requestedMonth = date ? date : moment().format("YYYY-MM");
        const filteringParams = !emptySearch
          ? rootState.search.searchParamsString || ""
          : "";

        const response = await API({
          url: `${window.SVV_API_URL}/widget/filter/bundles/dates?${filteringParams}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        if (response.status !== 200 || !response.data) {
          return [];
        }
        commit("setFilteredBundlesDatesList", response.data || []);
        return response.data || [];
      } catch (e) {
        console.log(e);
      }
    },

    async fetchBundlesByParams(
      { commit, dispatch, rootState, state },
      date = ""
    ) {
      // const {
      //   show_calendar,
      // } = rootState.common.widgetSettings.widget_style_settings;

      // console.log('fetchEventsByParams - ', params);

      // if (show_calendar && state.selectedDate.length > 0) {
      //   dispatch("fetchEventsByDateServvDB", {
      //     date: state.selectedDate,
      //     // filteringParams: params,
      //     force: true,
      //   });
      // } else if (
      //   !show_calendar ||
      //   (show_calendar && state.selectedDate.length === 0)
      // ) {
      //   dispatch("fetchMeetingsListNormalFlowServvDB", {
      //     filteringParams: params,
      //   });
      // }

      const filteringParams = rootState.search.searchParamsString || "";

      try {
        const response = await API({
          url: `${window.SVV_API_URL}/widget/filter/bundles?&page=1&page_size=300&${filteringParams}&date=${date}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });
        if (response.status === 200 && response.data) {
          dispatch("fetchFilteredBundlesDates", "");
          const bundlesListForState = {
            ...response.data,
            listIsEmpty: response.data.bundles.length === 0,
          };
          commit("setBundlesList", bundlesListForState);
          commit("common/setLoading", false, { root: true });
        }
      } catch (e) {
        const bundlesListForState = {
          bundles: [],
          page_count: 0,
          page_number: 0,
          page_size: state.pageSize,
          total_records: 0,
          listIsEmpty: false,
        };

        commit("setBundlesList", bundlesListForState);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },
    async fetchBundlesById(
      { commit, dispatch, state, rootState },
      { page = 1, firstFetch = false, pageSize = state.pageSize } = {}
    ) {
      try {
        const product_id = document.querySelector(
          "#servv_op_wgt_product_selected_variant"
        );
        const response = await API({
          url: `${window.SVV_API_URL}/widget/filter/bundles/byproduct/${product_id.value}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        if (response.status === 200 && response.data) {
          commit("setSingleBundle", response.data);
          commit("common/setLoading", false, { root: true });
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);

        commit("setSingleBundle", null);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    async addBundleToCart({ commit, dispatch, state, rootState }, bundleData) {
      if (!rootState.common.isUserValid) {
        window.location.href = `/account/login`;
        return;
      }

      try {
        const addToCartResponse = await API({
          url: "/cart/add.js",
          method: "POST",
          data: {
            items: [
              {
                quantity: 1,
                id: bundleData.variant_id,
              },
            ],
          },
        });

        if (addToCartResponse.status === 200) {
          window.location.href = `/cart`;
          return 0;
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },
  },
  getters: {
    bundles(state) {
      return state.bundles;
    },
    bundlesList(state) {
      return state.bundles.bundles;
    },
    singleBundle(state) {
      return state.singleBundle;
    },
    pageSize(state) {
      return state.pageSize;
    },
    filteredBundlesDatesList(state) {
      return state.filteredBundlesDatesList;
    },
  },
};
