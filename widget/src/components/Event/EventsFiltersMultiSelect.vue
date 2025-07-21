<template>
  <div
    :class="{
      'events-filters-container': true,
      'active-filter': true,
    }"
  >
    <div class="events-filters-inner-container" v-show="true">
      <!-- <div class="svv-mobile-filters-section-header">
        <a
          @click.prevent="onCloseMobileFiltersClick"
          class="svv-close-mobile-filters-btn"
          href="#"
        >
          <CloseIcon />
        </a>
      </div> -->
      <div
        class="events-filters-controls-wrapper events-filters-selects-classic svv-filters-top svv-steps-container"
      >
        <div
          class="events-filters-selects-wrapper events-filters-selects-classic svv-filters-top"
          :class="
            widgetSettings.widget_style_settings.show_filters_expanded
              ? 'svv-filters-top-right'
              : ''
          "
        >
          <div
            class="events-filters-controls"
            v-show="widgetSettings.widget_style_settings.show_filters_expanded"
          >
            <a
              class="cleat-all-filters"
              href="#"
              @click.prevent="onClearAllFilters"
            >
              <TrashIcon /><span>{{
                $t("mainWidget.clearFiltersLabel")
              }}</span></a
            >
          </div>

          <div
            :class="[
              widgetSettings.widget_style_settings.show_filters_expanded
                ? 'events-filters-steps-wrapper-expanded'
                : 'events-filters-steps-wrapper',
            ]"
          >
            <div
              class="svv-calendar-filter-top"
              v-if="widgetSettings.widget_style_settings.show_filters_expanded"
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
            <div
              v-for="selectedFilterNumber in selectedTypes.length"
              :key="'step' + selectedFilterNumber"
              class="svv-filters-steps-container"
              @mouseover="
                toggleFilterView(selectedTypes[selectedFilterNumber - 1].type)
              "
              @mouseleave="closeAllFilters()"
            >
              <div
                :class="[
                  widgetSettings.widget_style_settings.show_filters_expanded
                    ? 'svv-filters-steps-expanded svv-dropdown-container-expanded'
                    : 'svv-filter-steps svv-dropdown-container',
                ]"
                :style="[
                  !widgetSettings.widget_style_settings.show_filters_expanded
                    ? {
                        top: 0,
                        left: `${
                          180 * (selectedFilterNumber - 1) +
                          (selectedFilterNumber - 1) * 10
                        }px`,
                      }
                    : {},
                ]"
              >
                <!--  widgetSettings.widget_style_settings.available_filters.indexOf(
                  type.type.charAt(0).toLowerCase + type.type.slice(1)
                ) >= 0 && getTypeLength(type.type).length > 0 -->
                <div
                  v-if="true"
                  class="event-filter-container svv-steps-container-block"
                >
                  <h3 class="svv-filter-heading svv-small-filter">
                    {{
                      getTypeTranslation(
                        selectedTypes[selectedFilterNumber - 1].type
                      )
                    }}
                    <IconRight
                      v-if="
                        !widgetSettings.widget_style_settings
                          .show_filters_expanded
                      "
                      :class="[
                        `filter-icon${
                          viewFiltersSection[
                            `${selectedTypes[selectedFilterNumber - 1].type}`
                          ]
                            ? ''
                            : '-collapsed'
                        }`,
                      ]"
                    />
                  </h3>
                  <div
                    :class="`svv-filter-option-${
                      widgetSettings.widget_style_settings
                        .show_filters_expanded ||
                      viewFiltersSection[
                        `${selectedTypes[selectedFilterNumber - 1].type}`
                      ]
                        ? ''
                        : 'collapsed'
                    }`"
                  >
                    <div
                      v-for="entity in getSelectOptions(
                        selectedTypes[selectedFilterNumber - 1].type
                      )"
                      :key="entity.label"
                      @click="
                        onFilterSelectValue(
                          entity,
                          selectedTypes[selectedFilterNumber - 1].type
                        )
                      "
                      :class="[
                        `svv-select-options-${
                          selectedFilters[
                            selectedTypes[selectedFilterNumber - 1].type
                          ] === entity.value
                            ? 'selected'
                            : ''
                        }`,
                      ]"
                    >
                      <input
                        type="checkbox"
                        :checked="
                          getSelectValue(
                            entity.value,
                            selectedTypes[selectedFilterNumber - 1].type
                          )
                        "
                      />
                      <label>{{ entity.label }}</label>
                    </div>
                    <!-- Disable unavailable options -->
                    <!-- <div
                      v-for="entity in getSelectOptions(
                        selectedTypes[selectedFilterNumber - 1].type
                      )"
                      :key="entity.label"
                      @click="
                        isOptionDisabled(
                          entity,
                          selectedTypes[selectedFilterNumber - 1]
                        )
                          ? () => {}
                          : onFilterSelectValue(
                              entity,
                              selectedTypes[selectedFilterNumber - 1].type
                            )
                      "
                      :class="[
                        `svv-select-options-${
                          isOptionDisabled(
                            entity,
                            selectedTypes[selectedFilterNumber - 1]
                          )
                            ? 'disabled'
                            : ''
                        }${
                          getSelectValue(
                            entity.value,
                            selectedTypes[selectedFilterNumber - 1].type,
                            getSelectOptions(
                              selectedTypes[selectedFilterNumber - 1].type
                            )
                          )
                            ? 'selected'
                            : ''
                        }`,
                      ]"
                    >
                      <input
                        type="checkbox"
                        :disabled="
                          isOptionDisabled(
                            entity,
                            selectedTypes[selectedFilterNumber - 1]
                          )
                        "
                        :checked="
                          getSelectValue(
                            entity.value,
                            selectedTypes[selectedFilterNumber - 1].type,
                            getSelectOptions(
                              selectedTypes[selectedFilterNumber - 1].type
                            )
                          )
                        "
                      />
                      <label>{{ entity.label }}</label>
                    </div> -->
                  </div>
                </div>
                <div v-else></div>
              </div>
            </div>
          </div>
          <!-- <a
            href=""
            @click.prevent="handleNextFilter()"
            :class="[`show-desktop-calendar-btn`]"
          >

            <div class="show-calendar-btn-label">
              Find events
              <SearchIcon
                class="open-search-icon steps-icon"
                style="width: 1em; margin-left: 0.5em; fill: #fff"
              />
            </div>
          </a> -->
        </div>
        <!-- <div class="svv-filters-steps-navigation">
          <a
            href=""
            @click.prevent="handlePrevFilter()"
            :class="[`category-control-button`]"
          >
            <IconLeft />
          </a>
          <a
            href=""
            @click.prevent="handleNextFilter()"
            :class="[`category-control-button`]"
            :disabled="selectedFilterNumber + 1 === selectedTypes.length"
          >
            <IconRight />
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import EventsCalendarSection from "@/components/common/EventsCalendarSection";
import TrashIcon from "@/assets/images/icons/refresh.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import IconRight from "@/assets/icons/chevron-right-minor.svg";
import IconLeft from "@/assets/icons/chevron-left-minor.svg";
import SearchIcon from "@/assets/icons/loupe.svg";
export default {
  name: "EventsFiltersMultiSelect",
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
    IconLeft,
    SearchIcon,
    EventsCalendarSection,
  },
  data() {
    return {
      isCategoryAutoSelected: false,
      selectedFilterNumber: 1,
      value: "",
      searchString: {},
      viewFiltersSection: {
        Teams: false,
        Members: false,
        Locations: false,
        Languages: false,
        Categories: false,
        Dates: true,
      },
      selectedFilters: {
        Teams: [],
        Members: [],
        Locations: [],
        Categories: [],
        Languages: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      eventTypes: "types/eventTypes",
      meetingsList: "events/meetings",
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
      isStepsCompleted: "common/isStepsCompleted",
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
  watch: {},
  methods: {
    ...mapActions({
      parseSearchRequest: "search/parseSearchRequest",
      clearAllFilters: "search/clearAllFilters",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
      setMultiSearchString: "events/setMultiSearchString",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",

      setMeetingsList: "events/setMeetingsList",
    }),
    handlePrevFilter() {
      if (this.selectedFilterNumber > 0) {
        this.selectedFilterNumber -= 1;
      }
    },
    handleNextFilter() {
      this.setMultiSearchString(this.searchString);
      this.fetchEventsWithMultipleFilters();
    },
    toggleFilterView(section) {
      Object.keys(this.viewFiltersSection).forEach((filter) => {
        this.viewFiltersSection[filter] = false;
      });
      this.viewFiltersSection[section] = !this.viewFiltersSection[section];
    },
    closeAllFilters() {
      Object.keys(this.viewFiltersSection).forEach((filter) => {
        this.viewFiltersSection[filter] = false;
      });
    },
    getTypeLength(type) {
      if (type === "Teams") return this.typeListTeams;
      if (type === "Members") return this.typeListMembers;
      if (type === "Locations") return this.typeListLocations;
      if (type === "Languages") return this.typeListLanguages;
      if (type === "Categories") return this.typeListCategories;
    },
    getTypeTranslation(type) {
      if (type === "Teams") return this.$t("customFilters.filter_label_teams");
      if (type === "Members")
        return this.$t("customFilters.filter_label_members");
      if (type === "Locations")
        return this.$t("customFilters.filter_label_locations");
      if (type === "Languages")
        return this.$t("customFilters.filter_label_languages");
      if (type === "Categories")
        return this.$t("customFilters.filter_label_categories");
    },
    isOptionDisabled(option, type) {
      if (this.meetingsList.page_count === 0) {
        return false;
      } else {
        // let flag = false;
        // this.meetingsList.meetings.forEach((meeting) => {
        //   if (type.type === "Categories") {
        //     if (
        //       meeting.category_id === option.value ||
        //       meeting.category_id === null
        //     ) {
        //       flag = true;
        //     }
        //   }
        //   //TODO
        //   // else if (type.type === 'Teams'){
        //   //   if (meeting.teams_id===option.value){
        //   //     flag = true
        //   //   }
        //   // }
        //   else if (type.type === "Members") {
        //     if (
        //       meeting.members_id === option.value ||
        //       meeting.members_id === null
        //     ) {
        //       flag = true;
        //     }
        //   } else if (type.type === "Locations") {
        //     if (
        //       meeting.location_id === option.value ||
        //       meeting.location_id === null
        //     ) {
        //       flag = true;
        //     }
        //   } else if (type.type === "Languages") {
        //     if (
        //       meeting.language_id === option.value ||
        //       meeting.language_id === null
        //     ) {
        //       flag = true;
        //     }
        //   }
        // });
        let flag = false;
        this.meetingsList.meetings.forEach((meeting) => {
          if (type.type === "Categories") {
            if (meeting.category_id === option.value) {
              flag = true;
            }
          }
          //TODO
          else if (type.type === "Teams") {
            flag = true;
          } else if (type.type === "Members") {
            if (
              meeting.members_id &&
              meeting.members_id.length > 0 &&
              meeting.members_id.indexOf(option.value) >= 0
            ) {
              flag = true;
            }
          } else if (type.type === "Locations") {
            if (meeting.location_id === option.value) {
              flag = true;
            }
          } else if (type.type === "Languages") {
            if (meeting.language_id === option.value) {
              flag = true;
            }
          }
        });
        return !flag;
      }
    },
    getSelectValue(value, typeName, optionsList) {
      if (!value) {
        return value;
      }
      if (this.selectedFilters?.[typeName]) {
        return this.selectedFilters[typeName].indexOf(value) >= 0;
      } else return false;
      // const allRequestParamsUpdated = this.allRequestParams;
      // if (!value) {
      //   return value;
      // }
      // return allRequestParamsUpdated[typeName] === value;
    },
    async onFilterSelectValue(selectedValue, selectedTypeName) {
      if (
        this.searchString?.[selectedTypeName] &&
        this.searchString[selectedTypeName].find(
          (val) => val === selectedValue.value
        )
      ) {
        this.searchString[selectedTypeName] = this.searchString[
          selectedTypeName
        ].filter((val) => val !== selectedValue.value);

        this.selectedFilters[selectedTypeName] = this.selectedFilters[
          selectedTypeName
        ].filter((val) => val !== selectedValue.value);
      } else {
        if (!this.searchString?.[selectedTypeName]) {
          this.searchString[selectedTypeName] = [selectedValue.value];
          this.selectedFilters[selectedTypeName] = [selectedValue.value];
        } else {
          this.searchString[selectedTypeName].push(selectedValue.value);
          this.selectedFilters[selectedTypeName].push(selectedValue.value);
        }
      }
      // this.setLoading(true);
      this.setMultiSearchString(this.searchString);
      this.fetchEventsWithMultipleFilters({ stepsCompleted: false });
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
      // await this.setLoading(true);
      this.selectedFilters = {
        Teams: [],
        Members: [],
        Locations: [],
        Categories: [],
        Languages: [],
      };
      this.setMultiSearchString("");
      this.fetchEventsWithMultipleFilters();
    },
    onCloseMobileFiltersClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(false);
    },
  },
  mounted() {
    this.searchString = { ...this.multiSearchString };

    // this.fetchEventsWithMultipleFilters({ stepsCompleted: false });
  },
};
</script>

<style lang="scss" scoped>
/*@import '~vue-select/src/scss/vue-select.scss';*/
</style>
