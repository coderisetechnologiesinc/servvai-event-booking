<template>
  <div class="svv-selected-filters-panel">
    <div
      v-for="item in getSearchParams"
      :key="item.value + item.name"
      class="svv-selected-filter-badge"
    >
      <span>{{ getEventType(item.name, item.value) }}</span>
      <CloseIcon
        class="svv-filter-badge-close-icon"
        @click="handleRemoveFilter(item.name, item.value)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CloseIcon from "@/assets/images/icons/close.svg";

export default {
  name: "SelectedFiltersPanel",
  components: {
    CloseIcon,
  },
  data() {
    return {
      searchString: "",
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      allRequestParams: "search/allRequestParams",
      multiSearchString: "events/multiSearchString",
      reqParams: "events/reqParams",
      eventTypes: "types/eventTypes",
    }),

    getSearchParams() {
      let fitlersFromSearch = Object.keys(this.searchString);
      let valuesFromSearch = [];
      fitlersFromSearch.map((filter) => {
        if (this.searchString[filter].length > 1) {
          valuesFromSearch.push(
            ...this.searchString[filter].map((fil) => {
              return { name: filter, value: fil };
            })
          );
        } else if (this.searchString[filter].length === 1) {
          valuesFromSearch.push({
            name: filter,
            value: this.searchString[filter][0],
          });
        }

        return valuesFromSearch;
      });

      return valuesFromSearch.filter((value) => value?.name) || [];
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
  watch: {
    reqParams(newVal) {
      if (newVal) {
        // this.searchString = { ...this.multiSearchString } || {};
      }
    },
    multiSearchString(newVal) {
      this.searchString = { ...this.multiSearchString } || {};
    },
    // getSearchParams(newVal) {
    //   console.log(newVal);
    // },
  },
  methods: {
    ...mapActions({
      parseSearchRequest: "search/parseSearchRequest",
      clearAllFilters: "search/clearAllFilters",
      fetchEventsWithMultipleFilters: "events/fetchEventsWithMultipleFilters",
      setMultiSearchString: "events/setMultiSearchString",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
    }),
    getEventType(type, value) {
      if (type === "Teams")
        return this.typeListTeams.filter((el) => el.id === value)[0].name;
      if (type === "Members")
        return this.typeListMembers.filter((el) => el.id === value)[0].name;
      if (type === "Locations")
        return this.typeListLocations.filter((el) => el.id === value)[0].name;
      if (type === "Languages")
        return this.typeListLanguages.filter((el) => el.id === value)[0].name;
      if (type === "Categories")
        return this.typeListCategories.filter((el) => el.id === value)[0].name;
      if (type === "Dates") return value;
    },
    handleRemoveFilter(type, value) {
      let searchParams = this.multiSearchString;
      searchParams[type].pop(value);
      this.setMultiSearchString(searchParams);
      this.fetchEventsWithMultipleFilters();
    },
  },
  mounted() {
    this.searchString = { ...this.multiSearchString };
  },
};
</script>

<style lang="scss" scoped>
</style>
