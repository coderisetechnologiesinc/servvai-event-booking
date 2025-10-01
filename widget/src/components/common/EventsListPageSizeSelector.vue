<template>
  <div class="svv-events-list-page-size-selector">
    <a
      href="#"
      class="svv-events-list-page-size-selector-item"
      @click.prevent="() => setListPageSize(12)"
      :class="{
        'svv-active-page-size': currentPageSize === 12,
      }"
    >
      12
    </a>
    <a
      href="#"
      class="svv-events-list-page-size-selector-item"
      @click.prevent="() => setListPageSize(24)"
      :class="{
        'svv-active-page-size': currentPageSize === 24,
      }"
    >
      24
    </a>
    <a
      href="#"
      class="svv-events-list-page-size-selector-item"
      @click.prevent="() => setListPageSize(48)"
      :class="{
        'svv-active-page-size': currentPageSize === 48,
      }"
    >
      48
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "EventsListPageSizeSelector",
  components: {},
  props: {
    itemType: {
      type: String,
      default: "event",
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      pageSizeEvents: "events/pageSize",
      pageSizeBundles: "bundles/pageSize",
    }),
    currentPageSize() {
      if (this.itemType === "event") return this.pageSizeEvents;
      if (this.itemType === "bundle") return this.pageSizeBundles;
      return 12;
    },
  },
  methods: {
    ...mapMutations({
      setEventsPageSize: "events/setEventsPageSize",
      setBundlesPageSize: "bundles/setBundlesPageSize",
      setLoading: "common/setLoading",
    }),
    ...mapActions({
      // fetchMeetingsList: "events/fetchMeetingsList",
      fetchEventsList: "events/fetchEventsList",
      fetchBundlesList: "bundles/fetchBundlesList",
    }),
    async setListPageSize(size) {
      if (this.itemType === "event") {
        this.setEventsPageSize(size);
        this.setLoading(true);
        await this.fetchEventsList();
        return;
      }
      if (this.itemType === "bundle") {
        this.setBundlesPageSize(size);
        this.setLoading(true);
        await this.fetchBundlesList();
        return;
      }
    },
  },
};
</script>
