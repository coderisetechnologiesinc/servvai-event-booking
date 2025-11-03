<template>
  <div
    :class="[
      'svv-plain-list-container',
      isBundlePage || pageSize === 1 ? 'svv-top-bottom-space-remover' : '',
    ]"
    :style="{
      'padding-left': containerPaddings,
      'padding-right': containerPaddings,
    }"
  >
    <WidgetLoader />
    <div
      v-if="
        widgetSettings.widget_style_settings.ew_events_list_view !==
          'category' && !isBundlePage
      "
      class="svv-plain-list-container-header"
      :class="{
        'with-calendar-toggle-btn':
          widgetSettings.widget_style_settings.show_calendar &&
          !widgetSettings.widget_style_settings.permanently_open_calendar,
        'svv-hader-remover': isBundlePage || pageSize === 1,
      }"
    >
      <div class="svv-plain-list-header-languages-selector-container">
        <!--        v-if="!widgetSettings.widget_style_settings.show_calendar"-->
        <LanguagesSelector
          v-if="
            widgetSettings.widget_style_settings.ew_show_language_selector &&
              widgetSettings.widget_style_settings.ew_events_list_view !==
                'category' &&
              !isBundlePage &&
              pageSize !== 1
          "
        />
      </div>
      <div
        class="svv-plain-list-header-calendar-switch-container"
        :class="{
          'without-lang-selector': !widgetSettings.widget_style_settings
            .ew_show_language_selector,
        }"
        v-if="openItemsList === 'events' && pageSize !== 1"
      >
        <!-- <div
          class="show-desktop-calendar-btn"
          :class="{ active: openDesktopCalendar }"
          @click="onShowDesktopCalendarClick"
          v-if="
            widgetSettings.widget_style_settings.show_calendar &&
            !widgetSettings.widget_style_settings.permanently_open_calendar &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
            !isBundlePage &&
            !widgetSettings.widget_style_settings.ew_show_top_filters
          "
        >
          <div class="show-calendar-btn-label">
            {{ $t("globalWidgetsTranslations.calendarLabel") }}
          </div>
          <CalendarIcon class="show-calendar-btn-icon" />
        </div> -->
      </div>
      <!--      <SearchPanel-->
      <!--        v-if="openItemsList === 'events'"-->
      <!--        class="header-position on-page-wgt"-->
      <!--      />-->

      <!-- <ItemsListTypeSwitch
        class="header-position on-page-wgt"
        v-if="
          widgetSettings.widget_style_settings.ew_events_list_view !==
            'category' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            !isBundlePage &&
            pageSize !== 1 &&
            !collectionsMode
        "
      /> -->
      <!-- <div
        class="svv-plain-list-container-title"
        v-show="
          widgetSettings.widget_style_settings.show_widget_title &&
          !isBundlePage &&
          pageSize !== 1
        "
      >
        {{
          openItemsList === "events"
            ? $t("mainWidget.eventsListTitle")
            : $t("mainWidget.bundlesListTitle")
        }}
      </div> -->
    </div>

    <div
      :class="[
        'events-data-container',
        isBundlePage || pageSize === 1 ? 'svv-min-height-remover' : '',
      ]"
    >
      <WidgetMobileControls
        v-if="
          widgetSettings.widget_style_settings.ew_events_list_view !==
            'category' && !isBundlePage
        "
      />
      <!-- <ItemsListTypeSwitch /> -->
      <EventsCalendar
        :class="{
          'open-desktop-calendar': openDesktopCalendar,
          'permanently-open':
            widgetSettings.widget_style_settings.permanently_open_calendar,
        }"
        v-if="
          widgetSettings.widget_style_settings.show_calendar &&
            widgetSettings.widget_style_settings.permanently_open_calendar &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            !widgetSettings.widget_style_settings.ew_show_top_filters &&
            !isBundlePage &&
            pageSize !== 1
        "
      />

      <EventsFiltersMultiSelectSection
        v-if="
          widgetSettings.widget_style_settings.ew_show_top_filters &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            !isBundlePage &&
            pageSize !== 1
        "
      />
      <EventsListCategories
        v-if="
          openItemsList === 'events' &&
            widgetSettings.widget_style_settings.ew_events_list_view ===
              'category' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            !isBundlePage
        "
      />

      <EventsListProgressive
        v-if="
          openItemsList === 'events' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
            widgetSettings.widget_style_settings.ew_events_list_view ===
              'progressive' &&
            !isBundlePage
        "
      />

      <EventsList
        v-if="
          openItemsList === 'events' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive' &&
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
            !isBundlePage
        "
      />

      <BundlesList v-if="openItemsList === 'bundles'" />
      <BundlesListProductPage v-if="isBundlePage" />

      <WidgetPromoLogo v-if="pageSize !== 1" />
    </div>
    <MountingPortal append mountTo="body">
      <div
        v-if="
          widgetSettings.widget_style_settings.show_calendar && pageSize !== 1
        "
        class="svv-mobile-panel-wrapper svv-mobile-calendar-panel"
        :class="{ 'open-mobile-calendar': openMobileCalendar }"
      >
        <!-- <EventsCalendar /> -->
      </div>
      <div class="svv-mobile-filters-overlay" v-if="openMobileFilters"></div>
      <div
        v-if="openItemsList === 'events'"
        class="svv-mobile-panel-wrapper svv-mobile-filters-panel"
        :class="{ 'open-mobile-filters': openMobileFilters }"
      >
        <EventsFilters />
        <!-- <EventsFiltersMultiSelectSection
          v-if="
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'category' &&
              !isBundlePage &&
              pageSize !== 1
          "
        /> -->
      </div>
    </MountingPortal>
  </div>
