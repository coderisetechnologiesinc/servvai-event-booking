<template>
  <div class="svv-modal-dialog-view-container">
    <MountingPortal append mountTo="body">
      <div>
        <div
          v-if="apiAccessValid"
          :class="['svv-wgt-toggle-btn', modalDialogOpen ? 'open-wgt' : '']"
          @click.prevent="onToggleModalClick"
        >
          <span class="wgt-toggle-btn-icon">&#10094;</span>
          <span class="wgt-toggle-btn-text">{{
            $t("mainWidget.openDialogButton")
          }}</span>
        </div>
      </div>
    </MountingPortal>

    <MountingPortal append mountTo="body">
      <modal
        name="svvModalDialogEventsList"
        :classes="[
          'v--modal',
          'svv-wgt-modal-container',
          isUserValid ? 'svv-auth-valid' : '',
        ]"
        :click-to-close="true"
        @closed="onCloseModalClick"
        :scrollable="true"
        :adaptive="true"
        width="95%"
        :max-width="
          widgetSettings.widget_style_settings.show_calendar ? 1300 : 1300
        "
        height="auto"
        :reset="true"
      >
        <WidgetLoader />
        <div class="svv-modal-header">
          <div class="modal-header-languages-selector-container">
            <!--            v-if="!widgetSettings.widget_style_settings.show_calendar"-->
            <LanguagesSelector
              v-if="
                widgetSettings.widget_style_settings.ew_show_language_selector
              "
            />
          </div>
          <div
            v-if="openItemsList === 'events'"
            class="modal-header-calendar-switch-container"
          >
            <div
              class="show-desktop-calendar-btn"
              :class="{ active: openDesktopCalendar }"
              @click="onShowDesktopCalendarClick"
              v-if="
                widgetSettings.widget_style_settings.show_calendar &&
                !widgetSettings.widget_style_settings.permanently_open_calendar
              "
            >
              <div class="show-calendar-btn-label">
                {{ $t("globalWidgetsTranslations.calendarLabel") }}
              </div>
              <CalendarIcon class="show-calendar-btn-icon" />
            </div>
          </div>
          <!--          <SearchPanel v-if="openItemsList === 'events'" class="header-position dialog-wgt" />-->
          <!-- <ItemsListTypeSwitch class="header-position dialog-wgt" /> -->
          <div
            class="svv-modal-title"
            v-show="widgetSettings.widget_style_settings.show_widget_title"
          >
            {{
              openItemsList === "events"
                ? $t("mainWidget.eventsListTitle")
                : $t("mainWidget.bundlesListTitle")
            }}
          </div>
          <a
            @click.prevent="onCloseModalClick"
            class="close-modal-btn"
            href="#"
          >
            <CloseIcon />
          </a>
        </div>
        <div class="svv-modal-content">
          <WidgetMobileControls />
          <div class="events-data-container">
            <EventsCalendar
              :class="{
                'open-desktop-calendar': openDesktopCalendar,
                'permanently-open':
                  widgetSettings.widget_style_settings
                    .permanently_open_calendar,
              }"
              v-if="
                openItemsList === 'events' &&
                widgetSettings.widget_style_settings.show_calendar
              "
            />
            <EventsList v-if="openItemsList === 'events'" />
            <BundlesList v-if="openItemsList === 'bundles'" />
          </div>
          <WidgetPromoLogo />
        </div>
      </modal>
    </MountingPortal>

    <MountingPortal append mountTo="body">
      <div
        v-if="widgetSettings.widget_style_settings.show_calendar"
        class="svv-mobile-panel-wrapper svv-mobile-calendar-panel"
        :class="{ 'open-mobile-calendar': openMobileCalendar }"
      >
        <EventsCalendar />
      </div>
      <div
        class="svv-mobile-panel-wrapper svv-mobile-filters-panel"
        :class="{ 'open-mobile-filters': openMobileFilters }"
      >
        <EventsFilters />
      </div>
    </MountingPortal>
  </div>
</template>

<script>
import WidgetLoader from "@/components/common/WidgetLoader";
import EventsList from "@/components/Event/EventsList";
import BundlesList from "@/components/Bundle/BundlesList";
import EventsCalendar from "@/components/common/EventsCalendar";
import EventsFilters from "@/components/Event/EventsFilters";
import CloseIcon from "@/assets/images/icons/close.svg";
import WidgetMobileControls from "@/components/common/WidgetMobileControls";
import LanguagesSelector from "@/components/common/LanguagesSelector";
import WidgetPromoLogo from "@/components/common/WidgetPromoLogo";
import CalendarIcon from "@/assets/icons/calendar.svg";
import SearchPanel from "@/components/common/SearchPanel";
import ItemsListTypeSwitch from "@/components/common/ItemsListTypeSwitch";

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "EventsDataContainer",
  components: {
    WidgetLoader,
    EventsList,
    EventsCalendar,
    CloseIcon,
    EventsFilters,
    WidgetMobileControls,
    LanguagesSelector,
    CalendarIcon,
    WidgetPromoLogo,
    SearchPanel,
    BundlesList,
    ItemsListTypeSwitch,
  },
  computed: {
    ...mapGetters({
      isLoading: "common/isLoading",
      widgetNotice: "common/widgetNotice",
      modalDialogOpen: "common/modalDialogOpen",
      widgetSettings: "common/widgetSettings",
      isUserValid: "common/isUserValid",
      apiAccessValid: "common/apiAccessValid",
      openMobileCalendar: "common/openMobileCalendar",
      openMobileFilters: "common/openMobileFilters",
      openDesktopCalendar: "common/openDesktopCalendar",
      openItemsList: "common/openItemsList",
    }),
  },
  data() {
    return {
      isNoticeVisible: false,
    };
  },
  watch: {
    modalDialogOpen(newVal) {
      if (newVal) {
        this.$modal.show("svvModalDialogEventsList");
      } else {
        this.$modal.hide("svvModalDialogEventsList");
      }
    },
  },
  async mounted() {
    // this.addWidgetToggleButton();
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
      this.fetchMeetingsList({ firstFetch: true, withDefaultFilter: true });
      this.fetchBundlesList({ firstFetch: true });
    }
  },
  methods: {
    ...mapMutations({
      setModalDialogOpen: "common/setModalDialogOpen",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
      setOpenDesktopCalendar: "common/setOpenDesktopCalendar",
    }),
    ...mapActions({
      fetchMeetingsList: "events/fetchMeetingsList",
      fetchEventTypes: "types/fetchEventTypes",
      fetchBundlesList: "bundles/fetchBundlesList",
      fetchEventsFromCollections: "events/fetchEventsFromCollections",
    }),
    onCloseModalClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(false);
      this.setModalDialogOpen(false);
    },
    onToggleModalClick() {
      this.setModalDialogOpen(true);
    },
    onShowDesktopCalendarClick() {
      this.setOpenDesktopCalendar(!this.openDesktopCalendar);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~vue-js-modal/dist/styles.css";
</style>
