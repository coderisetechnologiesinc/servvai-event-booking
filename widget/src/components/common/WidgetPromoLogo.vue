<template>
  <div
    :class="['servv-logo-container']"
    v-show="widgetSettings && !isBundlePage"
  >
    <a
      class="svv-servv-logo"
      href="https://wpsuperevents.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by WP Super Events
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WidgetPromoLogo",
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      isBundlePage: "events/isBundlePage",
    }),
  },
};
</script>