</template>

<script>
import EventsCalendar from "@/components/common/EventsCalendar";
import WidgetMobileControls from "@/components/common/WidgetMobileControls";
import EventsFilters from "@/components/Event/EventsFilters";
import EventsFiltersMultiSelectSection from "@/components/Event/EventsFiltersMultiSelectSection";
import LanguagesSelector from "@/components/common/LanguagesSelector";
import CalendarIcon from "@/assets/icons/calendar.svg";
import EventsFiltersMultiSelectMobile from "@/components/Event/EventsFiltersMultiSelectMobile";
import WidgetLoader from "@/components/common/WidgetLoader";
import EventsList from "@/components/Event/EventsList";
import EventsListCategories from "@/components/Event/EventsListCategories";
import EventsListProgressive from "@/components/Event/EventsListProgressive";
import BundlesList from "@/components/Bundle/BundlesList";
import BundlesListProductPage from "@/components/Bundle/BundlesListProductPage";
import WidgetPromoLogo from "@/components/common/WidgetPromoLogo";
import SearchPanel from "@/components/common/SearchPanel";
import { mapActions, mapGetters, mapMutations } from "vuex";
import ItemsListTypeSwitch from "@/components/common/ItemsListTypeSwitch";
import SelectedFiltersPanel from "@/components/common/SelectedFiltersPanel.vue";

