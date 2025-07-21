<template>
  <div
    class="meetings-list-container"
    :class="[
      `${widgetSettings.widget_style_settings.ew_events_list_view}-view-mode`,
    ]"
  >
    <!-- <div class="svv-tabs-steps-control-container">
      <button
        :class="[`svv-tabs-steps${selectedPage === 0 ? '-active' : ''}`]"
        @click="selectedPage = 0"
      >
        {{ $t("mainWidget.filtersStepLabel") }}
      </button>
      <button
        :class="[`svv-tabs-steps${selectedPage === 1 ? '-active' : ''}`]"
        @click="selectedPage = 1"
      >
        {{ $t("mainWidget.resultStypeLabel") }}
      </button>
    </div> -->

    <!-- <EventsList v-if="selectedPage === 1" /> -->
    <!-- <button
      class="svv-go-to-results-button"
      @click="selectedPage = 1"
      v-show="selectedPage === 0"
    >
      {{ $t("mainWidget.goToFiltersResultButton") }}
    </button> -->
    <EventsFiltersMultiSelect
      v-if="widgetSettings.widget_style_settings.show_filters_expanded"
    />
    <div class="svv-workflow-with-calendar">
      <EventsCalendarSection
        :class="{
          'open-desktop-calendar': true,
          'permanently-open': true,
          'svv-calendar-section': true,
        }"
        v-if="
          widgetSettings.widget_style_settings.show_calendar &&
          !widgetSettings.widget_style_settings.ew_show_top_filters &&
          !isBundlePage &&
          !widgetSettings.widget_style_settings.show_filters_expanded
        "
      />

      <EventsList />
    </div>

    <div v-if="isLoading" class="list-loader">
      <div class="svv-loader center"><span></span></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment-timezone";
import forEach from "lodash.foreach";
import MeetingsPagination from "@/components/common/MeetingsPagination";
import ListNotificationPanel from "@/components/common/ListNotificationPanel";
import EventsCalendarSection from "@/components/common/EventsCalendarSection";
import EventListCardItem from "@/components/Event/EventListCardItem";
import EventsFiltersMultiSelectMobile from "@/components/Event/EventsFiltersMultiSelectMobile";
import EventsFiltersMultiSelect from "@/components/Event/EventsFiltersMultiSelect";
import { getItemDateTimeDataFormatted } from "@/services/utils";
import SearchPanel from "@/components/common/SearchPanel";
import EventsListViewModeSelector from "@/components/common/EventsListViewModeSelector";
import EventsListPageSizeSelector from "@/components/common/EventsListPageSizeSelector";
import IconRight from "@/assets/icons/chevron-right-minor.svg";
import IconLeft from "@/assets/icons/chevron-left-minor.svg";
import EventsList from "@/components/Event/EventsList";

