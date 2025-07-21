<template>
  <div
    :class="['servv-logo-container']"
    v-show="widgetSettings && !isBundlePage"
  >
    <a class="svv-servv-logo" href="https://servv.ai" target="_blank">
      Powered by
      <img
        src="https://servv-email.s3.us-east-2.amazonaws.com/email-template-designs/servv-logo-black.png"
        alt="Servv.ai"
      />
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