export default {
  name: "PlainListVIewMode",
  data() {
    return {
      firstFetchEventsByCategories: false,
    };
  },
  components: {
    EventsCalendar: () => import("@/components/common/EventsCalendar.vue"),
    WidgetMobileControls: () =>
      import("@/components/common/WidgetMobileControls.vue"),
    // EventsFilters: () => import("@/components/Event/EventsFilters.vue"),
    // EventsFiltersMultiSelectSection: () =>
    //   import("@/components/Event/EventsFiltersMultiSelectSection.vue"),
    // LanguagesSelector: () =>
    //   import("@/components/common/LanguagesSelector.vue"),
    CalendarIcon: () => import("@/assets/icons/calendar.svg"),
    EventsFiltersMultiSelectMobile: () =>
      import("@/components/Event/EventsFiltersMultiSelectMobile.vue"),
    WidgetLoader: () => import("@/components/common/WidgetLoader.vue"),
    EventsList: () => import("@/components/Event/EventsList.vue"),
    EventsListCategories: () =>
      import("@/components/Event/EventsListCategories.vue"),
    EventsListProgressive: () =>
      import("@/components/Event/EventsListProgressive.vue"),
    BundlesList: () => import("@/components/Bundle/BundlesList.vue"),
    BundlesListProductPage: () =>
      import("@/components/Bundle/BundlesListProductPage.vue"),
    WidgetPromoLogo: () => import("@/components/common/WidgetPromoLogo.vue"),
    SearchPanel: () => import("@/components/common/SearchPanel.vue"),
    ItemsListTypeSwitch: () =>
      import("@/components/common/ItemsListTypeSwitch.vue"),
    SelectedFiltersPanel: () =>
      import("@/components/common/SelectedFiltersPanel.vue"),
  },
  watch: {
    meetingsList(newVal) {
      if (
        newVal.meetings.length > 0 &&
        this.widgetSettings.widget_style_settings.ew_show_quantity &&
        !this.isBundlePage
      ) {
        this.fetchEventQuantity();
      }
      if (
        newVal.meetings.length > 0 &&
        this.collectionsMode &&
        !this.isBundlePage
      ) {
        this.updateEventsImages();
      }
    },
    eventsByCategories(newVal) {
      if (
        this.widgetSettings.widget_style_settings.ew_show_quantity &&
        newVal.length > 0 &&
        !this.isBundlePage
      ) {
        this.fetchEventQuantityByCategory();
      }
    },
    types(newVal) {
      if (
        newVal &&
        newVal.categories &&
        newVal.categories.length > 0 &&
        !this.firstFetchEventsByCategories &&
        !this.isBundlePage &&
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "category"
      ) {
        this.firstFetchEventsByCategories = true;
      }
    },
    meetingForSelectedDate(newVal) {
      if (
        newVal.meetingsList.length > 0 &&
        this.widgetSettings.widget_style_settings.ew_show_quantity &&
        !this.isBundlePage
      ) {
        this.fetchEventQuantityByDate();
      }
    },
    firstFetchEventsByCategories(newVal) {
      if (
        newVal &&
        this.widgetSettings &&
        this.widgetSettings.widget_style_settings &&
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "category"
      ) {
        this.fetchMeetingsGroupedByCategory();
      }
    },
  },
  computed: {
    ...mapGetters({
      types: "types/eventTypes",
      meetingsList: "events/meetings",
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      openMobileCalendar: "common/openMobileCalendar",
      openMobileFilters: "common/openMobileFilters",
      openDesktopCalendar: "common/openDesktopCalendar",
      isStepsCompleted: "common/isStepsCompleted",
      openItemsList: "common/openItemsList",
      isBundlePage: "events/isBundlePage",
      meetingForSelectedDate: "events/meetingForSelectedDate",
      eventsByCategories: "events/eventsByCategories",
      windowSize: "common/windowSize",
      pageSize: "events/pageSize",
      collectionsMode: "events/collectionsMode",
    }),
    containerPaddings() {
      return (
        this.widgetSettings.widget_style_settings
          .on_page_wgt_container_padding || "0px"
      );
    },
  },
  async mounted() {
    await this.fetchEventTypes();
    const selectedCollections = document.querySelectorAll(
      ".servv-event-collection"
    );
    if (selectedCollections.length > 0) {
      let collections = [];
      selectedCollections.forEach((collection) => {
        collections.push(Number.parseInt(collection.id));
      });

      await this.fetchEventsFromCollections({ collections: collections });
    } else if (
      this.widgetSettings &&
      this.widgetSettings.widget_style_settings &&
      this.widgetSettings.widget_style_settings.ew_events_list_view !==
        "category" &&
      !this.isBundlePage
    ) {
      // this.fetchMeetingsList({ firstFetch: true, withDefaultFilter: true });
      this.fetchEventsList();
      // this.fetchBundlesList({ firstFetch: true });
    }
    if (this.isBundlePage) {
      // this.fetchBundlesList({ firstFetch: true });
      this.fetchBundlesById();
    }
  },
  methods: {
    ...mapActions({
      fetchMeetingsList: "events/fetchMeetingsList",
      fetchEventsList: "events/fetchEventsList",
      fetchBundlesList: "bundles/fetchBundlesList",
      fetchEventTypes: "types/fetchEventTypes",
      fetchMeetingsGroupedByCategory: "events/fetchMeetingsGroupedByCategory",
      fetchEventQuantity: "events/fetchEventQuantity",
      fetchEventQuantityByDate: "events/fetchEventQuantityByDate",
      fetchEventQuantityByCategory: "events/fetchEventQuantityByCategory",
      fetchBundlesById: "bundles/fetchBundlesById",
      fetchEventsFromCollections: "events/fetchEventsFromCollections",
      updateEventsImages: "events/updateEventsImages",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setOpenDesktopCalendar: "common/setOpenDesktopCalendar",
    }),
    onShowDesktopCalendarClick() {
      this.setOpenDesktopCalendar(!this.openDesktopCalendar);
    },
  },
};
</script>
