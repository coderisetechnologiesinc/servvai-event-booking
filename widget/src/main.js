import Vue from "vue";
import VModal from "vue-js-modal/dist/index.nocss";
import VCalendar from "v-calendar";
import vSelect from "vue-select";
import VTooltip from "v-tooltip";
import VueWaypoint from "vue-waypoint";
import PortalVue from "portal-vue";
import { VueMasonryPlugin } from "vue-masonry";
// import { Fragment } from 'vue-frag';
import store from "./store";
import "@/assets/styles/scss/main.scss";
import App from "./App.vue";
import { i18n, setAppInstanceForI18n } from "./services/i18n";

// Waypoint plugin
Vue.config.productionTip = false;

Vue.use(VueWaypoint);
Vue.use(PortalVue);
Vue.use(VModal);
Vue.use(VCalendar);
Vue.component("v-select", vSelect);
Vue.use(VTooltip);
Vue.use(VueMasonryPlugin);
// Vue.component('Fragment', Fragment);
// console.log("load vue app");
const appInstance = new Vue({
  store,
  render: (h) => h(App),
  i18n,
}).$mount("#servv-widget");

setAppInstanceForI18n(appInstance);
