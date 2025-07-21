import Vue from 'vue';
import Vuex from 'vuex';

import commonModule from './common';
import eventsModule from './events';
import bundlesModule from './bundles';
import typesModule from './types';
import searchModule from './search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: commonModule,
    events: eventsModule,
    bundles: bundlesModule,
    types: typesModule,
    search: searchModule,
  },
});
