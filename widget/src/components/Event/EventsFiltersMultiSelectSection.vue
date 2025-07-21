<template>
  <div
    :class="{
      'events-filters-container': true,
      'active-filter': isParametersFilterActive,
    }"
  >
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
      <div
        class="events-filters-controls-wrapper events-filters-selects-classic"
        :style="`max-height:800px; margin-bottom: 3.5em;`"
      >
        <div
          class="events-filters-selects-wrapper events-filters-selects-classic"
          :style="`max-height:800px`"
        >
          <!-- <div class="events-filters-controls">
            <a
              class="cleat-all-filters"
              href="#"
              @click.prevent="onClearAllFilters"
            >
              <TrashIcon /><span>{{
                $t("mainWidget.clearFiltersLabel")
              }}</span></a
            >
          </div> -->
          <div class="svv-filters-section-scrollable">
            <div
              v-if="true"
              class="event-filter-container multi-filter-section"
            >
              <h2 class="svv-filter-heading" @click="toggleFilterView('dates')">
                {{ $t("customFilters.filter_label_dates") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.dates ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.dates ? '' : 'collapsed'
                }`"
              >
                <EventsCalendarSection
                  :class="{
                    'open-desktop-calendar-section': true,
                    'permanently-open':
                      widgetSettings.widget_style_settings
                        .permanently_open_calendar,
                  }"
                />
              </div>
            </div>
            <div v-else></div>
            <div
              v-if="
                widgetSettings.widget_style_settings.available_filters.indexOf(
                  'teams'
                ) >= 0 && typeListTeams.length > 0
              "
              class="event-filter-container multi-filter-section"
            >
              <h2 class="svv-filter-heading" @click="toggleFilterView('teams')">
                {{ $t("customFilters.filter_label_teams") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.teams ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.teams ? '' : 'collapsed'
                }`"
              >
                <div
                  v-for="team in getSelectOptions('Teams')"
                  :key="team.label"
                  @click="
                    isOptionDisabled(team, 'Teams')
                      ? () => {}
                      : onFilterSelectValue(team, 'Teams')
                  "
                  :class="[
                    `svv-select-options-${
                      isOptionDisabled(team, 'Teams') ? 'disabled' : ''
                    }${
                      getSelectValue(
                        team.value,
                        'Teams',
                        getSelectOptions('Teams')
                      )
                        ? 'selected'
                        : ''
                    }`,
                  ]"
                >
                  <input
                    type="checkbox"
                    :disabled="isOptionDisabled(team, 'Teams')"
                    :checked="
                      getSelectValue(
                        team.value,
                        'Teams',
                        getSelectOptions('Teams')
                      )
                    "
                    style="display: none"
                  />
                  <label>{{ team.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>

            <div
              v-if="
                widgetSettings.widget_style_settings.available_filters.indexOf(
                  'members'
                ) >= 0 && typeListMembers.length > 0
              "
              class="event-filter-container multi-filter-section"
            >
              <h2
                class="svv-filter-heading"
                @click="toggleFilterView('members')"
              >
                {{ $t("customFilters.filter_label_members") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.members ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.members ? '' : 'collapsed'
                }`"
              >
                <div
                  v-for="member in getSelectOptions('Members')"
                  :key="member.label"
                  @click="
                    isOptionDisabled(member, 'Members')
                      ? () => {}
                      : onFilterSelectValue(member, 'Members')
                  "
                  :class="[
                    `svv-select-options-${
                      isOptionDisabled(member, 'Members') ? 'disabled' : ''
                    }${
                      getSelectValue(
                        member.value,
                        'Members',
                        getSelectOptions('Members')
                      )
                        ? 'selected'
                        : ''
                    }`,
                  ]"
                >
                  <input
                    type="checkbox"
                    :disabled="isOptionDisabled(member, 'Members')"
                    :checked="
                      getSelectValue(
                        member.value,
                        'Members',
                        getSelectOptions('Members')
                      )
                    "
                    style="display: none"
                  />
                  <label>{{ member.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>

            <div
              v-if="
                widgetSettings.widget_style_settings.available_filters.indexOf(
                  'categories'
                ) >= 0 &&
                typeListCategories.length > 0 &&
                !isCategoryAutoSelected
              "
              class="event-filter-container multi-filter-section"
            >
              <h2
                class="svv-filter-heading"
                @click="toggleFilterView('categories')"
              >
                {{ $t("customFilters.filter_label_categories") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.categories ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.categories ? '' : 'collapsed'
                }`"
              >
                <div
                  v-for="category in getSelectOptions('Categories')"
                  :key="category.label"
                  @click="
                    isOptionDisabled(category, 'Categories')
                      ? () => {}
                      : onFilterSelectValue(category, 'Categories')
                  "
                  :class="[
                    `svv-select-options-${
                      isOptionDisabled(category, 'Categories') ? 'disabled' : ''
                    }${
                      getSelectValue(
                        category.value,
                        'Categories',
                        getSelectOptions('Categories')
                      )
                        ? 'selected'
                        : ''
                    }`,
                  ]"
                >
                  <input
                    type="checkbox"
                    :disabled="isOptionDisabled(category, 'Categories')"
                    :checked="
                      getSelectValue(
                        category.value,
                        'Categories',
                        getSelectOptions('Categories')
                      )
                    "
                    style="display: none"
                  />
                  <label>{{ category.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>

            <div
              v-if="
                widgetSettings.widget_style_settings.available_filters.indexOf(
                  'languages'
                ) >= 0 && typeListLanguages.length > 0
              "
              class="event-filter-container multi-filter-section"
            >
              <h2
                class="svv-filter-heading"
                @click="toggleFilterView('languages')"
              >
                {{ $t("customFilters.filter_label_languages") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.languages ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.languages ? '' : 'collapsed'
                }`"
              >
                <div
                  v-for="language in getSelectOptions('Languages')"
                  :key="language.label"
                  @click="
                    isOptionDisabled(language, 'Languages')
                      ? () => {}
                      : onFilterSelectValue(language, 'Languages')
                  "
                  :class="[
                    `svv-select-options-${
                      isOptionDisabled(language, 'Languages') ? 'disabled' : ''
                    }${
                      getSelectValue(
                        language.value,
                        'Languages',
                        getSelectOptions('Languages')
                      )
                        ? 'selected'
                        : ''
                    }`,
                  ]"
                >
                  <input
                    type="checkbox"
                    :disabled="isOptionDisabled(language, 'Languages')"
                    :checked="
                      getSelectValue(
                        language.value,
                        'Languages',
                        getSelectOptions('Languages')
                      )
                    "
                    style="display: none"
                  />
                  <label>{{ language.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>

            <div
              v-if="
                widgetSettings.widget_style_settings.available_filters.indexOf(
                  'locations'
                ) >= 0 && typeListLocations.length > 0
              "
              class="event-filter-container multi-filter-section"
            >
              <h2
                class="svv-filter-heading"
                @click="toggleFilterView('locations')"
              >
                {{ $t("customFilters.filter_label_locations") }}
                <IconRight
                  :class="[
                    `filter-icon${
                      viewFiltersSection.locations ? '' : '-collapsed'
                    }`,
                  ]"
                />
              </h2>
              <div
                :class="`svv-filter-option-${
                  viewFiltersSection.locations ? '' : 'collapsed'
                }`"
              >
                <div
                  v-for="location in getSelectOptions('Locations')"
                  :key="location.label"
                  @click="
                    isOptionDisabled(location, 'Locations')
                      ? () => {}
                      : onFilterSelectValue(location, 'Locations')
                  "
                  :class="[
                    `svv-select-options-${
                      isOptionDisabled(location, 'Locations') ? 'disabled' : ''
                    }${
                      getSelectValue(
                        location.value,
                        'Locations',
                        getSelectOptions('Locations')
                      )
                        ? 'selected'
                        : ''
                    }`,
                  ]"
                >
                  <input
                    type="checkbox"
                    :disabled="isOptionDisabled(location, 'Locations')"
                    :checked="
                      getSelectValue(
                        location.value,
                        'Locations',
                        getSelectOptions('Locations')
                      )
                    "
                    style="display: none"
                  />
                  <label>{{ location.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import TrashIcon from "@/assets/images/icons/refresh.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import IconRight from "@/assets/icons/chevron-right-minor.svg";
import EventsCalendarSection from "@/components/common/EventsCalendarSection";

export default {
  name: "EventsFiltersMultiSelectSection",
  props: {
    event: {
      type: Object,
      default: () => [],
    },
  },
  components: {
    CloseIcon,
    TrashIcon,
    IconRight,
    EventsCalendarSection,
  },
  data() {
    return {
      isCategoryAutoSelected: false,
      value: "",
      searchString: {},
      filtersHeight: "500px",
      viewFiltersSection: {
        teams: false,
        members: false,
        locations: false,
        languages: false,
        categories: false,
        dates: true,
      },
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
      multiSearchString: "events/multiSearchString",
      meetingsList: "events/meetings",
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
    multiSearchString(newVal) {
      this.searchString = { ...newVal };
    },
  },
  methods: {
    ...mapActions({
      parseSearchRequest: "search/parseSearchRequest",
      clearAllFilters: "search/clearAllFilters",
      setMultiSearchString: "events/setMultiSearchString",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
    }),
    getSelectValue(value, typeName, optionsList) {
      const allRequestParamsUpdated = this.multiSearchString;
      if (!value) {
        return value;
      }

      return allRequestParamsUpdated?.[typeName] &&
        allRequestParamsUpdated[typeName].length > 0
        ? allRequestParamsUpdated[typeName].find((type) => type === value)
        : false;
    },
    onFilterSelectValue(selectedValue, selectedTypeName) {
      if (
        this.searchString?.[selectedTypeName] &&
        this.searchString[selectedTypeName].find(
          (val) => val === selectedValue.value
        )
      ) {
        this.searchString[selectedTypeName].pop(selectedValue.value);
      } else {
        if (!this.searchString?.[selectedTypeName]) {
          this.searchString[selectedTypeName] = [selectedValue.value];
        } else this.searchString[selectedTypeName].push(selectedValue.value);
      }
      // this.setLoading(true);
      this.setMultiSearchString(this.searchString);
      this.fetchEventsWithMultipleFilters();
    },
    isOptionDisabled(option, type) {
      if (this.meetingsList.page_count === 0) {
        return false;
      } else {
        // let flag = false;
        // this.meetingsList.meetings.forEach((meeting) => {
        //   if (type === "Categories") {
        //     if (
        //       meeting.category_id === option.value ||
        //       meeting.category_id === null
        //     ) {
        //       flag = true;
        //     }
        //   }
        //   //TODO
        //   // else if (type === 'Teams'){
        //   //   if (meeting.teams_id===option.value){
        //   //     flag = true
        //   //   }
        //   // }
        //   else if (type === "Members") {
        //     if (
        //       meeting.members_id === option.value ||
        //       meeting.members_id === null
        //     ) {
        //       flag = true;
        //     }
        //   } else if (type === "Locations") {
        //     if (meeting.location_id === option.value ||
        //       meeting.location_id === null) {
        //       flag = true;
        //     }
        //   } else if (type === "Languages") {
        //     if (meeting.language_id === option.value || ||
        //       meeting.location_id === null) {
        //       flag = true;
        //     }
        //   }
        // });
        let flag = false;
        this.meetingsList.meetings.forEach((meeting) => {
          if (type === "Categories") {
            if (meeting.category_id === option.value) {
              flag = true;
            }
          }
          //TODO
          else if (type === "Teams") {
            flag = true;
          } else if (type === "Members") {
            if (
              meeting.members_id &&
              meeting.members_id.length > 0 &&
              meeting.members_id.indexOf(option.value) >= 0
            ) {
              flag = true;
            }
          } else if (type === "Locations") {
            if (meeting.location_id === option.value) {
              flag = true;
            }
          } else if (type === "Languages") {
            if (meeting.language_id === option.value) {
              flag = true;
            }
          }
        });
        return !flag;
      }
    },
    onFilterSelectChange(selectedValue, selectedTypeName) {
      const allRequestParamsUpdated = this.allRequestParams;
      if (allRequestParamsUpdated[selectedTypeName] !== selectedValue.value) {
        allRequestParamsUpdated[selectedTypeName] = selectedValue
          ? selectedValue.value
          : selectedValue;
      } else {
        allRequestParamsUpdated[selectedTypeName] = undefined;
      }
      // this.setLoading(true);
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
    toggleFilterView(section) {
      this.viewFiltersSection[section] = !this.viewFiltersSection[section];
    },
    async onClearAllFilters() {
      // await this.setLoading(true);
      this.setMultiSearchString("");
      this.fetchEventsWithMultipleFilters();

      // await this.setLoading(false);
    },
    onCloseMobileFiltersClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(false);
    },
  },
  mounted() {
    try {
      const resizeObserver = new ResizeObserver(() => {
        this.filtersHeight =
          document.querySelector(".meetings-list-container").clientHeight > 500
            ? document.querySelector(".meetings-list-container").clientHeight
            : 500;
      });
      resizeObserver.observe(
        document.querySelector(".meetings-list-container")
      );
    } catch (e) {}
  },
};
</script>

<style lang="scss" scoped>
/*@import '~vue-select/src/scss/vue-select.scss';*/
</style>
