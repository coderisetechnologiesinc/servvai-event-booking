<template>
  <div
    :class="['servv-logo-container']"
    v-show="widgetSettings && !isBundlePage"
  >
    <a class="svv-servv-logo" href="https://servv.ai" target="_blank">
      Powered by
      <img :src="getPlaceholder()" alt="Servv.ai" />
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import servvLogo from "@/assets/images/servv-logo-black.png";
export default {
  name: "WidgetPromoLogo",
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      isBundlePage: "events/isBundlePage",
    }),
  },
  methods: {
    getPlaceholder() {
      return window.servvAjax.assets_url + "img/servv-logo-black.png";
    },
  },
};
</script>
