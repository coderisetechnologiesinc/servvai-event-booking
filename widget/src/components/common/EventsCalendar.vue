<template>
  <div class="svv-events-calendar-container">
    <div class="svv-events-calendar-container-inner">
      <div class="svv-calendar-section-header">
        <!--        <LanguagesSelector />-->
        <a
          @click.prevent="onCloseMobileCalendarClick"
          class="svv-close-mobile-calendar-btn"
          href="#"
        >
          <CloseIcon />
        </a>
      </div>
      <div
        class="calendar-wrapper"
        :class="{ 'active-filter': isCalendarFilterActive }"
      >
        <div
          v-if="
            ((openItemsList === 'events' &&
              (filteredEventsDatesList.length === 0 ||
                isEmptyMonthCollectionView)) ||
              (openItemsList === 'bundles' &&
                getBundlesDatesInThisMonth.length === 0)) &&
              !isCalendarLoading
          "
          class="svv-next-month-button"
        >
          <span>{{ $t("mainWidget.labelForMonthWithoutEvents") }}</span>
          <a href="#" class="svv-next-month" @click="(e) => nextMonth(e)">
            <!--          <AddCartIcon />-->
            {{ $t("mainWidget.nextMonthButton") }}
          </a>
        </div>

        <v-calendar
          ref="svvCalendarComponent"
          class="svv-datepicker"
          :class="{
            'svv-blured-calendar':
              (openItemsList === 'events' &&
                (filteredEventsDatesList.length === 0 ||
                  isEmptyMonthCollectionView)) ||
              (openItemsList === 'bundles' &&
                getBundlesDatesInThisMonth.length === 0),
          }"
          is-expanded
          :attributes="calendarAttrs"
          :min-date="new Date()"
          :locale="widgetsCurrentLanguage || widgetsDefaultLanguage"
          v-model="selectedDate"
          @dayclick="onDayClick"
          @update:from-page="onMonthChange"
          title-position="center"
          :disabled-dates="{ start: null, end: null }"
          :available-dates="
            openItemsList === 'events'
              ? filteredEventsDatesList
              : filteredBundlesDatesList
          "
          :masks="calendarMasks"
        />

        <div class="calendar-wrapper-controls">
          <!--          <a-->
          <!--            class="cleat-all-filters clear-calendar-filter-btn"-->
          <!--            href="#"-->
          <!--            @click.prevent="onClearAllFilters"-->
          <!--          >-->
          <!--            <TrashIcon width="20" />-->
          <!--            <span>{{ $t('mainWidget.clearFiltersLabel') }}</span>-->
          <!--          </a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment-timezone";
import forEach from "lodash.foreach";

import TrashIcon from "@/assets/images/icons/refresh.svg";
import LanguagesSelector from "@/components/common/LanguagesSelector";
import CloseIcon from "@/assets/images/icons/close.svg";

