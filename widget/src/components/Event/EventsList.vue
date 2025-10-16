<template>
  <div
    class="meetings-list-container"
    ref="meetingsList"
    :class="[
      `${
        widgetSettings.widget_style_settings.ew_events_list_view ===
        'progressive'
          ? eventsPorgressiveView === 'list'
            ? 'list'
            : 'grid'
          : widgetSettings.widget_style_settings.ew_events_list_view
      }-view-mode`,
    ]"
  >
    <ListNotificationPanel v-if="pageSize !== 1" />
    <!-- <ItemsListTypeSwitch /> -->

    <EventsFilters
      v-if="
        windowSize !== 'mobile' &&
          ((widgetSettings.widget_style_settings.ew_events_list_view ===
            'progressive' &&
            !widgetSettings.widget_style_settings.show_filters_expanded) ||
            widgetSettings.widget_style_settings.ew_events_list_view !==
              'progressive') &&
          pageSize !== 1
      "
    />

    <SelectedFiltersPanel
      v-if="
        widgetSettings.widget_style_settings.ew_events_list_view !==
          'progressive' &&
          windowSize !== 'mobile' &&
          pageSize !== 1
      "
    />

    <div class="list-metadata-container" v-if="pageSize !== 1">
      <div>
        <SearchPanel class="list-metadata-location" v-if="pageSize !== 1" />
      </div>
      <div class="svv-list-controls-container">
        <EventsListViewModeSelector
          v-if="
            !widgetSettings.widget_style_settings.ew_hide_view_mode_switch &&
              pageSize !== 1
          "
        />
        <EventsListPageSizeSelector
          item-type="event"
          v-show="!collectionsMode && pageSize !== 1"
        />
      </div>
    </div>

    <!-- With masonry -->
    <div
      v-if="
        widgetSettings.widget_style_settings.ew_events_grid_fluid_mode &&
          ((widgetSettings.widget_style_settings.ew_events_list_view ===
            'grid' &&
            meetingsListForRender.length > 0 &&
            !isListLoading) ||
            (widgetSettings.widget_style_settings.ew_events_list_view ===
              'progressive' &&
              eventsPorgressiveView === 'grid') ||
            (widgetSettings.widget_style_settings.ew_events_list_view ===
              'category' &&
              !isListLoading &&
              meetingsListForRender.length > 0))
      "
      :class="[
        `${
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? eventsPorgressiveView === 'list'
              ? 'list'
              : 'grid'
            : widgetSettings.widget_style_settings.ew_events_list_view
        }-body-fluid`,
      ]"
      ref="eventsGridContainer"
      v-masonry="eventsListMasonryParentContainerId"
      transition-duration="0.3s"
      item-selector=".svv-event-card-item.grid-layout-item"
      fit-width="true"
      origin-left="true"
    >
      <EventListCardItem
        v-for="(event, index) in meetingsListForRender"
        :key="index"
        :list-view-mode="
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? eventsPorgressiveView === 'list'
              ? 'list'
              : 'grid'
            : widgetSettings.widget_style_settings.ew_events_list_view
        "
        :event="event"
        :more-details-label="
          widgetSettings.widget_style_settings.event_more_details_label
        "
        :open-details-item="openDetailsItem"
        :shop-currency="widgetSettings.currency"
        :event-price="getEventPrice(event)"
        :event-date-time="getEventDateTime(event)"
        :on-show-more-details-click="onShowMoreDetailsClick"
        :on-book-event-click="onBookEventClick"
        :separator-data="getEventSeparatorData(event)"
        :on-event-click="onEventClick"
      />

      <div
        ref="bottomLineEventsGridContainer"
        v-waypoint="{
          active: true,
          callback: onListEnd,
          options: intersectionOptions,
        }"
      ></div>
    </div>

    <!-- Without masonry -->
    <div
      v-if="
        !widgetSettings.widget_style_settings.ew_events_grid_fluid_mode &&
          ((widgetSettings.widget_style_settings.ew_events_list_view ===
            'grid' &&
            meetingsListForRender.length > 0 &&
            !isListLoading) ||
            (widgetSettings.widget_style_settings.ew_events_list_view ===
              'progressive' &&
              eventsPorgressiveView === 'grid') ||
            (widgetSettings.widget_style_settings.ew_events_list_view ===
              'category' &&
              !isListLoading &&
              meetingsListForRender.length > 0))
      "
      :class="[
        `${
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? eventsPorgressiveView === 'list'
              ? 'list'
              : 'grid'
            : widgetSettings.widget_style_settings.ew_events_list_view
        }-body`,
      ]"
      ref="eventsGridContainer"
    >
      <EventListCardItem
        v-for="(event, index) in meetingsListForRender"
        :key="index"
        :list-view-mode="
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? eventsPorgressiveView === 'list'
              ? 'list'
              : 'grid'
            : widgetSettings.widget_style_settings.ew_events_list_view
        "
        :event="event"
        :more-details-label="
          widgetSettings.widget_style_settings.event_more_details_label
        "
        :open-details-item="openDetailsItem"
        :shop-currency="widgetSettings.currency"
        :event-price="getEventPrice(event)"
        :event-date-time="getEventDateTime(event)"
        :on-show-more-details-click="onShowMoreDetailsClick"
        :on-book-event-click="onBookEventClick"
        :separator-data="getEventSeparatorData(event)"
        :on-event-click="onEventClick"
      />

      <div
        ref="bottomLineEventsGridContainer"
        v-waypoint="{
          active: true,
          callback: onListEnd,
          options: intersectionOptions,
        }"
      ></div>
    </div>
    <div
      :class="[
        `${
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? 'list'
            : widgetSettings.widget_style_settings.ew_events_list_view
        }-body`,
        `${
          widgetSettings.widget_style_settings.ew_events_list_view ===
            'progressive' && eventsPorgressiveView === 'list'
            ? 'svv-dynamic-list-height'
            : ''
        }`,
      ]"
      v-if="
        widgetSettings.widget_style_settings.ew_events_list_view === 'list' ||
          (widgetSettings.widget_style_settings.ew_events_list_view ===
            'progressive' &&
            eventsPorgressiveView === 'list' &&
            !isListLoading &&
            meetingsListForRender.length > 0)
      "
    >
      <EventListCardItem
        v-for="(event, index) in meetingsListForRender"
        :key="index"
        :list-view-mode="
          widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive'
            ? 'list'
            : widgetSettings.widget_style_settings.ew_events_list_view
        "
        :event="event"
        :more-details-label="
          widgetSettings.widget_style_settings.event_more_details_label
        "
        :open-details-item="openDetailsItem"
        :shop-currency="widgetSettings.currency"
        :event-price="getEventPrice(event)"
        :event-date-time="getEventDateTime(event)"
        :on-show-more-details-click="onShowMoreDetailsClick"
        :on-book-event-click="onBookEventClick"
        :separator-data="getEventSeparatorData(event)"
        :on-event-click="onEventClick"
      />

      <div
        ref="bottomLineEventsGridContainer"
        v-waypoint="{
          active: true,
          callback: onListEnd,
          options: intersectionOptions,
        }"
      ></div>
    </div>
    <MeetingsPagination
      v-show="isFilteredResultPaginationVisible && pageSize !== 1"
    />

    <!--    v-show="!isListInTheEnd && meetingsListForRender.length > 0"-->
    <div
      v-show="false"
      class="events-list-scrolling-marker"
      @click.prevent="onMoreEventsClick"
    >
      <i>&#10094;</i>
    </div>

    <div v-if="isListLoading && !isListEmpty" class="list-loader">
      <div class="svv-loader center"><span></span></div>
    </div>
    <div
      class="svv-empty-events-list"
      v-if="!isListLoading && isListEmpty && !isLoading"
    >
      There are no items to display
    </div>
    <div class="list-result-counter-container">
      <span
        v-show="
          meetingsListForRender &&
            meetingsListForRender.length > 0 &&
            widgetSettings.widget_style_settings.ew_events_counter &&
            pageSize !== 1 &&
            !isLoading &&
            !isListLoading
        "
      >
        {{ meetingsListForRender.length }}
        {{
          meetingsListForRender.length === 1
            ? $t("mainWidget.singleEventItemsCounterLabel")
            : $t("mainWidget.itemsCounterLabel")
        }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment-timezone";
import forEach from "lodash.foreach";
import MeetingsPagination from "@/components/common/MeetingsPagination";
import ListNotificationPanel from "@/components/common/ListNotificationPanel";
import EventListCardItem from "@/components/Event/EventListCardItem";

import EventsFilters from "@/components/Event/EventsFilters";
import { getItemDateTimeDataFormatted, getDateFormat } from "@/services/utils";
import SearchPanel from "@/components/common/SearchPanel";
import EventsListViewModeSelector from "@/components/common/EventsListViewModeSelector";
import EventsListPageSizeSelector from "@/components/common/EventsListPageSizeSelector";
import SelectedFiltersPanel from "@/components/common/SelectedFiltersPanel.vue";
// import EventListItem from '@/components/Event/EventListItem';
import ItemsListTypeSwitch from "@/components/common/ItemsListTypeSwitch";
import EventsFiltersMultiSelectMobile from "@/components/Event/EventsFiltersMultiSelectMobile";
export default {
  name: "EventsList",
  components: {
    MeetingsPagination,
    ListNotificationPanel,
    EventListCardItem,
    EventsFilters,
    SearchPanel,
    EventsListViewModeSelector,
    EventsListPageSizeSelector,
    SelectedFiltersPanel,
    ItemsListTypeSwitch,
    EventsFiltersMultiSelectMobile,
    // EventListItem,
  },
  data() {
    return {
      isListLoading: this.$store.state.events.meetings.meetings.length === 0,
      openDetailsItem: "",
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
      },
      isListInTheEnd: true,
      // eventsListSeparators: {},
      eventsListMasonryParentContainerId: "eventsListMasonryParent1",
    };
  },
  computed: {
    ...mapGetters({
      meetingsList: "events/meetings",
      meetingForSelectedDate: "events/meetingForSelectedDate",
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      isCalendarFilterActive: "events/isCalendarFilterActive",
      isParametersFilterActive: "search/isParametersFilterActive",
      openDesktopCalendar: "common/openDesktopCalendar",
      openItemsList: "common/openItemsList",
      windowSize: "common/windowSize",
      eventsPorgressiveView: "common/eventsPorgressiveView",
      collectionsMode: "events/collectionsMode",
      pageSize: "events/pageSize",
    }),
    shouldShowEventsGrid() {
      return (
        (this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "grid" &&
          this.meetingsListForRender.length > 0 &&
          !this.isListLoading) ||
        (this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "progressive" &&
          this.eventsPorgressiveView === "grid") ||
        (this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "category" &&
          !this.isListLoading &&
          this.meetingsListForRender.length > 0)
      );
    },
    // isListLoading() {
    //   // return this.isLoading ||;
    //   return this.isCalendarFilterActive
    //     ? this.$store.state.events.meetingForSelectedDate.meetingsList
    //         .length === 0
    //     : this.$store.state.events.meetings.meetings.length === 0;
    // },

    meetingsListForRender() {
      const list =
        this.widgetSettings.widget_style_settings.show_calendar &&
        this.isCalendarFilterActive
          ? // !this.widgetSettings.widget_style_settings.ew_show_top_filters &&
            // this.widgetSettings.widget_style_settings.ew_events_list_view !==
            //   "progressive" &&
            // !this.collectionsMode
            this.meetingForSelectedDate.meetingsList
          : this.meetingsList.meetings;

      const getDate = (dateTime) => dateTime.split("T")[0];

      const eventsListSeparators = {};

      if (list && list.length > 0) {
        // eventsListSeparators[getDate(list[0].start_time)] = list[0].id;

        forEach(list, (item, index) => {
          if (!eventsListSeparators[getDate(item.start_time)]) {
            const startTimeInst = moment(item.start_time);
            startTimeInst.locale(
              this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
            );

            if (moment().isSame(startTimeInst, "day")) {
              list[index].separator_label = this.$t(
                "mainWidget.todaySeparatorLabel"
              );
            } else if (
              !moment().isSame(startTimeInst, "day") &&
              startTimeInst.diff(moment(), "day", true) <= 1
            ) {
              list[index].separator_label = this.$t(
                "mainWidget.tomorrowSeparatorLabel"
              );
            } else {
              list[index].separator_label = startTimeInst.format(
                "dddd, MMMM D"
              );
            }

            eventsListSeparators[getDate(item.start_time)] = item.id;
          }
        });
      }
      return list;
    },
    isListEmpty() {
      return this.isCalendarFilterActive
        ? // !this.widgetSettings.widget_style_settings.ew_show_top_filters &&
          // this.widgetSettings.widget_style_settings.ew_events_list_view !==
          //   "progressive" &&
          // !this.collectionsMode
          this.meetingForSelectedDate.listIsEmpty
        : this.meetingsList.listIsEmpty;
    },
    isFilteredResultPaginationVisible() {
      return (
        // this.widgetSettings.widget_style_settings.show_filtered_widget &&
        // this.isParametersFilterActive &&
        !this.isListLoading && this.meetingsListForRender.length > 0
      );
    },
  },
  watch: {
    meetingsList(newVal) {
      if (
        newVal.meetings.length > 0 ||
        (newVal.meetings.length === 0 && newVal.listIsEmpty)
      ) {
        this.isListLoading = false;
      }
      setTimeout(() => {
        this.resetGridCardsHeight();
        this.setGridCardsHeight();
        this.redrawVueMasonry();
      }, 300);
    },
    // isCalendarFilterActive(newVal) {
    //   console.log(newVal);
    // },
    // meetingsListForRender(newVal) {
    //   console.log(newVal);
    //   console.log(newVal.length > 0);
    // },
    // isListLoading(newVal) {
    //   console.log(this.$store.state.events);
    //   console.log("list loading", newVal);
    // },
    isLoading(newVal) {
      console.log("loading", newVal);
    },
    eventsPorgressiveView(newVal) {
      // console.log(newVal);
    },
    // meetingsListForRender(newVal) {},
    meetingForSelectedDate(newVal) {
      if (
        (this.isCalendarFilterActive && newVal.meetingsList.length > 0) ||
        (newVal.meetingsList.length === 0 && newVal.listIsEmpty)
      ) {
        this.isListLoading = false;
      }
      setTimeout(() => {
        this.resetGridCardsHeight();
        this.setGridCardsHeight();
        this.redrawVueMasonry();
      }, 300);
    },
    openDesktopCalendar(newVal) {
      if (newVal && this.$refs.eventsGridContainer)
        this.$refs.eventsGridContainer.style.removeProperty("width");

      setTimeout(() => {
        this.redrawVueMasonry();
      }, 300);
    },

    eventsPorgressiveView(newVal) {
      if (
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
        "progressive"
      ) {
        try {
          if (newVal && this.$refs.eventsGridContainer) {
            this.$refs.eventsGridContainer.removeAttribute("style");
          }
          if (newVal === "list") {
            document.querySelector(".list-body").removeAttribute("style");
          }
        } catch (e) {}
        setTimeout(() => {
          this.resetGridCardsHeight();

          if (newVal === "grid") {
            this.setGridCardsHeight();
            this.redrawVueMasonry();
          }
        }, 300);
      }
    },
    "widgetSettings.widget_style_settings.ew_events_list_view"(newVal) {
      if (newVal === "list" && this.$refs.eventsGridContainer) {
        this.$refs.eventsGridContainer.removeAttribute("style");
      }

      setTimeout(() => {
        this.resetGridCardsHeight();

        if (newVal === "grid") {
          this.setGridCardsHeight();
          this.redrawVueMasonry();
        }
      }, 300);
    },
    openItemsList() {
      if (this.eventsPorgressiveView !== "list") {
        setTimeout(() => {
          this.resetGridCardsHeight();

          if (
            this.widgetSettings.widget_style_settings.ew_events_list_view ===
              "grid" ||
            this.eventsPorgressiveView === "grid" ||
            this.eventsPorgressiveView === "list"
          ) {
            this.setGridCardsHeight();
            this.redrawVueMasonry();
          }
        }, 300);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.setGridCardsHeight();
      this.redrawVueMasonry();
    }, 300);
  },
  methods: {
    ...mapActions({
      subscribeToMeeting: "events/subscribeToMeeting",
      fetchProductDetails: "events/fetchProductDetails",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
    }),
    setGridCardsHeight() {
      const itemsRoot = this.$refs.eventsGridContainer;
      if (
        !itemsRoot ||
        this.widgetSettings.widget_style_settings.ew_events_grid_fluid_mode ||
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "list" ||
        window.outerWidth < 600
      )
        return;

      const itemsList = itemsRoot.querySelectorAll("grid-layout-item");
      let maxHeight = 0;

      if (!itemsList) return;
      itemsList.forEach((item) => {
        if (+item.offsetHeight > maxHeight) maxHeight = +item.offsetHeight;
        item.style.removeProperty("height");
      });

      itemsList.forEach((item) => {
        item.style.height = `${maxHeight}px`;
      });
    },

    resetGridCardsHeight() {
      if (
        this.widgetSettings.widget_style_settings.ew_events_list_view !==
          "list" ||
        (this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "list" &&
          this.eventsPorgressiveView !== "list")
      ) {
        const itemsRoot = this.$refs.eventsGridContainer;

        if (!itemsRoot) return;

        const itemsList = itemsRoot.querySelectorAll("grid-layout-item");
        // console.log(typeof Array.from(itemsList), typeof itemsList);
        itemsList.forEach((item) => {
          item.style.removeProperty("height");
        });
      } else {
        document.querySelector(".list-body").removeAttribute("style");
      }
    },

    redrawVueMasonry() {
      if (
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "list" ||
        this.eventsPorgressiveView === "list"
      )
        return;
      this.$redrawVueMasonry(this.eventsListMasonryParentContainerId);
    },
    getEventDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage,
        getDateFormat(this.widgetSettings.date_format)
      );
    },
    getEventSeparatorData(event) {},
    getEventPrice(event) {
      if (this.collectionsMode) return event.product.price || 0;
      return event.product_price || 0;
    },
    onBookEventClick(e, event) {
      e.preventDefault();
      e.stopPropagation();

      if (!event.is_live_shopping) {
        this.setLoading(true);
        this.subscribeToMeeting(event);
      } else {
        this.onEventClick(event);
      }
    },
    onShowMoreDetailsClick(e, event) {
      e.preventDefault();
      e.stopPropagation();

      if (event.agenda.length > 0 && this.openDetailsItem !== event.wgtItemId) {
        this.openDetailsItem = event.wgtItemId;
      } else {
        this.openDetailsItem = "";
      }
    },
    onMoreEventsClick() {
      try {
        const bottomLine = this.$refs.bottomLineEventsGridContainer.offsetTop;
        this.$refs.eventsGridContainer.scrollTop = bottomLine;
      } catch (e) {
        console.log(e);
      }
    },
    onListEnd({ going }) {
      if (going === this.$waypointMap.GOING_OUT) {
        this.isListInTheEnd = false;
      }

      if (going === this.$waypointMap.GOING_IN) {
        this.isListInTheEnd = true;
      }
    },
    async onEventClick(event) {
      if (!event.product) {
        console.log("Product is not existing");
        return;
      }
      if (!event.product.post_url) return;
      // const productHandle = await this.fetchProductDetails(
      //   event.product.parent_product_id
      // );
      // if (!productHandle) return;
      const productUrl = event.product.post_url;

      try {
        const win = window.open(productUrl, "_blank");
        win.focus();
      } catch (e) {
        window.location.href = productUrl;
      }
    },
  },
};
</script>

<style lang="scss"></style>
