<template>
  <div class="svv-events-calendar-container">
    <div class="svv-events-calendar-container-inner-section">
      <!-- <div class="svv-calendar-section-header">
        <a
          @click.prevent="onCloseMobileCalendarClick"
          class="svv-close-mobile-calendar-btn"
          href="#"
        >
          <CloseIcon />
        </a>
      </div> -->
      <div class="calendar-wrapper-section" :class="{ 'active-filter': true }">
        <div
          v-if="filteredEventsDatesList.length === 0 && !isCalendarLoading"
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
            'svv-blured-calendar': filteredEventsDatesList.length === 0,
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
          :available-dates="filteredEventsDatesList"
          :masks="calendarMasks"
        />
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
  name: "EventsCalendarSection",
  components: {
    TrashIcon,
    LanguagesSelector,
    CloseIcon,
  },
  data() {
    return {
      todayDate: moment(),
      currentMonth: {
        year: moment()
          .year()
          .toString(),
        month: (moment().month() + 1).toString(),
      },
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
      filteredEventsDatesList: "events/filteredEventsDatesList",
      isCalendarFilterActive: "events/isCalendarFilterActive",
      widgetSettings: "common/widgetSettings",
      meetingsByDateScope: "events/meetingsByDateScope",
      fullMeetingsList: "events/fullMeetingsList",
      openMobileCalendar: "common/openMobileCalendar",
      openDesktopCalendar: "common/openDesktopCalendar",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      meetings: "events/meetings",
      multiSearchString: "events/multiSearchString",
    }),
    availableDates() {
      const datesList = [];

      forEach(this.fullMeetingsList, (event) => {
        datesList.push(moment(event.start_time).format("YYYY-MM-DDTHH:mm:ss"));
      });

      return datesList;
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
          dates: this.filteredEventsDatesList,
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
    fullMeetingsList(newVal) {
      let activeDate = moment().format("YYYY-MM-DD");
      if (newVal.length > 0) {
        activeDate = moment(newVal[0].start_time).format("YYYY-MM-DD");
        // this.setSelectedDate(activeDate);
      }
      this.processSelectedDate(activeDate);
    },
    selectedDate(newVal) {
      if (this.$refs.svvCalendarComponent) {
        const activeDate = moment().format("YYYY-MM-DD");
        this.setOpenMobileCalendar(false);
        this.setOpenMobileFilters(false);
        this.$refs.svvCalendarComponent.move(newVal || activeDate);
      }
    },
  },

  async mounted() {
    this.fetchedDate = moment();
    // const dates = await this.fetchFirstOccurredEventsDates();
    // if (dates && dates.length !== 0) {
    //   this.$refs.svvCalendarComponent.move(moment(dates[0]).format('YYYY-MM'));
    // }
    if (this.meetings && this.meetings.isListEmpty) {
      this.$refs.svvCalendarComponent.move(
        moment(this.meetings.meetings[0].start_time).format("YYYY-MM")
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

    if (this.fullMeetingsList.length > 0) {
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
      fetchFilteredEventsDates: "events/fetchFilteredEventsDates",
      clearAllFilters: "search/clearAllFilters",
      fetchFirstOccurredEventsDates: "events/fetchFirstOccurredEventsDates",
      setMultiSearchString: "events/setMultiSearchString",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setSelectedDate: "events/setSelectedDate",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenDesktopCalendar: "common/setOpenDesktopCalendar",
    }),
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

      if (!this.filteredEventsDatesList.includes(selectedDateFormatted)) return;

      this.setLoading(true);
      let searchString = { ...this.multiSearchString };

      if (
        searchString?.["Dates"] &&
        searchString["Dates"].indexOf(selectedDateFormatted) >= 0
      ) {
        searchString["Dates"].pop(selectedDateFormatted);
      } else {
        searchString["Dates"] = [selectedDateFormatted];
      }

      this.setMultiSearchString(searchString);
      this.fetchEventsWithMultipleFilters();
      this.setLoading(false);
      if (selectedDateFormatted === this.selectedDate);

      this.processSelectedDate(selectedDateFormatted);
      // this.setOpenDesktopCalendar(false);
    },

    async nextMonth(e) {
      e.preventDefault();
      let fullMonth = this.$refs.svvCalendarComponent.pages[0].month.toString();
      if (fullMonth.length === 1) fullMonth = `0${fullMonth}`;
      this.isCalendarLoading = true;
      // await this.fetchFilteredEventsDates({
      //   date: `${this.$refs.svvCalendarComponent.pages[0].year}-${fullMonth}`,
      // });
      this.$refs.svvCalendarComponent.moveNext();
      this.isCalendarLoading = false;
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
        if (
          pageData.year.toString() !== this.currentMonth.year ||
          pageData.month.toString() !== this.currentMonth.month
        ) {
          this.currentMonth.year = pageData.year.toString();
          this.currentMonth.month = pageData.month.toString();

          // await this.fetchFilteredEventsDates({
          //   date: `${pageData.year}-${fullMonth}`,
          // });
        }
    },
    onCloseMobileCalendarClick() {
      this.setOpenMobileFilters(false);
      this.setOpenMobileCalendar(false);
    },
    async onClearAllFilters() {
      // await this.setLoading(true);
      this.setMultiSearchString("");
      this.fetchEventsWithMultipleFilters();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~js-datepicker/dist/datepicker.min.css";
</style>
