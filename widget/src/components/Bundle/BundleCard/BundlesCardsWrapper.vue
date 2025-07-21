<template>
  <fragment>
    <div
      v-if="widgetSettings.widget_style_settings.ew_events_list_view === 'grid'"
      :class="[`${widgetSettings.widget_style_settings.ew_events_list_view}-body`]"

      v-masonry="bundlesListMasonryParentContainerId"
      transition-duration="0.3s"
      item-selector=".svv-bundle-card-item.grid-layout-item"
      fit-width="true"
      origin-left="true"
    >
      <slot />
    </div>
    <div
      v-if="widgetSettings.widget_style_settings.ew_events_list_view === 'list'"
      :class="[`${widgetSettings.widget_style_settings.ew_events_list_view}-body`]"
    >
      <slot />
    </div>
  </fragment>
</template>

<script>
import { mapGetters } from 'vuex';
import { Fragment } from 'vue-frag';

export default {
  name: 'BundlesCardsWrapper',
  components: {
    Fragment,
  },
  data() {
    return {
      bundlesListMasonryParentContainerId: 'bundlesListMasonryParent1',
    };
  },
  computed: {
    ...mapGetters({
      widgetSettings: 'common/widgetSettings',
    }),
  },
};
</script>
