import axios from "axios";
import { processError } from "@/services/utils";

export default {
  namespaced: true,
  state: {
    eventTypes: {
      categories: [],
      languages: [],
      locations: [],
      members: [],
      teams: [],
    },
    defaultTypes: {
      category_id: null,
      location_id: null,
      member_id: null,
      language_id: null,
    },
  },
  mutations: {
    setEventTypes(state, payload) {
      state.eventTypes = payload;
    },
    setDefaultTypes(state, payload) {
      state.defaultTypes = payload;
    },
  },
  actions: {
    async fetchEventTypes({ commit, dispatch }) {
      const TYPES_KEY = "servv_event_types";
      const TYPES_TTL = 5 * 60 * 1000; // 5 minutes

      try {
        // ✅ Check for cached data first
        const cached = localStorage.getItem(TYPES_KEY);
        if (cached) {
          try {
            const { value, expiry } = JSON.parse(cached);
            if (expiry && Date.now() < expiry) {
              console.log("Loaded event types from cache");
              commit("setEventTypes", value);
              dispatch("getDefaultTypes");
              return;
            } else {
              localStorage.removeItem(TYPES_KEY);
            }
          } catch {
            localStorage.removeItem(TYPES_KEY);
          }
        }

        let params = new URLSearchParams();
        params.append("security", servvAjax.nonce);
        params.append("action", "servv_get_types_list");

        const response = await axios.post(servvAjax.ajax_url, params);

        if (response.status === 200) {
          commit("setEventTypes", response.data);
          dispatch("getDefaultTypes");

          localStorage.setItem(
            TYPES_KEY,
            JSON.stringify({
              value: response.data,
              expiry: Date.now() + TYPES_TTL,
            })
          );
        }
      } catch (e) {
        console.log(e);
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },

    async getDefaultTypes({ commit, state }) {
      const wrapper = document.querySelector("#widget-wrapper");
      if (wrapper) {
        try {
          const location = wrapper.dataset.widgetLocation.trim();
          const category = wrapper.dataset.widgetCategory.trim();
          const language = wrapper.dataset.widgetLanguage.trim();
          const member = wrapper.dataset.widgetMember.trim();

          let defaultFilters = { ...state.defaultTypes };

          if (location && location.length > 0) {
            if (location.indexOf("$") >= 0) {
              let locations = location.split("$");
              let defaultLocations = [];
              locations.forEach((l) => {
                let selectedLocation = state.eventTypes.locations.filter(
                  (loc) => loc.name === l.trim()
                );
                if (selectedLocation.length > 0) {
                  defaultLocations.push(selectedLocation[0].id);
                }
              });
              defaultFilters.location_id = defaultLocations.join(",");
            } else {
              let selectedLocation = state.eventTypes.locations.filter(
                (loc) => loc.name === location
              );
              if (selectedLocation.length > 0) {
                defaultFilters.location_id = selectedLocation[0].id;
              }
            }
          }
          if (language && language.length > 0) {
            if (language.indexOf("$") >= 0) {
              let languages = language.split("$");
              let defaultLanguages = [];
              languages.forEach((l) => {
                let selectedLanguage = state.eventTypes.languages.filter(
                  (lang) => lang.name === l.trim()
                );
                if (selectedLanguage.length > 0) {
                  defaultLanguages.push(selectedLanguage[0].id);
                }
              });
              defaultFilters.language_id = defaultLanguages.join(",");
            } else {
              let selectedLanguage = state.eventTypes.languages.filter(
                (lang) => lang.name === language
              );
              if (selectedLanguage.length > 0) {
                defaultFilters.language_id = selectedLanguage[0].id;
              }
            }
          }
          if (category && category.length > 0) {
            if (category.indexOf("$") >= 0) {
              let categories = category.split("$");
              let defaultCategories = [];
              categories.forEach((c) => {
                let selectedCategory = state.eventTypes.categories.filter(
                  (cat) => cat.name === c.trim()
                );
                if (selectedCategory.length > 0) {
                  defaultCategories.push(selectedCategory[0].id);
                }
              });
              defaultFilters.category_id = defaultCategories.join(",");
            } else {
              let selectedCategory = state.eventTypes.categories.filter(
                (cat) => cat.name === category
              );
              if (selectedCategory.length > 0) {
                defaultFilters.category_id = selectedCategory[0].id;
              }
            }
          }
          if (member && member.length > 0) {
            if (member.indexOf("$") >= 0) {
              let members = member.split("$");
              let defaultMembers = [];
              members.forEach((m) => {
                let selectedMember = state.eventTypes.members.filter(
                  (memb) => memb.name === m.trim()
                );
                if (selectedMember.length > 0) {
                  defaultMembers.push(selectedMember[0].id);
                }
              });
              defaultFilters.member_id = defaultMembers.join(",");
            } else {
              let selectedMember = state.eventTypes.members.filter(
                (memb) => memb.name === member
              );
              if (selectedMember.length > 0) {
                defaultFilters.member_id = selectedMember[0].id;
              }
            }
          }

          commit("setDefaultTypes", defaultFilters);
        } catch (e) {
          console.log("Unable to get default filters");
        }
      }
    },
  },
  getters: {
    eventTypes(state) {
      return state.eventTypes;
    },
    defaultTypes(state) {
      return state.defaultTypes;
    },
  },
};
