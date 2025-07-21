import forEach from "lodash.foreach";
import has from "lodash.has";
import { v4 as uuidv4 } from "uuid";

import API from "@/services/api";
import {
  processError,
  convertEventsDates,
  convertFromUtcToLocal,
} from "@/services/utils";
import * as notificationVars from "@/variables/notifications";

export default {
  namespaced: true,
  state: {
    selectedCategory: null,
    selectedLocation: null,
    selectedLanguage: null,
    selectedTeam: null,
    selectedMember: null,
    textSearchString: "",

    filterTeam: "",
    filterMember: "",
    filterLocation: "",
    filterLanguage: "",
    filterCategory: "",
    textSearchQuery: "",

    searchParamsString: "",

    searchPanelOpen: false,

    clearSearchInputMarker: new Date().getTime(),
    defaultFilterName: "",
    defaultFilterValue: "",
  },
  mutations: {
    setCategoryFilter(state, payload) {
      state.filterCategory = !!payload ? `category_id=${payload}` : "";
      state.selectedCategory = payload;
    },
    setLocationFilter(state, payload) {
      state.filterLocation = !!payload ? `location_id=${payload}` : "";
      state.selectedLocation = payload;
    },
    setLanguageFilter(state, payload) {
      state.filterLanguage = !!payload ? `language_id=${payload}` : "";
      state.selectedLanguage = payload;
    },
    setTeamFilter(state, payload) {
      state.filterTeam = !!payload ? `team_id=${payload}` : "";
      state.selectedTeam = payload;
    },
    setMemberFilter(state, payload) {
      state.filterMember = !!payload ? `member_id=${payload}` : "";
      state.selectedMember = payload;
    },
    setTextSearch(state, payload) {
      state.textSearchQuery = !!payload ? `search=${payload}` : "";
      state.textSearchString = payload;
    },
    setSearchParamsString(state, payload) {
      state.searchParamsString = payload;
    },
    disableParametersFilters(state) {
      state.selectedCategory = null;
      state.selectedLocation = null;
      state.selectedLanguage = null;
      state.selectedTeam = null;
      state.selectedMember = null;
      state.textSearchQuery = "";

      state.filterTeam = "";
      state.filterMember = "";
      state.filterLocation = "";
      state.filterLanguage = "";
      state.filterCategory = "";
      state.textSearchString = "";
      state.searchParamsString = "";
    },
    setSearchPanelOpen(state, payload) {
      state.searchPanelOpen = payload;
    },
    setClearSearchInputMarker(state) {
      state.clearSearchInputMarker = new Date().getTime();
    },
    setDefaultsFilterParams(state, payload) {
      if (!payload) return;

      const parsedParams = payload
        .replace("#svv_default_filter_", "")
        .split("_");

      if (!parsedParams || parsedParams.length < 2) return;

      state.defaultFilterName = parsedParams[0];
      state.defaultFilterValue = parsedParams[1];
    },
  },
  actions: {
    parseSearchRequest({ commit, dispatch, state, rootState }, request) {
      let requestData = request;
      const {
        show_calendar,
      } = rootState.common.widgetSettings.widget_style_settings;
      const { selectedDate } = rootState.events;

      if (has(requestData, "category") && !!requestData.category) {
        commit("setCategoryFilter", requestData.category);
      } else {
        commit("setCategoryFilter", "");
      }
      if (has(requestData, "location") && !!requestData.location) {
        commit("setLocationFilter", requestData.location);
      } else {
        commit("setLocationFilter", "");
      }
      if (has(requestData, "language") && !!requestData.language) {
        commit("setLanguageFilter", requestData.language);
      } else {
        commit("setLanguageFilter", "");
      }
      if (has(requestData, "team") && !!requestData.team) {
        commit("setTeamFilter", requestData.team);
      } else {
        commit("setTeamFilter", "");
      }
      if (has(requestData, "member") && !!requestData.member) {
        commit("setMemberFilter", requestData.member);
      } else {
        commit("setMemberFilter", "");
      }

      if (has(requestData, "search") && !!requestData.search) {
        /**
         * If text search string is not empty, all other filters must be ignored
         */
        commit("setTextSearch", requestData.search);
        commit("setCategoryFilter", "");
        commit("setLocationFilter", "");
        commit("setLanguageFilter", "");
        commit("setTeamFilter", "");
        commit("setMemberFilter", "");
      } else {
        commit("setTextSearch", "");
      }

      // if (show_calendar && selectedDate && selectedDate.length > 0) {
      //   commit('setDateFilter', selectedDate);
      // } else {
      //   commit('setDateFilter', '');
      // }
      commit("common/setOpenMobileFilters", false, { root: true });
      commit("common/setOpenMobileCalendar", false, { root: true });
      // commit('common/setOpenDesktopCalendar', false, { root: true });

      if (!rootState.events.collectionsMode) {
        dispatch("fetchSearchRequest");
      } else {
        dispatch("events/filterEventsFromCollection", null, { root: true });
      }
    },

    fetchSearchRequest({ commit, dispatch, rootState, state }) {
      const serchParamsString = [
        state.filterTeam,
        state.filterMember,
        state.filterLocation,
        state.filterLanguage,
        state.filterCategory,
        state.textSearchQuery,
      ]
        .filter((item) => item.length > 0)
        .join("&");

      commit("setSearchParamsString", serchParamsString);
      if (serchParamsString && serchParamsString.length > 0) {
        commit("events/disableCalendarFilters", true, { root: true });
        if (rootState.common.openItemsList === "events") {
          // Fetch Events with params
          dispatch("events/fetchEventsByParams", serchParamsString, {
            root: true,
          });
        } else if (rootState.common.openItemsList === "bundles") {
          // Fetch Bundles with params
          dispatch("bundles/fetchBundlesByParams", "", { root: true });
        }
      } else {
        commit("events/disableCalendarFilters", true, { root: true });
        if (rootState.common.openItemsList === "events") {
          // Fetch Events
          dispatch(
            "events/fetchEventsList",
            { firstFetch: true },
            { root: true }
          );
        } else if (rootState.common.openItemsList === "bundles") {
          // Fetch Bundles
          dispatch(
            "bundles/fetchBundlesList",
            { firstFetch: true },
            { root: true }
          );
        }
      }
    },
    clearAllFilters({ dispatch, commit, rootState }) {
      const clearFilterRequest = {
        category: "",
        location: "",
        language: "",
        team: "",
        member: "",
        search: "",
      };
      commit("setClearSearchInputMarker");
      commit("events/setCollectionSelectedDate", null, { root: true });
      dispatch("parseSearchRequest", clearFilterRequest);
    },
  },
  getters: {
    allRequestParams({
      selectedCategory,
      selectedLocation,
      selectedLanguage,
      selectedTeam,
      selectedMember,
    }) {
      const allRequestParms = {};

      if (!!selectedCategory) {
        allRequestParms.category = selectedCategory;
      }
      if (!!selectedLocation) {
        allRequestParms.location = selectedLocation;
      }
      if (!!selectedLanguage) {
        allRequestParms.language = selectedLanguage;
      }
      if (!!selectedTeam) {
        allRequestParms.team = selectedTeam;
      }
      if (!!selectedMember) {
        allRequestParms.member = selectedMember;
      }

      return allRequestParms;
    },
    selectedCategory(state) {
      return state.selectedCategory;
    },
    selectedLocation(state) {
      return state.selectedLocation;
    },
    selectedLanguage(state) {
      return state.selectedLanguage;
    },
    selectedTeam(state) {
      return state.selectedTeam;
    },
    selectedMember(state) {
      return state.selectedMember;
    },
    textSearchString(state) {
      return state.textSearchString;
    },
    isParametersFilterActive(state, getters, rootState) {
      return (
        (state.searchParamsString && state.searchParamsString.length > 0) ||
        !rootState.common.widgetSettings.widget_style_settings.show_calendar
      );
    },
    searchPanelOpen(state) {
      return state.searchPanelOpen;
    },
    clearSearchInputMarker(state) {
      return state.clearSearchInputMarker;
    },
    defaultsFilterParams(state) {
      return {
        defaultFilterName: state.defaultFilterName,
        defaultFilterValue: state.defaultFilterValue,
      };
    },
  },
};
