<template>
  <div class="svv-mobile-wgt-controls-container">
    <div class="svv-mobile-lang-selector-wrapper">
      <LanguagesSelector
        v-if="widgetSettings.widget_style_settings.ew_show_language_selector"
      />
      <div v-else></div>
      <!-- <ItemsListTypeSwitch class="mobile-controls-position on-page-wgt" /> -->
    </div>
    <EventsCalendar
      v-if="widgetSettings.widget_style_settings.permanently_open_calendar"
      :class="{
        // 'open-desktop-calendar': true,
        'permanently-open':
          widgetSettings.widget_style_settings.permanently_open_calendar,
      }"
    />
    <div
      class="svv-mobile-filters-controls"
      v-if="
        openItemsList === 'events' &&
          (widgetSettings.widget_style_settings.show_calendar ||
            isFiltersPanelVisible)
      "
    >
      <div class="main-controls-items-container">
        <!-- <div
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
        </div> -->
        <div
          class="show-filters-btn"
          @click="onShowMobileFiltersClick"
          v-if="isFiltersPanelVisible"
        >
          <MobileFilter class="show-filters-btn-icon" />
          <div class="show-filters-btn-label">
            {{ $t("globalWidgetsTranslations.filtersLabel") }}
          </div>
        </div>
      </div>

      <div class="events-filters-controls">
        <a
          class="cleat-all-filters"
          href="#"
          @click.prevent="onClearAllFilters"
        >
          <CloseIcon /><span>{{ $t("mainWidget.clearFiltersLabel") }}</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import CalendarIcon from "@/assets/icons/calendar.svg";
import MobileFilter from "@/assets/icons/mobilefilter.svg";
import LanguagesSelector from "@/components/common/LanguagesSelector";
import TrashIcon from "@/assets/images/icons/refresh.svg";
import ItemsListTypeSwitch from "@/components/common/ItemsListTypeSwitch";
import CloseIcon from "@/assets/images/icons/close.svg";
import EventsCalendar from "@/components/common/EventsCalendar";
export default {
  name: "WidgetMobileControls",
  components: {
    CalendarIcon,
    EventsCalendar,
    MobileFilter,
    LanguagesSelector,
    TrashIcon,
    ItemsListTypeSwitch,
    CloseIcon,
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
