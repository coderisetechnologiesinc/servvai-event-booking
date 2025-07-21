import forEach from "lodash.foreach";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";
import axios from "axios";
import API from "@/services/api";
import { processError, convertEventsDates } from "@/services/utils";

export default {
  namespaced: true,
  state: {
    isEventsByDateMode: false,
    pageSize: 10,
    meetingsGroupedByCategory: [],
    meetings: {
      meetings: [],
      page_count: 0,
      page_number: 0,
      page_size: 10,
      total_records: 0,
      listIsEmpty: false,
    },
    isBundlePage: false,
    fullMeetingsList: [],
    meetingsByDateScope: {
      scope: {},
      scopeIsEmpty: true,
    },
    meetingForSelectedDate: {
      meetingsList: [],
      listIsEmpty: false,
    },
    eventsFromCollections: [],
    collectionsEventsList: [],
    collectionsMode: false,
    selectedDate: "",
    filteredEventsDatesList: [],
    collectionSelectedDate: null,
    multiSearchString: null,
    reqParams: "",
    meetingsListFetched: false,
  },
  mutations: {
    setMeetingsList(state, payload) {
      state.meetings = payload;
    },
    setMeetingsListFetched(state, payload) {
      state.meetingsListFetched = payload;
    },
    setCollectionsMode(state, payload) {
      state.collectionsMode = true;
    },
    setMeetingsFromCollections(state, payload) {
      state.eventsFromCollections = payload;
    },
    setBundleViewMode(state, payload) {
      state.isBundlePage = payload;
    },
    setMeetingsGroupedByCategory(state, payload) {
      state.meetingsGroupedByCategory = payload;
    },
    skipMeetingsListPagination(state) {
      state.meetings = { ...state.meetings, page_count: 0, page_number: 0 };
    },
    setIsEventsByDateMode(state, payload) {
      state.isEventsByDateMode = payload;
    },
    setFilteredEventsDatesList(state, list) {
      state.filteredEventsDatesList = list;
    },
    setMeetingsByDateScope(state, payload) {
      state.meetingsByDateScope = payload;
      const newAvailableDates = Object.keys(payload.scope);
      if (
        newAvailableDates.indexOf(state.selectedDate) < 0 &&
        newAvailableDates.length > 0
      ) {
        state.selectedDate = newAvailableDates[0];
      } else if (
        newAvailableDates.indexOf(state.selectedDate) < 0 &&
        newAvailableDates.length === 0
      ) {
        state.selectedDate = moment().format("YYYY-MM-DD");
      }
    },
    setMeetingForSelectedDate(state, payload) {
      state.meetingForSelectedDate = payload;
    },
    setSelectedDate(state, payload) {
      state.selectedDate = payload;
    },
    setFullMeetingsList(state, payload) {
      state.fullMeetingsList = payload;
    },

    disableCalendarFilters(state) {
      state.selectedDate = "";
    },
    setEventsPageSize(state, size = 10) {
      state.pageSize = size;
    },
    setSearchParams(state, payload) {
      state.reqParams = payload;
    },
    setSearchStringParams(state, payload) {
      state.multiSearchString = payload;
    },
    setCollectionSelectedDate(state, payload) {
      state.collectionSelectedDate = payload;
    },
    setCollectionEventsDatesList(state, payload) {
      state.collectionsEventsList = payload;
    },
  },
  actions: {
    async fetchEventsByDate({ commit, state, dispatch }, { date: date } = {}) {
      if (date) {
        commit("setSelectedDate", date);
        dispatch("fetchEventsList", { date: date });
      }
    },
    async fetchEventsFromCollections(
      { commit, dispatch, state, rootState },
      collections = []
    ) {
      if (collections.collections.length > 0) {
        const promises = collections.collections.map((collection) =>
          API({
            url: `${window.SVV_API_URL}/shopify/widget/collection/${collection}/allproducts`,
            method: "GET",
            headers: { ...rootState.common.apiHeaders },
          })
        );

        const results = await Promise.allSettled(promises);
        let events = [];
        results.forEach((result) => {
          if (result.status === "fulfilled") {
            events = events.concat(result.value.data);
          } else {
            console.error(result.reason);
          }
        });
        if (state.pageSize === 1) {
          events = [events[0]];
        }
        // const dates = events.map((event) => event.start_datetime);

        const eventsPromises = events
          .filter((event) => event && event.vairantId !== null)
          .map((event) => dispatch("fetchEventById", event));
        const meetingsListForState = [];
        const eventsResults = await Promise.allSettled(eventsPromises);
        eventsResults.forEach((result) => {
          if (result.status === "fulfilled") {
            meetingsListForState.push(result.value.data);
          } else {
            console.error(result.reason);
          }
        });

        const itemsWithAgenda = meetingsListForState.map((event, index) => {
          const updatedItem = event;
          // console.log(event);

          if (!updatedItem.start_time) {
            updatedItem.start_time = moment
              .tz(updatedItem.product.start_time, "YYYY-MM-DD HH:mm:ss", "UTC")
              .format();
          }
          forEach(event.products, (product) => {
            if (product.start_time === event.start_time) {
              updatedItem.agenda = product.description;
              updatedItem.product_price = product.price;
            }
          });
          return {
            ...updatedItem,
            wgtItemId: uuidv4(),
          };
        });
        const convertedDates = convertEventsDates(itemsWithAgenda).map(
          (event) => event.start_time
        );

        commit("setCollectionsMode", true);
        commit(
          "setMeetingsFromCollections",
          convertEventsDates(itemsWithAgenda)
        );
        commit("setFilteredEventsDatesList", convertedDates);
        commit("setCollectionEventsDatesList", convertedDates);
        commit("setMeetingsList", {
          meetings: convertEventsDates(
            itemsWithAgenda.sort((a, b) =>
              moment(a.start_time).diff(moment(b.start_time))
            )
          ),
          listIsEmpty: itemsWithAgenda.length === 0,
          page_count: 1,
          page_number: 1,
          page_size: itemsWithAgenda.length,
          total_records: itemsWithAgenda.length,
          listIsEmpty: false,
        });
      }
    },
    async fetchEventById({ rootState }, event) {
      return await API({
        url: `${window.SVV_API_URL}/widget/filter/meetings/byproduct/${event.variant_id}`,
        method: "GET",
        headers: { ...rootState.common.apiHeaders },
      });
    },

    async updateEventsImages({ commit, state, dispatch, rootState }) {
      const { meetings } = state.meetings;
      let updateMeetingsList = [];
      if (meetings.length > 0) {
        updateMeetingsList = meetings.map(async (meeting) => {
          if (meeting.product && meeting.product.product_id) {
            try {
              let productId = null;
              let vairantId = null;

              productId = meeting.product.parent_product_id;
              vairantId = meeting.product.product_id;
              let requestUrl = `${window.SVV_API_URL}/shopify/widget/variant/${productId}/${vairantId}/image`;
              const response = await API({
                url: requestUrl,
                method: "GET",
                headers: { ...rootState.common.apiHeaders },
              });
              if (response && response.status === 200) {
                return (meeting.product.image_src = response.data.image_src);
              }
            } catch (e) {
              console.log(e);
            }
            commit("setMeetingsList", {
              ...state.meetings,
              meetings: updateMeetingsList,
            });
          }
        });
      }
    },
    async filterEventsFromCollection({ commit, dispatch, state, rootState }) {
      const filters = {
        team: rootState.search.filterTeam,
        member: rootState.search.filterMember,
        location: rootState.search.filterLocation,
        language: rootState.search.filterLanguage,
        category: rootState.search.filterCategory,
        text: rootState.search.textSearchQuery,
      };

      const matchesFilters = (event, filters) => {
        for (const [key, values] of Object.entries(filters)) {
          if (values.length > 0) {
            switch (key) {
              case "team":
                let team = null;
                if (filters.team.length > 0)
                  team = rootState.types.eventTypes.teams.filter((team) => {
                    return (
                      team.id === Number.parseInt(filters.team.split("=")[1])
                    );
                  });

                if (
                  !event.members_id ||
                  event.members_id !== team[0].members_ids.join(",")
                ) {
                  return false;
                }
                break;
              case "member":
                const eventMembers =
                  event.members_id && event.members_id.length > 0
                    ? event.members_id.indexOf(",") > 0
                      ? event.members_id.split(",")
                      : [event.members_id]
                    : [];

                if (
                  !event.members_id ||
                  (eventMembers.length > 0 &&
                    !eventMembers.some(
                      (memberID) => memberID === values.split("=")[1]
                    ))
                ) {
                  return false;
                }
                break;
              case "location":
                if (
                  !event.location_id ||
                  (filters.location.length > 0 &&
                    !values
                      .split("=")[1]
                      .includes(event.location_id.toString()))
                ) {
                  return false;
                }
                break;
              case "language":
                if (
                  !event.language_id ||
                  (filters.language.length > 0 &&
                    !values
                      .split("=")[1]
                      .includes(event.language_id.toString()))
                ) {
                  return false;
                }
                break;
              case "category":
                if (
                  !event.category_id ||
                  (filters.category.length > 0 &&
                    !values
                      .split("=")[1]
                      .includes(event.category_id.toString()))
                ) {
                  return false;
                }
                break;
              case "text":
                const textQuery = values.split("=")[1].toLowerCase();

                if (
                  filters.text.length > 0 &&
                  !event.topic.toLowerCase().includes(textQuery)
                ) {
                  return false;
                }
                break;
              default:
                break;
            }
          }
        }
        return true;
      };

      const filteredEventsFromCollection = state.eventsFromCollections.filter(
        (event) => matchesFilters(event, filters)
      );
      commit("common/setLoading", false, { root: true });

      commit("setMeetingsList", {
        meetings: filteredEventsFromCollection,
        page_count: 1,
        page_number: 1,
        page_size: filteredEventsFromCollection.length,
        total_records: filteredEventsFromCollection.length,
        listIsEmpty: false,
      });
    },
    filterCollectionByDate({ commit, dispatch, state, rootState }, date) {
      const filteredCollectionDates = state.eventsFromCollections.filter(
        (event) => {
          return event.start_time.split("T")[0] === date.split("T")[0];
        }
      );
      // commit("setMeetingsByDateScope", {
      //   scope: filteredCollectionDates,
      //   scopeIsEmpty: Object.keys(filteredCollectionDates).length === 0,
      // });

      commit("setMeetingsList", {
        meetings: filteredCollectionDates,
        page_count: 1,
        page_number: 1,
        page_size: filteredCollectionDates.length,
        total_records: filteredCollectionDates.length,
        listIsEmpty: false,
      });
      commit("setSelectedDate", date);
      commit("setCollectionSelectedDate", date);
    },

    setMultiSearchString({ commit, state }, payload) {
      if (!payload) {
        commit("setSearchStringParams", null);
        commit("setSearchParams", "");
      } else {
        if (payload && !payload?.["Dates"]) {
          commit("setSearchStringParams", payload);
          commit("setSelectedDate", null);
        } else {
          commit("setSearchStringParams", {
            Dates: payload.dates,
            ...payload,
          });
        }
        // commit("setSelectedDate", null);
        let filterParams = Object.keys(
          !payload?.["Dates"] ? payload : { Dates: payload.dates, ...payload }
        );

        let reqParams = "";
        filterParams.forEach((filter, index) => {
          if (payload[filter] && payload[filter].length > 0) {
            payload[filter].forEach((param, index) => {
              let reqParam = "";
              switch (filter) {
                case "Categories":
                  reqParam = "category_id";
                  break;
                case "Members":
                  reqParam = "member_id";
                  break;
                case "Locations":
                  reqParam = "location_id";
                  break;
                case "Teams":
                  reqParam = "team_id";
                  break;
                case "Languages":
                  reqParam = "language_id";
                  break;
                case "Dates":
                  reqParam = "date";
                  break;
              }

              reqParams += reqParam + "=" + param.toString();
              if (index < payload[filter].length - 1) reqParams += "&";
            });
            if (index < filterParams.length - 1) reqParams += "&";
          }
        });

        commit("setSearchParams", reqParams);
      }
    },
    async fetchNextMeetingsInCategory(
      { commit, dispatch, state, rootState, rootGetters },
      category
    ) {
      let events = state.meetingsGroupedByCategory;
      let index = events.findIndex(
        (cat) => cat.category === category.toString()
      );

      dispatch("common/setLoading", true, { root: true });
      try {
        const response = await API({
          url: `${window.SVV_API_URL}/widget/filter/meetings?page=${events[
            index
          ].data.page_number + 1}&page_size=${12}&category_id=${category}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        if (response && response.status === 200) {
          events[index].data.meetings = events[index].data.meetings.concat(
            response.data.meetings
          );
          events[index].data.page_number = response.data.page_number;
          commit("setMeetingsGroupedByCategory", events);
          dispatch("common/setLoading", false, { root: true });
        }
      } catch (e) {
        console.log(e);
        dispatch("common/setLoading", false, { root: true });
      }
    },
    async fetchMeetingsGroupedByCategory(
      { commit, dispatch, state, rootState, rootGetters },
      page = 1
    ) {
      const {
        ew_events_categories,
      } = rootState.common.widgetSettings.widget_style_settings;
      dispatch("common/setLoading", true, { root: true });
      let events = [];
      try {
        if (ew_events_categories) {
          ew_events_categories.split(",").forEach(async (category) => {
            const response = await API({
              url: `${
                window.SVV_API_URL
              }/widget/filter/meetings?page=${page}&page_size=${12}&category_id=${Number.parseInt(
                category,
                10
              )}`,
              method: "GET",
              headers: { ...rootState.common.apiHeaders },
            });
            if (response && response.status === 200) {
              events.push({ category: category, data: response.data });
            }
          });
        }
        commit("setMeetingsGroupedByCategory", events);

        dispatch("common/setLoading", false, { root: true });
      } catch (e) {
        console.log(e);
      }

      dispatch("common/setLoading", false, { root: true });
    },
    async fetchEventsWithMultipleFilters(
      { commit, dispatch, state, rootState, rootGetters },
      { page = 1, page_size = state.pageSize, stepsCompleted = true } = {}
    ) {
      dispatch("common/setLoading", true, { root: true });
      try {
        let url = "";
        if (state.reqParams.includes("date")) {
          url = `${window.SVV_API_URL}/widget/filter/meetings?${
            state.reqParams.length > 1 ? state.reqParams : ""
          }`;
        } else
          url = `${
            window.SVV_API_URL
          }/widget/filter/meetings?page=${page}&page_size=${page_size}&${
            state.reqParams.length > 1 ? state.reqParams : ""
          }`;
        const response = await API({
          url: url,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });
        if (response && response.status === 200) {
          const itemsWithPrice = response.data.meetings.map((event, index) => {
            const updatedItem = event;

            updatedItem.product_price = event.product ? event.product.price : 0;
            updatedItem.wgtItemId = uuidv4();

            return updatedItem;
          });

          const meetingsListForState = {
            ...response.data,
            meetings: convertEventsDates(itemsWithPrice),
            listIsEmpty: response.data.meetings.length === 0,
          };

          commit("setMeetingsList", meetingsListForState);
          commit("common/setLoading", false, { root: true });
          commit("common/setStepsComplete", stepsCompleted ? true : false, {
            root: true,
          });
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);
        const meetingsListForState = {
          meetings: [],
          page_count: 0,
          page_number: 0,
          page_size: state.pageSize,
          total_records: 0,
          listIsEmpty: false,
        };

        commit("setMeetingsList", meetingsListForState);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },
    async fetchEventQuantity({
      commit,
      dispatch,
      state,
      rootState,
      rootGetters,
    }) {
      const { meetings } = state.meetings;

      let updatedMeetingsList = [];
      if (meetings.length > 0) {
        updatedMeetingsList = meetings.map(async (meeting) => {
          if (meeting.product && meeting.product.product_id) {
            try {
              const response = await API({
                url: `${window.SVV_API_URL}/widget/filter/meetings/byproduct/${meeting.product.product_id}`,

                method: "GET",
                headers: { ...rootState.common.apiHeaders },
              });
              if (response && response.status === 200) {
                return (meeting.product.current_quantity =
                  response.data.product.current_quantity);
              }
            } catch (e) {
              console.log(e);
            }
            commit("setMeetingsList", {
              ...state.meetings,
              meetings: updatedMeetingsList,
            });
          }
        });
      }
    },
    async fetchEventQuantityByCategory({
      commit,
      dispatch,
      state,
      rootState,
      rootGetters,
    }) {
      const categories = state.meetingsGroupedByCategory;
      let updatedMeetingsList = [];

      if (categories) {
        updatedMeetingsList = categories.map(async (category) => {
          if (
            category.data &&
            category.data.meetings &&
            category.data.meetings.length > 0
          ) {
            let updatedMeetings = category.data.meetings.map(
              async (meeting) => {
                try {
                  const response = await API({
                    url: `${window.SVV_API_URL}/widget/filter/meetings/byproduct/${meeting.product.product_id}`,
                    method: "GET",
                    headers: { ...rootState.common.apiHeaders },
                  });
                  if (response && response.status === 200) {
                    return (meeting.product.current_quantity =
                      response.data.product.current_quantity);
                  }
                } catch (e) {
                  console.log(e);
                }
              }
            );
          }

          // try {
          //   const response = await API({
          //     url: `${window.SVV_API_URL}/widget/filter/meetings/byproduct/${meeting.product.product_id}`,
          //     method: 'GET',
          //     headers: { ...rootState.common.apiHeaders },
          //   });
          //   if (response && response.status === 200) {
          //     return (meeting.product.current_quantity =
          //       response.data.product.current_quantity);
          //   }
          // } catch (e) {
          //   console.log(e);
          // }

          // commit('setMeetingsList', {
          //   ...state.meetings,
          //   meetings: updatedMeetingsList,
          // });
        });
      }
    },
    async fetchEventQuantityByDate({
      commit,
      dispatch,
      state,
      rootState,
      rootGetters,
    }) {
      const { meetingsList } = state.meetingForSelectedDate;
      let updatedMeetingsList = [];
      if (meetingsList.length > 0) {
        updatedMeetingsList = meetingsList.map(async (meeting) => {
          try {
            const response = await API({
              url: `${window.SVV_API_URL}/widget/filter/meetings/byproduct/${meeting.product.product_id}`,
              method: "GET",
              headers: { ...rootState.common.apiHeaders },
            });
            if (response && response.status === 200) {
              return (meeting.product.current_quantity =
                response.data.product.current_quantity);
            }
          } catch (e) {
            console.log(e);
          }
          commit("setMeetingForSelectedDate", {
            ...state.meetingForSelectedDate,
            meetingsList: updatedMeetingsList,
            listIsEmpty: updatedMeetingsList.length === 0,
          });
        });
      }
    },

    async fetchMeetingsList(
      { commit, dispatch, state, rootState, rootGetters },
      { page = 1, firstFetch = false, withDefaultFilter = false } = {}
    ) {
      const {
        show_calendar,
      } = rootState.common.widgetSettings.widget_style_settings;

      // if (!show_calendar && !show_filtered_widget) {
      //   dispatch('fetchMeetingsListNormalFlow', page);
      // } else if (show_calendar && !show_filtered_widget) {
      //   dispatch('fetchMeetingsListFullScope');
      // } else
      if (firstFetch) {
        // dispatch('fetchEventsStartCalendarDate');
        if (!withDefaultFilter) {
          dispatch("fetchMeetingsListNormalFlowServvDB", { page: 1 });
        } else {
          const allRequestParams = rootGetters["search/allRequestParams"];
          const { defaultFilterName, defaultFilterValue } = rootGetters[
            "search/defaultsFilterParams"
          ];
          let allRequestParamsUpdated = null;
          try {
            if (
              rootState.types &&
              rootState.types.eventTypes &&
              rootState.types.eventTypes.categories
            ) {
              const link = window.location.href.split("/");
              let categoryFromUrl = link[link.length - 1];
              let isUrlContainCatagoryName = rootState.types.eventTypes.categories.filter(
                (cat) =>
                  cat.name.toLowerCase() ===
                  categoryFromUrl
                    .replaceAll("-", " ")
                    .replaceAll("_", " ")
                    .toLowerCase()
              );
              if (isUrlContainCatagoryName.length > 0) {
                allRequestParamsUpdated = allRequestParams;

                allRequestParamsUpdated["category"] =
                  isUrlContainCatagoryName[0].id;
              }
            }
          } catch (e) {
            console.log(e);
          }

          if (
            (!defaultFilterName || !defaultFilterValue) &&
            !allRequestParamsUpdated
          ) {
            dispatch("fetchMeetingsListNormalFlowServvDB", { page: 1 });
            return;
          }

          allRequestParams[defaultFilterName] = +defaultFilterValue;

          commit("setLoading", true, { root: true });

          await dispatch(
            "search/parseSearchRequest",
            allRequestParamsUpdated
              ? { ...allRequestParamsUpdated }
              : { ...allRequestParams },
            { root: true }
          );
        }
      } else {
        dispatch("fetchMeetingsListNormalFlowServvDB", { page });
      }

      // if (show_calendar) {
      //   if (firstFetch) {
      //     // dispatch('fetchEventsStartCalendarDate');
      //     dispatch('fetchMeetingsListNormalFlowServvDB', { page: 1 });
      //   } else {
      //     dispatch('fetchMeetingsListNormalFlowServvDB', { page });
      //   }
      // } else if (!show_calendar) {
      //   dispatch('fetchMeetingsListNormalFlowServvDB', { page });
      // }
    },

    async fetchMeetingsListNormalFlow(
      { commit, dispatch, state, rootState },
      page = 1
    ) {
      try {
        const response = await API({
          url: `${window.SVV_API_URL}/zoom/widget/meetings?page=${page}&page_size=${state.pageSize}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        if (response.status === 200 && response.data) {
          const itemsWithAgenda = response.data.meetings.map((event, index) => {
            const updatedItem = event;

            forEach(event.products, (product) => {
              if (product.start_time === event.start_time) {
                updatedItem.agenda = product.description;
                updatedItem.product_price = product.price;
              }
            });
            return {
              ...updatedItem,
              wgtItemId: uuidv4(),
            };
          });

          commit("setMeetingsList", {
            ...response.data,
            meetings: convertEventsDates(itemsWithAgenda),
            listIsEmpty: response.data.meetings.length === 0,
          });
          commit("common/setLoading", false, { root: true });
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);

        commit("setMeetingsList", {
          meetings: [],
          page_count: 0,
          page_number: 0,
          page_size: state.pageSize,
          total_records: 0,
          listIsEmpty: false,
        });
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    async fetchMeetingsListFullScope({ commit, state, rootState }) {
      try {
        let fullList = [];
        const itemsScope = {};

        const firstResponse = await API({
          url: `${window.SVV_API_URL}/zoom/widget/meetings?page=1&page_size=299`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });

        fullList = [...firstResponse.data.meetings];

        if (firstResponse.data.page_count > 0) {
          const requestsList = [];
          let iterator = 2;

          while (iterator <= firstResponse.data.page_count) {
            requestsList.push({
              url: `${window.SVV_API_URL}/zoom/widget/meetings?page=${iterator}&page_size=299`,
              delay: 300 * iterator,
            });
            iterator += 1;
          }

          const scopeResult = await Promise.all(
            requestsList.map((item) => {
              return new Promise((resolve) => {
                setTimeout(async () => {
                  const response = await API({
                    url: item.url,
                    method: "GET",
                    headers: { ...rootState.common.apiHeaders },
                  });
                  resolve(response.data.meetings || []);
                }, item.delay);
              });
            })
          );

          forEach(scopeResult, (item) => {
            if (Array.isArray(item)) {
              fullList = [...fullList, ...item];
            }
          });
        }

        fullList = fullList.map((event, index) => {
          const updatedItem = event;

          forEach(event.products, (product) => {
            if (product.start_time === event.start_time) {
              updatedItem.agenda = product.description;
              updatedItem.product_price = product.price;
            }
          });
          return {
            ...updatedItem,
            wgtItemId: uuidv4(),
          };
        });

        fullList = convertEventsDates(fullList);
        // console.log(fullList);

        commit("setFullMeetingsList", fullList);

        forEach(fullList, (event) => {
          const itemDate = event.start_time.split("T")[0];

          if (itemsScope[itemDate] === undefined) {
            itemsScope[itemDate] = [];
          }

          itemsScope[itemDate].push(event);
        });

        commit("setMeetingsByDateScope", {
          scope: itemsScope,
          scopeIsEmpty: Object.keys(itemsScope).length === 0,
        });
      } catch (e) {
        console.log(e);
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    processSelectedDate({ commit, state }, selectedDate) {
      // const currentSelectedDate = moment(selectedDate.date).format(
      //   'YYYY-MM-DD'
      // );

      const currentSelectedDate = selectedDate;

      const meetingsList =
        state.meetingsByDateScope.scope[currentSelectedDate] !== undefined
          ? state.meetingsByDateScope.scope[currentSelectedDate]
          : [];

      // if (meetingsList.length > 0) {
      // if (currentSelectedDate === state.selectedDate) {
      //   commit("setSelectedDate", null);
      // } else {
      //   commit("setSelectedDate", currentSelectedDate);
      // }
      commit("setSelectedDate", currentSelectedDate);

      commit("setMeetingForSelectedDate", {
        meetingsList,
        listIsEmpty: meetingsList.length === 0,
      });

      // }
    },

    async subscribeToMeeting(
      { commit, dispatch, state, rootState },
      eventData
    ) {
      const {
        id,
        provider = "zoom",
        start_time,
        type: eventTypeRaw,
      } = eventData;
      // console.log('eventData - ', eventData)
      // return

      // if (!rootState.common.isUserValid) {
      //   window.location.href = `/account/login`;
      //   return;
      // }

      try {
        const addToCartResponse = await API({
          url: "/cart/add.js",
          method: "POST",
          data: {
            items: [
              {
                quantity: 1,
                id: eventData.product.product_id,
              },
            ],
          },
        });

        if (addToCartResponse.status === 200) {
          window.location.href = `/cart`;
        }
        // if (eventData && eventData.product_price > 0) {
        //   console.log(1);
        //   const addToCartResponse = await API({
        //     url: '/cart/add.js',
        //     method: 'POST',
        //     data: {
        //       items: [
        //         {
        //           quantity: 1,
        //           id: eventData.product.product_id,
        //         },
        //       ],
        //     },
        //   });
        //
        //   if (addToCartResponse.status === 200) {
        //     window.location.href = `/cart`;
        //   }
        // } else {
        //   // It means that this event is free
        //   console.log(2);
        //
        //   const response = await API({
        //     url: `${window.SVV_API_URL}/${provider}/widget/meetings/subscribe/${id}`,
        //     method: 'POST',
        //     headers: { ...rootState.common.apiHeaders },
        //   });
        //
        //   if (response.status === 200) {
        //     commit('common/setLoading', false, { root: true });
        //     commit(
        //       'common/setWidgetNotice',
        //       {
        //         open: true,
        //         status: 0,
        //         message: notificationVars.EVENT_BOOKED_SUCCESSFULLY_NOTICE,
        //       },
        //       { root: true }
        //     );
        //   }
        // }
      } catch (e) {
        console.log(e);
        console.log(e.response);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    /**
     * Servv DB acctions
     */

    async fetchMeetingsListNormalFlowServvDB(
      { commit, state, rootState, dispatch },
      {
        page = 1,
        page_size = state.pageSize,
        returnValue = false,
        filteringParams = "",
      } = {}
    ) {
      try {
        const filteringParamsString =
          state.reqParams ||
          filteringParams ||
          rootState.search.searchParamsString ||
          "";

        let params = new URLSearchParams();
        params.append("security", pluginData.security);
        params.append("action", "servv_get_events_filtered_list");
        const response = await axios.post("/wp-admin/admin-ajax.php", params);

        // const response = await API({
        //   // url: `${window.SVV_API_URL}/widget/meetings?page=${page}&page_size=30`,
        //   url: `${
        //     window.SVV_API_URL
        //   }/widget/filter/meetings?page_size=${page_size}&page=${page}${
        //     filteringParamsString.length > 0 ? `&${filteringParamsString}` : ""
        //   }`,
        //   method: "GET",
        //   headers: { ...rootState.common.apiHeaders },
        // });
        // const response = {
        //   status: 200,
        //   data: {
        //     page_count: 1,
        //     total_records: 7,
        //     page_number: 1,
        //     page_size: 10,
        //     meetings: [
        //       {
        //         id: 2523,
        //         provider: "offline",
        //         occurrence_id: "8178",
        //         topic: "Test recurring",
        //         providers_type: 2,
        //         type: "meeting",
        //         start_time: "2025-03-28T21:41:00Z",
        //         duration: 60,
        //         timezone: "America/New_York",
        //         agenda: "",
        //         location_id: null,
        //         category_id: null,
        //         language_id: null,
        //         members_id: null,
        //         is_live_shopping: false,
        //         product: {
        //           id: "offline_product_558752050188394231",
        //           item_id: "2523",
        //           shop_id: "shop_shopify_422369601259583235",
        //           item_type: "meeting",
        //           product_id: "46292140491000",
        //           occurrence_id: "8178",
        //           description: "",
        //           title: "Test recurring",
        //           start_time: "2025-03-28 21:41:00 +0000 UTC",
        //           price: 0,
        //           current_quantity: null,
        //           sold_quantity: null,
        //           parent_product_id: "9002701357304",
        //           image_src: "",
        //         },
        //         custom_field_1_name: "",
        //         custom_field_1_value: "",
        //         custom_field_2_name: "",
        //         custom_field_2_value: "",
        //         widget_show_custom_field_1: false,
        //         widget_show_custom_field_2: false,
        //       },
        //       {
        //         id: 2523,
        //         provider: "offline",
        //         occurrence_id: "8179",
        //         topic: "Test recurring",
        //         providers_type: 2,
        //         type: "meeting",
        //         start_time: "2025-03-29T21:41:00Z",
        //         duration: 60,
        //         timezone: "America/New_York",
        //         agenda: "",
        //         location_id: null,
        //         category_id: null,
        //         language_id: null,
        //         members_id: null,
        //         is_live_shopping: false,
        //         product: {
        //           id: "offline_product_558752051513794295",
        //           item_id: "2523",
        //           shop_id: "shop_shopify_422369601259583235",
        //           item_type: "meeting",
        //           product_id: "46292140556536",
        //           occurrence_id: "8179",
        //           description: "",
        //           title: "Test recurring",
        //           start_time: "2025-03-29 21:41:00 +0000 UTC",
        //           price: 0,
        //           current_quantity: null,
        //           sold_quantity: null,
        //           parent_product_id: "9002701357304",
        //           image_src: "",
        //         },
        //         custom_field_1_name: "",
        //         custom_field_1_value: "",
        //         custom_field_2_name: "",
        //         custom_field_2_value: "",
        //         widget_show_custom_field_1: false,
        //         widget_show_custom_field_2: false,
        //       },
        //       {
        //         id: 2523,
        //         provider: "offline",
        //         occurrence_id: "8177",
        //         topic: "Test recurring",
        //         providers_type: 2,
        //         type: "meeting",
        //         start_time: "2025-03-27T21:41:00Z",
        //         duration: 60,
        //         timezone: "America/New_York",
        //         agenda: "",
        //         location_id: null,
        //         category_id: null,
        //         language_id: null,
        //         members_id: null,
        //         is_live_shopping: false,
        //         product: {
        //           id: "offline_product_558752048745553655",
        //           item_id: "2523",
        //           shop_id: "shop_shopify_422369601259583235",
        //           item_type: "meeting",
        //           product_id: "46292140458232",
        //           occurrence_id: "8177",
        //           description: "",
        //           title: "Test recurring",
        //           start_time: "2025-03-27 21:41:00 +0000 UTC",
        //           price: 0,
        //           current_quantity: null,
        //           sold_quantity: null,
        //           parent_product_id: "9002701357304",
        //           image_src: "",
        //         },
        //         custom_field_1_name: "",
        //         custom_field_1_value: "",
        //         custom_field_2_name: "",
        //         custom_field_2_value: "",
        //         widget_show_custom_field_1: false,
        //         widget_show_custom_field_2: false,
        //       },
        //       {
        //         id: 2522,
        //         provider: "offline",
        //         occurrence_id: null,
        //         topic: "Test inperson event",
        //         providers_type: 1,
        //         type: "meeting",
        //         start_time: "2025-03-22T21:41:00Z",
        //         duration: 60,
        //         timezone: "America/New_York",
        //         agenda: "",
        //         location_id: null,
        //         category_id: null,
        //         language_id: null,
        //         members_id: null,
        //         is_live_shopping: false,
        //         product: {
        //           id: "offline_product_558751994370596599",
        //           item_id: "2522",
        //           shop_id: "shop_shopify_422369601259583235",
        //           item_type: "meeting",
        //           product_id: "46292140032248",
        //           occurrence_id: "",
        //           description: "",
        //           title: "Test inperson event at 2025/03/22 17:41",
        //           start_time: "2025-03-22 21:41:00 +0000 UTC",
        //           price: 0,
        //           current_quantity: null,
        //           sold_quantity: null,
        //           parent_product_id: "9002701226232",
        //           image_src: "",
        //         },
        //         custom_field_1_name: "",
        //         custom_field_1_value: "",
        //         custom_field_2_name: "",
        //         custom_field_2_value: "",
        //         widget_show_custom_field_1: false,
        //         widget_show_custom_field_2: false,
        //       },
        //     ],
        //   },
        // };

        // console.log('currenciesResponse - ', currenciesResponse);

        if (response.status === 200 && response.data) {
          // TODO it should be removed after stop maintains of zoom events as price and id are existing in items from Servv dB
          const itemsWithPrice = response.data.meetings.map((event, index) => {
            const updatedItem = event;

            updatedItem.product_price = event.product ? event.product.price : 0;
            updatedItem.wgtItemId = uuidv4();

            // const getQuantityResponse = await API({
            //   url: `en/products/${event.product.product_id}`,
            //   method: 'GET',
            // });

            return updatedItem;
          });

          const meetingsListForState = {
            ...response.data,
            meetings: convertEventsDates(itemsWithPrice).sort((a, b) =>
              moment(a.start_time).diff(moment(b.start_time))
            ),
            listIsEmpty: response.data.meetings.length === 0,
          };

          if (returnValue) {
            return meetingsListForState;
          }
          // console.log('itemsWithPrice - ', itemsWithPrice);

          commit("setMeetingsList", meetingsListForState);
          commit("common/setLoading", false, { root: true });
          commit("setMeetingsListFetched", true);
          // dispatch("fetchFilteredEventsDates");
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);

        const meetingsListForState = {
          meetings: [],
          page_count: 0,
          page_number: 0,
          page_size: state.pageSize,
          total_records: 0,
          listIsEmpty: false,
        };

        if (returnValue) {
          return meetingsListForState;
        }

        commit("setMeetingsList", meetingsListForState);
        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    async fetchFilteredEventsDates(
      { commit, state, dispatch, rootState },
      { date = false, emptyList = false } = {}
    ) {
      try {
        if (!state.collectionsMode) {
          if (emptyList) {
            commit("setFilteredEventsDatesList", []);
            return [];
          }
          let response = null;
          if (state.meetingsListFetched && !state.selectedDate) {
            const requestedMonth = date ? date : moment().format("YYYY-MM");
            let params = new URLSearchParams();
            params.append("security", pluginData.security);
            params.append("action", "servv_get_events_filtered_list_dates");
            // params.append("start_datetime", requestedMonth);
            response = await axios.post("/wp-admin/admin-ajax.php", params);
          }
          // const response = await API({
          //   url: `${window.SVV_API_URL}/widget/filter/meetings/dates?date=${requestedMonth}`,
          //   method: "GET",
          //   headers: { ...rootState.common.apiHeaders },
          // });

          if (response.status !== 200 || !response.data) {
            return [];
          }
          commit("setFilteredEventsDatesList", response.data || []);
          return response.data || [];
        }
      } catch (e) {
        console.log(e);
      }
    },

    async fetchFirstOccurredEventsDates(
      { commit, dispatch, rootState },
      { date = false, emptyList = false } = {}
    ) {
      console.log("first occurred");
      try {
        if (emptyList) {
          commit("setFilteredEventsDatesList", []);
          return [];
        }
        // const requestedMonth = moment().format('YYYY-MM');
        const requestedMonth = moment();
        const currentMonth = moment();
        const getMonthDate = async (month) => {
          const response = await API({
            url: `${window.SVV_API_URL}/widget/filter/meetings/dates?date=${month}`,
            method: "GET",
            headers: { ...rootState.common.apiHeaders },
          });
          if (response.status !== 200 || !response.data) {
            return [];
          }
          return response.data || [];
        };

        let datesList = [];

        do {
          datesList = await getMonthDate(requestedMonth.format("YYYY-MM"));

          requestedMonth.add(1, "month");
        } while (
          datesList.length === 0 &&
          requestedMonth.diff(currentMonth, "month") < 3
        );

        commit("setFilteredEventsDatesList", datesList);
        return datesList || [];
      } catch (e) {
        console.log(e);
      }
    },

    async fetchEventsList(
      { commit, dispatch, state, rootGetters },
      { date = null, page = 1, filteringParams = "" } = {}
    ) {
      commit("setLoading", true);
      let response = null;
      try {
        let params = new URLSearchParams();
        params.append("security", pluginData.security);
        params.append("action", "servv_get_events_filtered_list");
        params.append("page", page);
        params.append("page_size", state.pageSize);
        if (date) {
          params.append("date", date);
        }

        if (filteringParams.length > 0) {
          let filteringParamsString = new URLSearchParams(filteringParams);
          for (const [key, value] of filteringParamsString) {
            params.set(key, value); // use `append` to allow duplicates
          }
        }
        const allRequestParams = rootGetters["search/searchParamsString"];
        console.log(allRequestParams);
        response = await axios.post("/wp-admin/admin-ajax.php", params);

        if (response && response.status === 200 && response.data) {
          // TODO it should be removed after stop maintains of zoom events as price and id are existing in items from Servv dB
          const itemsWithPrice = response.data.meetings.map((event) => {
            const updatedItem = event;

            updatedItem.product_price = event.product ? event.product.price : 0;
            updatedItem.wgtItemId = uuidv4();
            return updatedItem;
          });

          const meetingsListForState = {
            ...response.data,
            meetings: convertEventsDates(itemsWithPrice).sort((a, b) =>
              moment(a.start_time).diff(moment(b.start_time))
            ),
            listIsEmpty: response.data.meetings.length === 0,
          };
          if (!date) {
            commit("setMeetingsList", meetingsListForState);
            commit("setMeetingsListFetched", true);
          } else {
            commit("setMeetingForSelectedDate", {
              ...meetingsListForState,
              meetingsList: meetingsListForState.meetings,
            });
          }
          commit("common/setLoading", false, { root: true });
          if (!date) {
            dispatch("fetchFilteredEventsDates");
          }
        }
      } catch (e) {
        console.log(e);
      }
      commit("setLoading", false);
    },

    async fetchEventsStartCalendarDate({ commit, dispatch, rootState }) {
      // const firstEvent = await dispatch('fetchMeetingsListNormalFlowServvDB', {
      //   page: 1,
      //   page_size: 1,
      //   returnValue: true,
      // });
      const filteredDatesList = await dispatch("fetchFilteredEventsDates");

      if (filteredDatesList && filteredDatesList.length > 0) {
        const startCalendarDate = filteredDatesList[0];

        dispatch("fetchEventsByDateServvDB", {
          date: startCalendarDate.split("T")[0],
        });
      } else {
        commit("setMeetingsByDateScope", {
          scope: {},
          scopeIsEmpty: true,
        });
        commit("setMeetingForSelectedDate", {
          meetingsList: [],
          listIsEmpty: true,
        });
        commit("common/setLoading", false, { root: true });
      }
    },

    async fetchEventsByDateServvDB(
      { commit, state, rootState, dispatch },
      { date = "", filteringParams = "", force = false }
    ) {
      try {
        // if (
        //   (state.meetingsByDateScope.scope[date] !== undefined && !force) ||
        //   (state.meetingsByDateScope.scope[date] !== undefined &&
        //     state.meetingsByDateScope.scope[date].length >= 0 &&
        //     !force)
        // ) {
        //   return;
        // }

        // const filteringParamsString =
        //   filteringParams || rootState.search.searchParamsString || '';

        if (!state.collectionsMode) {
          const filteringParamsString = state.reqParams || "";
          const response = await API({
            url: `${window.SVV_API_URL}/widget/filter/meetings?date=${date}&page=1&page_size=300&${filteringParamsString}`,
            // url: `${window.SVV_API_URL}/widget/filter/meetings?date=${date}${
            //   filteringParamsString.length > 0 ? `&${filteringParamsString}` : ''
            // }`,
            method: "GET",
            headers: { ...rootState.common.apiHeaders },
          });

          // console.log('fetchEventsByDateServvDB response - ', response);
          // console.log('currenciesResponse - ', currenciesResponse);

          if (response.status === 200 && response.data) {
            // TODO it should be removed after stop maintains of zoom events as price and id are existing in items from Servv dB

            const itemsWithPrice = response.data.meetings.map(
              (event, index) => {
                const updatedItem = event;

                updatedItem.product_price = event.product
                  ? event.product.price
                  : 0;
                updatedItem.wgtItemId = uuidv4();

                return updatedItem;
              }
            );

            const fullList = convertEventsDates(itemsWithPrice);
            // console.log(fullList);

            commit("setFullMeetingsList", [
              // ...state.fullMeetingsList,
              ...fullList,
            ]);

            const itemsScope = {};

            forEach(fullList, (event) => {
              const itemDate = event.start_time.split("T")[0];

              if (itemsScope[itemDate] === undefined) {
                itemsScope[itemDate] = [];
              }

              itemsScope[itemDate].push(event);
            });

            let updatedScope = {};
            if (filteringParamsString && filteringParamsString.length > 0) {
              updatedScope = itemsScope;
            } else {
              updatedScope = {
                ...state.meetingsByDateScope.scope,
                ...itemsScope,
              };
            }

            commit("setMeetingsByDateScope", {
              scope: updatedScope,
              scopeIsEmpty: Object.keys(updatedScope).length === 0,
            });
            commit("search/disableParametersFilters", true, { root: true });
            commit("skipMeetingsListPagination");
            commit("common/setLoading", false, { root: true });
          }
        } else {
          dispatch("filterCollectionByDate", date);
        }
      } catch (e) {
        console.log(e);
        console.log(e.response);

        commit("common/setLoading", false, { root: true });
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },
    fetchEventsByParams({ dispatch, rootState, state }, params = "") {
      const {
        show_calendar,
      } = rootState.common.widgetSettings.widget_style_settings;

      if (show_calendar && state.selectedDate.length > 0) {
        dispatch("fetchEventsList", {
          date: state.selectedDate,
          // filteringParams: params,
          // force: true,
        });
      } else if (
        !show_calendar ||
        (show_calendar && state.selectedDate.length === 0)
      ) {
        dispatch("fetchEventsList", {
          filteringParams: params,
        });
      }
    },
    async fetchProductDetails({ rootState }, productId) {
      try {
        const response = await API({
          url: `${window.SVV_API_URL}/widget/product/${productId}`,
          method: "GET",
          headers: { ...rootState.common.apiHeaders },
        });
        if (response.status && response.data) return response.data.handle;
        return null;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    meetings(state) {
      return state.meetings;
    },
    meetingsByDateScope(state) {
      return state.meetingsByDateScope;
    },
    meetingForSelectedDate(state) {
      return state.meetingForSelectedDate;
    },
    selectedDate(state) {
      return state.selectedDate;
    },
    fullMeetingsList(state) {
      return state.fullMeetingsList;
    },
    isCalendarFilterActive(state) {
      return state.selectedDate && state.selectedDate.length > 0;
    },
    filteredEventsDatesList(state) {
      return state.filteredEventsDatesList;
    },
    pageSize(state) {
      return state.pageSize;
    },
    eventsByCategories(state) {
      return state.meetingsGroupedByCategory;
    },
    isBundlePage(state) {
      return state.isBundlePage;
    },
    multiSearchString(state) {
      return state.multiSearchString;
    },
    reqParams(state) {
      return state.reqParams;
    },
    collectionsMode(state) {
      return state.collectionsMode;
    },
    collectionSelectedDate(state) {
      return state.collectionSelectedDate;
    },
  },
};
