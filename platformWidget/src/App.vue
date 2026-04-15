<script setup>
import { onMounted } from "vue";
import { configure } from "vue-gtag";
import { useCommonStore } from "@/stores/common";
import EventCard from "./components/EventList.vue";

const common = useCommonStore();
onMounted(async () => {
  await common.fetchWidgetSettings();

  const measurementId =
    common.googleAnalyticsId ??
    (() => {
      try {
        return (
          JSON.parse(
            window.__SERVV_SETTINGS__?.settings?.widget_style_settings ?? "{}",
          )?.google_analytics_id ?? null
        );
      } catch {
        return null;
      }
    })();

  if (measurementId) {
    try {
      configure({ tagId: measurementId });
      console.log("GA Analytics configured:", measurementId);
    } catch (e) {
      console.error("Failed to initialize GA Analytics:", e);
    }
  } else {
    console.warn("GA Analytics: no measurement ID found");
  }
});
</script>

<template>
  <EventCard />
</template>
<style lang="css">
#servv-platform-widget {
  width: fit-content;
  padding: 1px;
  margin: 0 auto;
}
</style>