export default {
  name: "EventsDataContainer",
  components: {
    TrashIcon,
    LanguagesSelector,
    CloseIcon,
  },
  data() {
    return {
      todayDate: moment(),
      isCalendarLoading: false,
      calendarMasks: {
        title: "MMMM YYYY",
        weekdays: "WWW",
        navMonths: "MMM",
        input: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
        dayPopover: "WWW, MMM D, YYYY",
        data: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
        fetchedDate: moment(),
      },
    };
  },
  computed: {
    ...mapGetters({
      selectedDate: "events/selectedDate",
      bundles: "bundles/bundles",
      filteredEventsDatesList: "events/filteredEventsDatesList",
      filteredBundlesDatesList: "bundles/filteredBundlesDatesList",
      isCalendarFilterActive: "events/isCalendarFilterActive",
      widgetSettings: "common/widgetSettings",
      meetingsByDateScope: "events/meetingsByDateScope",
      fullMeetingsList: "events/fullMeetingsList",
      openMobileCalendar: "common/openMobileCalendar",
      openDesktopCalendar: "common/openDesktopCalendar",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      meetings: "events/meetings",
      bundlesList: "bundles/bundlesList",
      openItemsList: "common/openItemsList",
      clearSearchInputMarker: "search/clearSearchInputMarker",
      isLoading: "common/isLoading",
      collectionsMode: "events/collectionsMode",
      collectionSelectedDate: "events/collectionSelectedDate",
    }),
    availableDates() {
      const datesList = [];

      if (this.openItemsList === "events") {
        forEach(this.fullMeetingsList, (event) => {
          datesList.push(
            moment(event.start_time).format("YYYY-MM-DDTHH:mm:ss")
          );
        });
      } else if (this.openItemsList === "bundles") {
        this.filteredBundlesDatesList.forEach((bundleDate) => {
          datesList.push(moment(bundleDate).format("YYYY-MM-DDTHH:mm:ss"));
        });
      }

      return datesList;
    },

    isEmptyMonthCollectionView() {
      if (this.$refs.svvCalendarComponent) {
        const datesListFormated = this.filteredEventsDatesList.map(
          (date) => moment(date).month() + 1
        );

        return !datesListFormated.some(
          (date) => date === this.$refs.svvCalendarComponent.pages[0].month
        );
      } else return false;
    },

    getBundlesDatesInThisMonth() {
      let fullMonth = this.$refs.svvCalendarComponent
        ? this.$refs.svvCalendarComponent.pages[0].month.toString()
        : moment().month();
      let year = this.$refs.svvCalendarComponent
        ? this.$refs.svvCalendarComponent.pages[0].year.toString()
        : moment().year();
      if (fullMonth.length === 1) fullMonth = `0${fullMonth}`;

      let filteredDates = [];
      filteredDates = this.filteredBundlesDatesList.filter((date) => {
        return moment(date).format("YYYY-MM") === `${year}-${fullMonth}`;
      });

      return filteredDates;
    },
    calendarAttrs() {
      // const datesList = [];
      // const startTimesList = [];
      //
      // forEach(this.fullMeetingsList, event => {
      //   let eventDate = event.start_time.split('T')[0];
      //
      //   if (startTimesList.indexOf(eventDate) < 0) {
      //     startTimesList.push(eventDate);
      //     datesList.push(moment(event.start_time).format('YYYY-MM-DD'));
      //   }
      // });

      return [
        // {
        //   dot: {
        //     color: 'green',
        //     class: 'svv-meeting-dot',
        //   },
        //   // dates: datesList,
        //   dates: this.filteredEventsDatesList,
        // },
        {
          highlight: {
            class: "svv-v-calendar-highlighted-date-bgr",
            contentClass: "svv-v-calendar-highlighted-date-content",
          },
          dates:
            this.openItemsList === "events"
              ? this.filteredEventsDatesList
              : this.filteredBundlesDatesList,
        },
        {
          highlight: {
            class: "svv-v-calendar-highlighted-selected-date-bgr",
            contentClass: "svv-v-calendar-highlighted-selected-date-content",
          },
          dates: [this.selectedDate],
        },
        // {
        //   'available-dates': true,
        //   dates: this.filteredEventsDatesList,
        // },
      ];
    },
  },

  watch: {
    // bundlesList(newVal) {
    //   console.log(newVal);
    //   if (this.openItemsList === "bundles") {
    //     // const bundlesDates = this.fetchFilteredBundlesDates();
    //     let activeDate = moment().format("YYYY-MM-DD");
    //     if (newVal.length > 0) {
    //       activeDate = moment(newVal[0].events[0].start_time).format(
    //         "YYYY-MM-DD"
    //       );
    //       console.log(activeDate);
    //       this.setSelectedDate(activeDate);
    //     }
    //     this.processSelectedDate(activeDate);
    //   }
    // },
    // filteredBundlesDatesList(newVal) {
    //   console.log(newVal);
    // },
    clearSearchInputMarker(newVal, oldVal) {
      if (newVal !== oldVal && this.openItemsList === "bundles") {
        this.fetchFilteredBundlesDates({ emptySearch: true });
      }
    },
    filteredBundlesDatesList(newVal) {
      if (this.openItemsList === "bundles" && newVal.length > 0) {
        let activeDate = moment().format("YYYY-MM-DD");

        activeDate = moment(newVal[0]).format("YYYY-MM-DD");
        // this.setSelectedDate(activeDate);
        // this.$refs.svvCalendarComponent.move(activeDate);

        // this.processSelectedDate(activeDate);
      }
    },

    async openItemsList(newVal) {
      // if (newVal === "bundles" && this.filteredBundlesDatesList.length === 0) {
      if (newVal === "bundles" && this.filteredBundlesDatesList.length === 0) {
        await this.fetchFilteredBundlesDates();
      }
    },
    // fullMeetingsList(newVal) {
    //   if (this.openItemsList === "events") {
    //     let activeDate = moment().format("YYYY-MM-DD");
    //     if (newVal.length > 0) {
    //       activeDate = moment(newVal[0].start_time).format("YYYY-MM-DD");
    //       // this.setSelectedDate(activeDate);
    //     }
    //     this.processSelectedDate(activeDate);
    //   }
    // },

    selectedDate(newVal) {
      if (this.$refs.svvCalendarComponent && !this.collectionSelectedDate) {
        const activeDate = moment().format("YYYY-MM-DD");
        this.setOpenMobileCalendar(false);
        this.setOpenMobileFilters(false);
        if (newVal !== this.selectedDate || newVal === null) {
          this.$refs.svvCalendarComponent.move(newVal || activeDate);
        }
      }
    },
    collectionSelectedDate(newVal) {
      if (this.$refs.svvCalendarComponent) {
        this.$refs.svvCalendarComponent.move(newVal);
      }
    },
  },

  async mounted() {
    this.fetchedDate = moment();
    // const dates = await this.fetchFirstOccurredEventsDates();
    // if (dates && dates.length !== 0) {
    //   this.$refs.svvCalendarComponent.move(moment(dates[0]).format('YYYY-MM'));
    // }
    if (this.openItemsList === "bundles") {
      await this.fetchFilteredBundlesDates();
    }
    if (
      this.openItemsList === "events" &&
      this.meetings &&
      this.meetings.isListEmpty
    ) {
      this.$refs.svvCalendarComponent.move(
        moment(this.meetings.meetings[0].start_time).format("YYYY-MM")
      );
    } else if (
      this.openItemsList === "bundles" &&
      this.bundles &&
      this.bundles.isListEmpty
    ) {
      this.$refs.svvCalendarComponent.move(
        moment(this.bundles.bundles[0].events[0].start_time).format("YYYY-MM")
      );
    }

    // await this.fetchFilteredEventsDates();
    // if (
    //   this.filteredEventsDatesList &&
    //   this.filteredEventsDatesList.length === 0
    // ) {
    //   console.log(this.filteredEventsDatesList);
    //   const nextMonth = moment().add(1, 'M').format('YYYY-MM');
    //   await this.fetchFilteredEventsDates({
    //     date: nextMonth,
    //   });
    //   this.$refs.svvCalendarComponent.move(nextMonth);
    // }
    // this.fetchEventsStartCalendarDate();

    if (this.openItemsList === "events" && this.fullMeetingsList.length > 0) {
      const activeDate = moment(this.fullMeetingsList[0].start_time).format(
        "YYYY-MM-DD"
      );
      // this.setSelectedDate(activeDate);
      this.processSelectedDate(activeDate);
    }
  },
  methods: {
    ...mapActions({
      processSelectedDate: "events/processSelectedDate",
      fetchEventsByDateServvDB: "events/fetchEventsByDateServvDB",
      fetchEventsByDate: "events/fetchEventsByDate",
      fetchFilteredEventsDates: "events/fetchFilteredEventsDates",
      fetchFilteredBundlesDates: "bundles/fetchFilteredBundlesDates",
      fetchBundlesByParams: "bundles/fetchBundlesByParams",
      clearAllFilters: "search/clearAllFilters",
      fetchFirstOccurredEventsDates: "events/fetchFirstOccurredEventsDates",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setSelectedDate: "events/setSelectedDate",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenDesktopCalendar: "common/setOpenDesktopCalendar",
    }),

    async nextMonth(e) {
      e.preventDefault();
      let fullMonth = this.$refs.svvCalendarComponent.pages[0].month.toString();
      if (fullMonth.length === 1) fullMonth = `0${fullMonth}`;
      this.isCalendarLoading = true;
      if (this.openItemsList === "events") {
        // await this.fetchFilteredEventsDates({
        //   date: `${this.$refs.svvCalendarComponent.pages[0].year}-${fullMonth}`,
        // });
      }
      this.$refs.svvCalendarComponent.moveNext();
      this.isCalendarLoading = false;
    },
    async onDayClick(selectedDay) {
      /**
       * We must be careful here with timezones hell as newer versions of
       * v-calendar tries handle timezones by "smart" way what's braking whole
       * app logic.Main problem here is that available dates are defined in format
       * "YYYY-MM-DD" without time (because one day can contain couple of events).
       * That's why calendar cannot handle timezones by correct way and as
       * result it highlights wrong days. DON'T bump version of v-calendar or
       * solve timezones issue for new lib version.
       */
      // this.setSelectedDate(selectedDay.date);

      /**
       * "selectedDateFormatted" must contain date string in format "YYYY-MM-DD"
       * e.g. 2022-09-04
       * @type {string}
       */

      const selectedDateFormatted = `${selectedDay.year}-${
        selectedDay.month < 10 ? `0${selectedDay.month}` : selectedDay.month
      }-${selectedDay.day < 10 ? `0${selectedDay.day}` : selectedDay.day}`;

      if (
        (this.openItemsList === "event" &&
          !this.filteredEventsDatesList.includes(selectedDateFormatted)) ||
        (this.openItemsList === "bundles" &&
          !this.filteredBundlesDatesList.includes(selectedDateFormatted))
      )
        return;

      this.setLoading(true);
      if (this.openItemsList === "events") {
        // await this.fetchEventsByDateServvDB({ date: selectedDateFormatted });
        await this.fetchEventsByDate({ date: selectedDateFormatted });
      } else if (this.openItemsList === "bundles") {
        this.fetchBundlesByParams(selectedDateFormatted);
      }
      this.setLoading(false);

      this.processSelectedDate(selectedDateFormatted);
      // this.setOpenDesktopCalendar(false);
    },
    async onMonthChange(pageData) {
      let fullMonth = pageData.month.toString();
      if (fullMonth.length === 1) fullMonth = `0${fullMonth}`;
      if (
        this.widgetSettings &&
        this.widgetSettings.widget_style_settings &&
        this.widgetSettings.widget_style_settings.ew_events_list_view !==
          "category"
      )
        if (this.openItemsList === "events" && !this.isLoading) {
          // await this.fetchFilteredEventsDates({
          //   date: `${pageData.year}-${fullMonth}`,
          // });
        }
      // else if (this.openItemsList==='bundles'){
      //   await this.fetchFilteredBundlesDates();
      // }
    },
    onCloseMobileCalendarClick() {
      this.setOpenMobileFilters(false);
      this.setOpenMobileCalendar(false);
    },
    async onClearAllFilters() {
      await this.setLoading(true);

      this.$refs.svvCalendarComponent.move(activeDate);
      await this.clearAllFilters();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~js-datepicker/dist/datepicker.min.css";
</style>
