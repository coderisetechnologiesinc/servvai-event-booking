<template>
  <div class="svv-items-list-type-switch-container">
    <div
      class="svv-items-list-type-switch-inner-container"
      v-if="
        widgetSettings.widget_style_settings.ew_available_lists &&
        widgetSettings.widget_style_settings.ew_available_lists.length > 1
      "
    >
      <div
        v-if="
          widgetSettings.widget_style_settings.ew_available_lists.includes(
            'events'
          )
        "
        class="svv-switch-toggle-item"
        :class="{ active: openItemsList === 'events' }"
        @click.prevent="() => onSwitchChange('events')"
      >
        {{ $t("mainWidget.widgetEventsListSwitchLabel") }}
      </div>
      <div
        v-if="
          widgetSettings.widget_style_settings.ew_available_lists.includes(
            'bundles'
          )
        "
        class="svv-switch-toggle-item"
        :class="{ active: openItemsList === 'bundles' }"
        @click.prevent="() => onSwitchChange('bundles')"
      >
        {{ $t("mainWidget.widgetBundlesListSwitchLabel") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "ItemsListTypeSwitch",
  props: {
    activeType: {
      type: String,
      default: "events",
    },
  },

  data() {
    return {
      currentSearchString: "",
    };
  },
  computed: {
    ...mapGetters({
      openItemsList: "common/openItemsList",
      widgetSettings: "common/widgetSettings",
    }),
  },
  watch: {},
  methods: {
    ...mapMutations({
      setOpenItemsList: "common/setOpenItemsList",
    }),

    onSwitchChange(itemsType) {
      this.setOpenItemsList(itemsType);
    },
  },
};
</script>

<style lang="scss" scoped></style>
