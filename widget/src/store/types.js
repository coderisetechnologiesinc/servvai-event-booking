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
  },
  mutations: {
    setEventTypes(state, payload) {
      state.eventTypes = payload;
    },
  },
  actions: {
    async fetchEventTypes({ commit, rootState }) {
      try {
        // const response = await API({
        //   url: `${window.SVV_API_URL}/widget/filter/types`,
        //   method: "GET",
        //   headers: { ...rootState.common.apiHeaders },
        // });
        let params = new URLSearchParams();
        params.append("security", pluginData.security);
        params.append("action", "servv_get_types_list");

        const response = await axios.post("/wp-admin/admin-ajax.php", params);

        if (response.status === 200) {
          commit("setEventTypes", response.data);
        }
      } catch (e) {
        console.log(e);
        commit("common/setWidgetNotice", processError(e), { root: true });
      }
    },
  },
  getters: {
    eventTypes(state) {
      return state.eventTypes;
    },
  },
};
