import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import commonModule from "./common";
import eventsModule from "./events";
import bundlesModule from "./bundles";
import typesModule from "./types";
import searchModule from "./search";

Vue.use(Vuex);

const EXPIRATION_TIME = 5 * 60 * 1000;

const storageWithExpiry = {
  getItem: (key) => {
    const itemStr = window.localStorage.getItem(key);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr);
      if (Date.now() > item.expiry) {
        window.localStorage.removeItem(key);
        return null;
      }
      return JSON.stringify(item.value);
    } catch {
      return null;
    }
  },
  setItem: (key, value) => {
    const item = {
      value: JSON.parse(value),
      expiry: Date.now() + EXPIRATION_TIME,
    };
    window.localStorage.setItem(key, JSON.stringify(item));
  },
  removeItem: (key) => window.localStorage.removeItem(key),
};

const vuexLocal =
  typeof window !== "undefined"
    ? new VuexPersistence({
        storage: storageWithExpiry,
        modules: ["common", "types"],
      })
    : null;

export default new Vuex.Store({
  modules: {
    common: commonModule,
    events: eventsModule,
    bundles: bundlesModule,
    types: typesModule,
    search: searchModule,
  },
  plugins: vuexLocal ? [vuexLocal.plugin] : [],
});
