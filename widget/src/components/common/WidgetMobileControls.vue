<template>
  <div class="svv-mobile-wgt-controls-container">
    <div class="svv-mobile-lang-selector-wrapper">
      <LanguagesSelector
        v-if="widgetSettings.widget_style_settings.ew_show_language_selector"
      />
      <div v-else></div>
      <!-- <ItemsListTypeSwitch class="mobile-controls-position on-page-wgt" /> -->
    </div>
    <div
      class="svv-mobile-filters-controls"
      v-if="
        openItemsList === 'events' &&
        (widgetSettings.widget_style_settings.show_calendar ||
          isFiltersPanelVisible)
      "
    >
      <div class="main-controls-items-container">
        <div
          class="show-calendar-btn"
          @click="onShowMobileCalendarClick"
          v-if="
            widgetSettings.widget_style_settings.show_calendar &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            !this.widgetSettings.widget_style_settings.ew_show_top_filters
          "
        >
          <div class="show-calendar-btn-label">
            {{ $t("globalWidgetsTranslations.calendarLabel") }}
          </div>
          <CalendarIcon class="show-calendar-btn-icon" />
        </div>
        <div
          class="show-filters-btn"
          @click="onShowMobileFiltersClick"
          v-if="isFiltersPanelVisible"
        >
          <div class="show-filters-btn-label">
            {{ $t("globalWidgetsTranslations.filtersLabel") }}
          </div>
          <FilterIcon class="show-filters-btn-icon" />
        </div>
      </div>

      <a class="cleat-all-filters" href="#" @click.prevent="onClearAllFilters">
        <TrashIcon width="20" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import CalendarIcon from "@/assets/icons/calendar.svg";
import FilterIcon from "@/assets/images/icons/filters-vertical.svg";
import LanguagesSelector from "@/components/common/LanguagesSelector";
import TrashIcon from "@/assets/images/icons/refresh.svg";
import ItemsListTypeSwitch from "@/components/common/ItemsListTypeSwitch";

export default {
  name: "WidgetMobileControls",
  components: {
    CalendarIcon,
    FilterIcon,
    LanguagesSelector,
    TrashIcon,
    ItemsListTypeSwitch,
  },
  computed: {
    ...mapGetters({
      openMobileCalendar: "common/openMobileCalendar",
      openMobileFilters: "common/openMobileFilters",
      isFiltersPanelVisible: "common/isFiltersPanelVisible",
      widgetSettings: "common/widgetSettings",
      openItemsList: "common/openItemsList",
    }),
  },
  methods: {
    ...mapMutations({
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
      setLoading: "common/setLoading",
    }),
    ...mapActions({
      clearAllFilters: "search/clearAllFilters",
    }),
    onShowMobileCalendarClick() {
      this.setOpenMobileFilters(false);
      this.setOpenMobileCalendar(!this.openMobileCalendar);
    },
    onShowMobileFiltersClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(!this.openMobileFilters);
    },
    async onClearAllFilters() {
      await this.setLoading(true);
      await this.clearAllFilters();
    },
  },
};
</script>