export default {
  name: "EventsListProgressive",
  components: {
    MeetingsPagination,
    ListNotificationPanel,
    EventListCardItem,
    SearchPanel,
    EventsListViewModeSelector,
    EventsListPageSizeSelector,
    IconRight,
    IconLeft,
    EventsFiltersMultiSelectMobile,
    EventsList,
    EventsCalendarSection,
    EventsFiltersMultiSelect,
  },
  data() {
    return {
      step: {},
      selectedPage: 0,
      updateLoading: true,
      openDetailsItem: "",
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
      },
      isListInTheEnd: true,
      // eventsListSeparators: {},
      eventsListMasonryParentContainerId: "eventsListMasonryParent1",
      showedItems: {},
      rowLength: 4,
    };
  },
  computed: {
    ...mapGetters({
      meetingsList: "events/meetings",
      eventsByCategories: "events/eventsByCategories",
      meetingForSelectedDate: "events/meetingForSelectedDate",
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      isCalendarFilterActive: "events/isCalendarFilterActive",
      isParametersFilterActive: "search/isParametersFilterActive",
      openDesktopCalendar: "common/openDesktopCalendar",
      openItemsList: "common/openItemsList",
      types: "types/eventTypes",
      windowSize: "common/windowSize",
    }),
    selectedTypes() {
      if (
        this.widgetSettings?.widget_style_settings?.ew_widget_steps &&
        this.widgetSettings.widget_style_settings.ew_widget_steps.length > 0
      ) {
        return JSON.parse(
          this.widgetSettings.widget_style_settings.ew_widget_steps
        )
          .filter((type) => type.selected)
          .sort((a, b) => a.order - b.order);
      } else return [];
    },
    isCategoriesLoading() {
      if (
        this.widgetSettings.widget_style_settings.ew_events_categories.length >
        0
      ) {
        if (this.eventsByCategories.length === 0) return true;
      } else {
        let flag = true;
        this.eventsByCategories.forEach((cat) => {
          if (cat.data) {
            if (cat.data.total_records > 0 && cat.data.meetings.length === 0) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        });
      }
    },
    categoriesList() {
      let categories = [];
      if (
        this.widgetSettings &&
        this.widgetSettings.widget_style_settings &&
        this.widgetSettings.widget_style_settings.ew_events_categories
      ) {
        categories =
          this.widgetSettings.widget_style_settings.ew_events_categories
            .split(",")
            .map((it) => Number.parseInt(it, 10));
      }

      return this.types.categories.filter(
        (cat) => categories.findIndex((c) => c === cat.id) >= 0
      );
    },

    meetingsListForRender() {
      const list =
        this.widgetSettings.widget_style_settings.show_calendar &&
        this.isCalendarFilterActive
          ? this.meetingForSelectedDate.meetingsList
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
              list[index].separator_label =
                startTimeInst.format("dddd, MMMM D");
            }

            eventsListSeparators[getDate(item.start_time)] = item.id;
          }
        });
      }

      return list;
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
    windowSize(newVal) {
      this.rowLength = newVal === "mobile" ? 2 : 4;
    },
    types(newVal) {
      // console.log(newVal);
    },
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
    meetingForSelectedDate(newVal) {
      if (
        newVal.meetingsList.length > 0 ||
        (newVal.meetingsList.length === 0 && newVal.listIsEmpty)
      ) {
        this.isListLoading = false;
      }
    },
    openDesktopCalendar(newVal) {
      if (newVal) this.$refs.eventsGridContainer.style.removeProperty("width");

      setTimeout(() => {
        this.redrawVueMasonry();
      }, 300);
    },
    "widgetSettings.widget_style_settings.ew_events_list_view"(newVal) {
      if (newVal === "list" && this.$refs.eventsGridContainer) {
        try {
          this.$refs.eventsGridContainer.removeAttribute("style");
        } catch (e) {}
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
      setTimeout(() => {
        this.resetGridCardsHeight();

        if (
          this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "grid"
        ) {
          this.setGridCardsHeight();
          this.redrawVueMasonry();
        }
      }, 300);
    },
  },
  mounted() {
    setTimeout(() => {
      this.setGridCardsHeight();
      this.redrawVueMasonry();
    }, 300);
    this.rowLength = this.windowSize === "mobile" ? 2 : 4;
  },
  methods: {
    ...mapActions({
      subscribeToMeeting: "events/subscribeToMeeting",
      fetchProductDetails: "events/fetchProductDetails",
      fetchNextMeetingsInCategory: "events/fetchNextMeetingsInCategory",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
    }),
    setSelectedFilterNumber(number) {
      this.selectedPage = number;
    },

    isListEmpty(category) {
      let categorieEvents = this.eventsByCategories.filter(
        (cat) => cat.category === category
      );
      if (categorieEvents.data && categorieEvents.data.total_records === 0) {
        return true;
      } else return false;
    },
    isListLoading(category) {
      let categorieEvents = this.eventsByCategories.filter(
        (cat) => cat.category === category
      );
      if (categorieEvents.data && categorieEvents.data.meetings.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    async setNextEventsToShow(category) {
      if (
        this.getActiveEventPaginationByCathegory(category) + this.rowLength <
        this.numberOfEventsByCathegory(category) * this.rowLength
      ) {
        if (
          this.getActiveEventPaginationByCathegory(category) + this.rowLength >=
          this.numberOfFetchedEventsByCathegory(category)
        ) {
          await this.fetchNextMeetingsInCategory(category);
          this.showedItems[
            this.showedItems.findIndex((cat) => cat.category.id === category)
          ].showedItemsIndex += this.rowLength;
        } else {
          this.showedItems[
            this.showedItems.findIndex((cat) => cat.category.id === category)
          ].showedItemsIndex += this.rowLength;
        }
      }
    },
    setPrevEventsToShow(category) {
      if (
        this.showedItems[
          this.showedItems.findIndex((cat) => cat.category.id === category)
        ].showedItemsIndex >= this.rowLength
      )
        this.showedItems[
          this.showedItems.findIndex((cat) => cat.category.id === category)
        ].showedItemsIndex -= this.rowLength;
    },
    numberOfFetchedEventsByCathegory(category) {
      if (this.eventsByCategories && this.eventsByCategories.length) {
        let filteredEvents = this.eventsByCategories.filter(
          (events) => Number.parseInt(events.category, 10) === category
        );

        if (
          filteredEvents &&
          filteredEvents.length > 0 &&
          filteredEvents[0].data &&
          filteredEvents[0].data &&
          filteredEvents[0].data.meetings.length > 0
        ) {
          return filteredEvents[0].data.meetings.length;
        }
      }
      return 0;
    },
    numberOfEventsByCathegory(category) {
      if (this.eventsByCategories && this.eventsByCategories.length) {
        let filteredEvents = this.eventsByCategories.filter(
          (events) => Number.parseInt(events.category, 10) === category
        );

        if (
          filteredEvents &&
          filteredEvents.length > 0 &&
          filteredEvents[0].data &&
          filteredEvents[0].data &&
          filteredEvents[0].data.total_records > 0
        ) {
          let tail =
            filteredEvents[0].data.total_records % this.rowLength !== 0 ? 1 : 0;
          return (
            Math.floor(filteredEvents[0].data.total_records / this.rowLength) +
            tail
          );
        }
      }
      return 0;
    },
    getActiveEventPaginationByCathegory(category) {
      let itemsToShow = this.showedItems.find(
        (cat) => cat.category.id === category
      );

      return itemsToShow.showedItemsIndex;
    },
    filterdByCategoryList(category) {
      if (this.eventsByCategories && this.eventsByCategories.length > 0) {
        const filteredEvents = this.eventsByCategories.filter(
          (events) => Number.parseInt(events.category, 10) === category
        );
        if (filteredEvents && filteredEvents.length > 0) {
          const list = filteredEvents[0].data.meetings;

          // const list =
          //   this.widgetSettings.widget_style_settings.show_calendar &&
          //   this.isCalendarFilterActive
          //     ? this.meetingForSelectedDate.meetingsList
          //     : this.meetingsList.meetings;

          const getDate = (dateTime) => {
            return dateTime.split("T")[0];
          };

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
                  list[index].separator_label =
                    startTimeInst.format("dddd, MMMM D");
                }

                eventsListSeparators[getDate(item.start_time)] = item.id;
              }
            });
          }

          let itemsToShow = this.showedItems.find(
            (cat) => cat.category.id === category
          );

          let showedItmesStartIndex = itemsToShow.showedItemsIndex;
          return list.slice(
            showedItmesStartIndex,
            showedItmesStartIndex + this.rowLength
          );
        }
      }
    },
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
      const itemsList = itemsRoot.getElementsByClassName("grid-layout-item");
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
      const itemsRoot = this.$refs.eventsGridContainer;
      if (!itemsRoot) return;
      const itemsList = itemsRoot.getElementsByClassName("grid-layout-item");
      itemsList.forEach((item) => {
        item.style.removeProperty("height");
      });
    },

    redrawVueMasonry() {
      if (
        this.widgetSettings.widget_style_settings.ew_events_list_view === "list"
      )
        return;
      this.$redrawVueMasonry(this.eventsListMasonryParentContainerId);
    },
    getEventDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );
    },
    getEventSeparatorData(event) {},
    getEventPrice(event) {
      return event.product.price || 0;
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
      const productHandle = await this.fetchProductDetails(
        event.product.parent_product_id
      );
      if (!productHandle) return;
      const productUrl = `${window.location.origin}/products/${productHandle}?variant=${event.product.product_id}`;

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
