<template>
  <div
    :class="{
      'events-filters-container': true,
      'active-filter': true,
    }"
  >
    <div class="events-filters-inner-container" v-show="true">
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
        class="events-filters-controls-wrapper events-filters-selects-classic svv-steps-container"
      >
        <div
          class="events-filters-selects-wrapper events-filters-selects-classic"
        >
          <div class="events-filters-controls">
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

          <div class="svv-filter-steps">
            <!--  widgetSettings.widget_style_settings.available_filters.indexOf(
                  type.type.charAt(0).toLowerCase + type.type.slice(1)
                ) >= 0 && getTypeLength(type.type).length > 0 -->
            <div
              v-if="true"
              class="event-filter-container multi-filter-section"
            >
              <h2 class="svv-filter-heading">
                {{
                  getTypeTranslation(selectedTypes[selectedFilterNumber].type)
                }}
              </h2>
              <div class="svv-filter-option">
                <div
                  v-for="entity in getSelectOptions(
                    selectedTypes[selectedFilterNumber].type
                  )"
                  :key="entity.label"
                >
                  <input
                    type="checkbox"
                    :checked="
                      getSelectValue(
                        entity.value,
                        selectedTypes[selectedFilterNumber].type,
                        getSelectOptions(
                          selectedTypes[selectedFilterNumber].type
                        )
                      )
                    "
                    @change="
                      onFilterSelectValue(
                        entity,
                        selectedTypes[selectedFilterNumber].type
                      )
                    "
                  />
                  <label>{{ entity.label }}</label>
                </div>
              </div>
            </div>
            <div v-else></div>
            <div class="svv-filters-steps-navigation">
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
            </div>
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
import IconLeft from "@/assets/icons/chevron-left-minor.svg";
export default {
  name: "EventsFiltersMultiSelectMobile",
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
  },
  data() {
    return {
      isCategoryAutoSelected: false,
      selectedFilterNumber: 0,
      value: "",
      searchString: {},
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
      multiSearchString: "",
    }),
    selectedTypes() {
      if (
        this.widgetSettings?.widget_style_settings?.ew_widget_steps &&
        this.widgetSettings.widget_style_settings.ew_widget_steps.length > 0
      ) {
        return JSON.parse(
          this.widgetSettings.widget_style_settings.ew_widget_steps
        ).filter((type) => type.selected);
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
      setMultiSearchString: "events/setMultiSearchString",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
      setOpenMobileFilters: "common/setOpenMobileFilters",
      setOpenMobileCalendar: "common/setOpenMobileCalendar",
    }),
    handlePrevFilter() {
      if (this.selectedFilterNumber > 0) {
        this.selectedFilterNumber -= 1;
      }
    },
    handleNextFilter() {
      if (this.selectedFilterNumber < this.selectedTypes.length - 1) {
        this.selectedFilterNumber += 1;
      } else {
        this.setMultiSearchString(this.searchString);
        this.fetchEventsWithMultipleFilters();
      }
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
    getSelectValue(value, typeName, optionsList) {
      const allRequestParamsUpdated = this.allRequestParams;
      if (!value) {
        return value;
      }
      return allRequestParamsUpdated[typeName] === value;
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
      return this[`typeList${typeName}`].map((item) => {
        return { label: item.name, value: item.id };
      });
    },
    async onClearAllFilters() {
      await this.setLoading(true);
      this.setMultiSearchString("");
      this.fetchEventsWithMultipleFilters();
    },
    onCloseMobileFiltersClick() {
      this.setOpenMobileCalendar(false);
      this.setOpenMobileFilters(false);
    },
  },
  mounted() {
    // this.fetchEventsWithMultipleFilters();
  },
};
</script>

<style lang="scss" scoped>
/*@import '~vue-select/src/scss/vue-select.scss';*/
</style>
