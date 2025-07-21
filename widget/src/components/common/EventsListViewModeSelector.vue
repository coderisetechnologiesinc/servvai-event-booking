<template>
  <div class="svv-events-list-view-mode-selector">
    <a
      href="#"
      class="svv-events-list-view-mode-selector-item"
      @click.prevent="() => setEventsListViewMode('list')"
      :class="{
        'svv-active-view-mode':
          widgetSettings.widget_style_settings.ew_events_list_view === 'list' ||
          (widgetSettings.widget_style_settings.ew_events_list_view ===
            'progressive' &&
            eventsPorgressiveView === 'list'),
      }"
    >
      <ListViewIcon class="svv-view-mode-icon svv-list-view-mode" />
    </a>
    <a
      href="#"
      class="svv-events-list-view-mode-selector-item"
      @click.prevent="() => setEventsListViewMode('grid')"
      :class="{
        'svv-active-view-mode':
          widgetSettings.widget_style_settings.ew_events_list_view === 'grid' ||
          (widgetSettings.widget_style_settings.ew_events_list_view ===
            'progressive' &&
            eventsPorgressiveView === 'grid'),
      }"
    >
      <TableViewIcon class="svv-view-mode-icon svv-table-view-mode" />
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import ListViewIcon from "@/assets/icons/list-view-flat.svg";
import TableViewIcon from "@/assets/icons/grid-view-flat.svg";

export default {
  name: "EventsListViewModeSelector",
  components: {
    ListViewIcon,
    TableViewIcon,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      eventsPorgressiveView: "common/eventsPorgressiveView",
    }),
  },
  methods: {
    ...mapMutations({
      setEventsListViewMode: "common/setEventsListViewMode",
    }),
  },
};
</script>
