<template>
  <div
    :class="{
      'events-filters-container': true,
      'active-filter': isParametersFilterActive,
    }"
  >
    <div class="filters-header">
      <div class="svv-plain-list-container-title" v-show="true">
        {{ $t("mainWidget.eventsListTitle") }}
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
    <div class="events-filters-inner-container" v-show="isFiltersPanelVisible">
      <div class="svv-mobile-filters-section-header">
        <a
          @click.prevent="onCloseMobileFiltersClick"
          class="svv-close-mobile-filters-btn"
          href="#"
        >
          <CloseIcon />
        </a>
      </div>
      <div class="events-filters-controls-wrapper">
        <div class="events-filters-selects-wrapper" v-if="true">
          <div
            v-if="
              widgetSettings.widget_style_settings.available_filters.indexOf(
                'teams'
              ) >= 0 && typeListTeams.length > 0
            "
            class="event-filter-container"
          >
            <v-select
              :value="
                getSelectValue(selectedTeam, 'Team', getSelectOptions('Teams'))
              "
              :options="getSelectOptions('Teams')"
              :placeholder="$t('customFilters.filter_label_teams')"
              :clearable="true"
              :searchable="true"
              :class="['svv-custom-vs-select', 'events-filter']"
              @input="(val) => onFilterSelectChange(val, 'team')"
            />
          </div>
          <!-- <div v-else></div> -->

          <div
            v-if="
              widgetSettings.widget_style_settings.available_filters.indexOf(
                'members'
              ) >= 0 &&
                typeListMembers.length > 0 &&
                !defaultTypes.member_id
            "
            class="event-filter-container"
          >
            <v-select
              :value="
                getSelectValue(
                  selectedMember,
                  'Member',
                  getSelectOptions('Members')
                )
              "
              :options="getSelectOptions('Members')"
              :placeholder="$t('customFilters.filter_label_members')"
              :clearable="true"
              :searchable="true"
              :class="['svv-custom-vs-select', 'events-filter']"
              @input="(val) => onFilterSelectChange(val, 'member')"
            />
          </div>
          <!-- <div v-else></div> -->

          <div
            v-if="
              widgetSettings.widget_style_settings.available_filters.indexOf(
                'categories'
              ) >= 0 &&
                typeListCategories.length > 0 &&
                !isCategoryAutoSelected &&
                !defaultTypes.category_id
            "
            class="event-filter-container"
          >
            <v-select
              :value="
                getSelectValue(
                  selectedCategory,
                  'Category',
                  getSelectOptions('Categories')
                )
              "
              :options="getSelectOptions('Categories')"
              :placeholder="$t('customFilters.filter_label_categories')"
              :clearable="true"
              :searchable="true"
              :class="['svv-custom-vs-select', 'events-filter']"
              @input="(val) => onFilterSelectChange(val, 'category')"
            />
          </div>
          <!-- <div v-else></div> -->

          <div
            v-if="
              widgetSettings.widget_style_settings.available_filters.indexOf(
                'languages'
              ) >= 0 &&
                typeListLanguages.length > 0 &&
                !defaultTypes.language_id
            "
            class="event-filter-container"
          >
            <v-select
              :value="
                getSelectValue(
                  selectedLanguage,
                  'Language',
                  getSelectOptions('Languages')
                )
              "
              :options="getSelectOptions('Languages')"
              :placeholder="$t('customFilters.filter_label_languages')"
              :clearable="true"
              :searchable="true"
              :class="['svv-custom-vs-select', 'events-filter']"
              @input="(val) => onFilterSelectChange(val, 'language')"
            />
          </div>
          <!-- <div v-else></div> -->

          <div
            v-if="
              widgetSettings.widget_style_settings.available_filters.indexOf(
                'locations'
              ) >= 0 &&
                typeListLocations.length > 0 &&
                !defaultTypes.location_id
            "
            class="event-filter-container"
          >
            <v-select
              :value="
                getSelectValue(
                  selectedLocation,
                  'Location',
                  getSelectOptions('Locations')
                )
              "
              :options="getSelectOptions('Locations')"
              :placeholder="$t('customFilters.filter_label_locations')"
              :clearable="true"
              :searchable="true"
              :class="['svv-custom-vs-select', 'events-filter']"
              @input="(val) => onFilterSelectChange(val, 'location')"
            />
          </div>
          <!-- <div v-else></div> -->
        </div>
        <EventsFiltersMultiSelect
          v-if="
            widgetSettings.widget_style_settings.ew_events_list_view ===
              'progressive' && windowSize !== 'mobile'
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import TrashIcon from "@/assets/images/icons/refresh.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import EventsFiltersMultiSelect from "@/components/Event/EventsFiltersMultiSelect";
import moment from "moment-timezone";
export default {
  name: "EventsFilters",
  props: {
    event: {
      type: Object,
      default: () => [],
    },
  },
  components: {
    CloseIcon,
    TrashIcon,
    EventsFiltersMultiSelect,
  },
  data() {
    return {
      isCategoryAutoSelected: false,
      value: "",
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      eventTypes: "types/eventTypes",
      allRequestParams: "search/allRequestParams",
      selectedCategory: "search/selectedCategory",
      selectedLocation: "search/selectedLocation",
      selectedLanguage: "search/selectedLanguage",
      selectedTeam: "search/selectedTeam",
      selectedMember: "search/selectedMember",
      isParametersFilterActive: "search/isParametersFilterActive",
      openMobileFilters: "common/openMobileFilters",
      isFiltersPanelVisible: "common/isFiltersPanelVisible",
      defaultTypes: "types/defaultTypes",
    }),
    typeListMembers() {
      return this.eventTypes.members || [];
    },
    typeListTeams() {
      return this.eventTypes.teams || [];
    },
    typeListLocations() {
      return this.eventTypes.locations || [];
    },
    typeListLanguages() {
      return this.eventTypes.languages || [];
    },
    typeListCategories() {
      return this.eventTypes.categories || [];
    },
  },
  watch: {
    // widgetSettings(newVal) {

    // },
    eventTypes(newVal) {
      // if (newVal.categories && newVal.categories.length > 0) {
      //   const link = window.location.href.split('/');
      //   let categoryFromUrl = link[link.length - 1]
      //   let isUrlContainCatagoryName = newVal.categories.filter(
      //     cat =>
      //       cat.name.toLowerCase() ===
      //       categoryFromUrl
      //         .replaceAll('-', ' ')
      //         .replaceAll('_', ' ')
      //         .toLowerCase()
      //   );
      //   if (isUrlContainCatagoryName.length > 0) {
      //     this.isCategoryAutoSelected = true;
      //     this.onFilterSelectChange(
      //       {
      //         label: isUrlContainCatagoryName[0].name,
      //         value: isUrlContainCatagoryName[0].id,
      //       },
      //       'category'
      //     );
      //   }
      // }
    },
  },
  // mounted() {
  //   console.log(this.widgetSettings.widget_style_settings.available_filters);
  // },
  methods: {
    ...mapActions({
      parseSearchRequest: "search/parseSearchRequest",
      clearAllFilters: "search/clearAllFilters",
      setMultiSearchString: "events/setMultiSearchString",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
      setSelectedDate: "events/setSelectedDate",
      processSelectedDate: "events/processSelectedDate",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
    }),
    getSelectValue(value, typeName, optionsList) {
      if (!value) {
        return value;
      }
      return optionsList.find((item) => item.value === value);
    },
    onFilterSelectChange(selectedValue, selectedTypeName) {
      const allRequestParamsUpdated = this.allRequestParams;
      allRequestParamsUpdated[selectedTypeName] = selectedValue
        ? selectedValue.value
        : selectedValue;
      this.setLoading(true);
      this.parseSearchRequest({
        ...allRequestParamsUpdated,
      });
    },
    getSelectOptions(typeName) {
      return this[`typeList${typeName}`]
        .map((item) => {
          return { label: item.name, value: item.id, order: item.priority };
        })
        .sort((a, b) => a.order - b.order);
    },
    async onClearAllFilters() {
      if (
        (this.widgetSettings?.widget_style_settings &&
          this.widgetSettings.widget_style_settings.ew_show_top_filters) ||
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "progressive"
      ) {
        await this.setMultiSearchString(null);
        await this.fetchEventsWithMultipleFilters({ stepsCompleted: false });
        await this.setSelectedDate(null);
      } else {
        await this.setLoading(true);

        await this.processSelectedDate(null);
        await this.clearAllFilters();
      }
      // await this.setLoading(false);
    },
    onCloseMobileFiltersClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(false);
    },
  },
};
</script>

<style lang="scss" scoped>
/*@import '~vue-select/src/scss/vue-select.scss';*/
</style>
